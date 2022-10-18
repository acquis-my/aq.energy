import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Graph from "./Graph";

type Bill = number;
type Usage<Bill> = (bill: Bill) => number;
type Tariff = {
  price: number;
  usage: number;
  totalUsage: number;
  totalCost: number;
};

const TARIFFS: Array<Tariff> = [
  { price: 0.218, usage: 200 },
  { price: 0.334, usage: 100 },
  { price: 0.516, usage: 300 },
  { price: 0.546, usage: 300 },
  { price: 0.571, usage: Infinity },
].reduce(
  (acc, curr, i) => {
    const { price, usage } = curr;
    const totalUsage = acc[i].totalUsage + usage;
    const totalCost = price * usage + acc[i].totalCost;
    return [...acc, { ...curr, totalUsage, totalCost }];
  },
  [{ price: 0, usage: 0, totalUsage: 0, totalCost: 0 }]
);

export default function SolarCalculator() {
  const [bill, setBill] = useState(250);
  const billIsMin = bill >= 250;

  const elecUsage: Usage<Bill> = () => {
    const tariffIdx: number = TARIFFS.findIndex((t) => bill < t.totalCost);

    // Usage at current tariff
    const usageCents: number = bill - TARIFFS[tariffIdx - 1].totalCost;
    const usage: number = usageCents / TARIFFS[tariffIdx].price;

    // Total electric usage
    const totalUsage: number = TARIFFS[tariffIdx - 1].totalUsage + usage;

    return Number(totalUsage.toFixed(0));
  };

  const yearlySavings = (bill: number) => {
    let costs: any = [];
    for (let i = 1; i <= 6; i++) {
      costs = [
        ...costs,
        { year: i, savings: bill * i * 10, cost: bill * i * 12 },
      ];
    }
    return costs;
  };

  return (
    <div className="flex flex-col lg:flex-row mt-12 p-4 lg:p-8 gap-y-10 gap-x-10 border border-gray-200 bg-white shadow-lg shadow-gray-100 rounded-md justify-between">
      <section className="w-full lg:w-1/3 flex flex-col gap-2 gap-y-6 lg:gap-8 lg:p-4">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Savings Estimate
          </h2>
          <p className="text-sm lg:text-base text-gray-500 mt-2">
            Input your current electric bill below and see how much you could
            save each month.
          </p>
        </div>
        <div className="">
          <label className="text-black-coral">Current electric bill</label>
          <div className="flex flex-row items-center border border-grey-900 px-3">
            <span className="font-semibold">RM</span>
            <NumericFormat
              name="bill"
              value={bill}
              min={3}
              allowNegative={false}
              step="0.01"
              decimalScale={0}
              thousandSeparator={","}
              placeholder="250"
              onValueChange={(v) => setBill(v.floatValue ?? 0)}
              className="w-full border-0 focus:ring-0"
            />
          </div>
        </div>
        {!billIsMin && (
          <div className="bg-blue-100 px-6 py-4">
            <h2 className="text-blue-500 font-semibold">Advisory</h2>
            <p className="text-blue-900 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              placeat incidunt veniam minima rem, reiciendis quam maiores
              voluptas illum sint.
            </p>
          </div>
        )}
        <div className="">
          <h2 className="text-lg font-semibold">Cost Breakdown</h2>
        </div>
      </section>
      <section className="w-full mt-4 md:mt-0 lg:w-2/3 bg-black-coral rounded-md">
        <div className="hidden sm:flex sm:flex-row py-8 xl:py-12 justify-between sm:divide-x-4 divide-slate-500 text-white">
          <div className="w-full sm:w-1/3 pl-8 xl:pl-16">
            <h2 className="text-sm">Monthly Savings</h2>
            <span className="text-3xl xl:text-4xl font-semibold">RM 380</span>
          </div>
          <div className="w-full sm:w-1/3 pl-8 xl:pl-16">
            <h2 className="text-sm">System Size</h2>
            <span className="text-3xl xl:text-4xl font-semibold">18.5 kWp</span>
          </div>
          <div className="w-full sm:w-1/3 pl-8 xl:pl-16">
            <h2 className="text-sm">Breakeven Time</h2>
            <span className="text-3xl xl:text-4xl font-semibold">4.5 yrs</span>
          </div>
        </div>
        <div className="w-full aspect-[4/3] sm:aspect-[2/1] px-4 pb-6 xl:px-16 md:pb-12 overflow-hidden">
          <Graph data={yearlySavings(bill)} />
        </div>
      </section>
    </div>
  );
}
