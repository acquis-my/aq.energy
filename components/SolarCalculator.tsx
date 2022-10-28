import Link from "next/link";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Estimate from "../lib/SolarEstimate";
import Graph from "./Graph";

export default function SolarCalculator() {
  const [bill, setBill] = useState(250);
  const estimate = new Estimate(bill);

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

        {/* <div className="">
          <h2 className="text-lg font-semibold">Cost Breakdown</h2>
          <pre>Usage: {estimate.getUsage()} kWh</pre>
          <pre>Savings: RM {estimate.getSavings()}/mo</pre>
          <pre>Size: {estimate.getSystemSize()}kWp</pre>
        </div> */}

        {!estimate.meetBillReq && (
          <div className="block bg-blue-100 px-6 py-4">
            <h2 className="text-blue-500 font-semibold">Note</h2>
            <p className="text-blue-900 text-sm">
              We are unable to provide an estimate if your electric bill is less
              than RM 250/mo or more than RM 900/mo.
            </p>
            <p className="text-blue-900 text-sm pt-2">
              Please{" "}
              <Link href="/about#contact">
                <a className="italic">contact us</a>
              </Link>{" "}
              for more information.
            </p>
          </div>
        )}
      </section>
      <section className="w-full mt-4 md:mt-0 lg:w-2/3 bg-black-coral rounded-md">
        <div className="flex flex-row py-8 xl:py-12 justify-between sm:divide-x-4 divide-slate-500 text-white">
          <div className="w-full sm:w-1/3 pl-8 xl:pl-16">
            <h2 className="text-xs sm:text-sm">Monthly Savings</h2>
            <span className="text-xl sm:text-3xl xl:text-4xl font-semibold">
              {estimate.meetBillReq
                ? `RM ${estimate.getSavings().toFixed(0)}`
                : "-"}
            </span>
          </div>
          <div className="w-full sm:w-1/3 sm:pl-8 xl:pl-16">
            <h2 className="text-xs sm:text-sm">System Size</h2>
            <span className="text-xl sm:text-3xl xl:text-4xl font-semibold">
              {estimate.meetBillReq
                ? `${estimate.getSystemSize().toFixed(2)} kWp`
                : "-"}
            </span>
          </div>
          <div className="w-full sm:w-1/3 sm:pl-8 xl:pl-16">
            <h2 className="text-xs sm:text-sm">Breakeven Time</h2>
            <span className="text-xl sm:text-3xl xl:text-4xl font-semibold">
              {estimate.meetBillReq
                ? `${estimate.getROI().toFixed(1)} yrs`
                : "-"}
            </span>
          </div>
        </div>
        <div className="w-full aspect-[4/3] sm:aspect-[2/1] px-4 pb-6 xl:px-16 md:pb-12 overflow-hidden">
          <Graph data={estimate.generateGraphData()} />
        </div>
      </section>
    </div>
  );
}
