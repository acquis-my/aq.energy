"use client";
import Link from "next/link";
import Graph from "./Graph";
import Estimate, { type PaymentMethod } from "../lib/SolarEstimate";
import { NumericFormat } from "react-number-format";
import { useCalculatorStore } from "~/stores/calculatorStore";

const MIN_BILL: number = 200;
const MAX_BILL: number = 1000;

export default function SolarCalculator() {
  const { bill, tenure, paymentMethod, setValues } = useCalculatorStore();

  const estimate = new Estimate(bill, {
    paymentMethod: paymentMethod,
    tenure: tenure,
    interest: 0.02,
    minBill: MIN_BILL,
    maxBill: MAX_BILL,
  });

  const currency = Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="mt-12 flex flex-col justify-between gap-x-10 gap-y-10 rounded-md border border-gray-200 bg-white pt-4 shadow-lg shadow-gray-100 md:p-4 lg:flex-row lg:p-8">
      <section className="flex w-full flex-col gap-2 gap-y-6 p-4 lg:w-1/3 lg:gap-8">
        <div className="">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Savings Estimate
          </h2>
          <p className="mt-2 text-sm text-gray-500 lg:text-base">
            Input your current electric bill below and see how much you could
            save each month.
          </p>
        </div>
        <div className="">
          <label className="text-slate-700">Current electricity bill</label>
          <div className="border-grey-900 flex flex-row items-center border px-3">
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
              onValueChange={(v) => setValues({ bill: v.floatValue ?? 0 })}
              // onValueChange={(v) => setBill(v.floatValue ?? 0)}
              className="w-full border-0 focus:ring-0"
            />
          </div>
        </div>
        <div className="">
          <label className="text-slate-700">Payment Method</label>
          <select
            className="w-full border border-slate-200 px-3 focus:ring-0"
            value={paymentMethod}
            onChange={(e) => {
              setValues({ paymentMethod: e.target.value as PaymentMethod });
              // return setPayType(e.target.value as PaymentMethod);
            }}
          >
            <option value={"cash"}>Upfront Payment</option>
            <option value={"credit"}>
              Easy Payment Plan - 2% interest p.a.
            </option>
            {bill >= 370 && (
              <option value={"loan"}>Solar Loan - 10 years</option>
            )}
          </select>
          {paymentMethod === "loan" ? (
            <div className="pt-1 text-xs">
              This option is only available through Affin Bank.
            </div>
          ) : null}
        </div>

        {paymentMethod === "credit" ? (
          <div className="">
            <label className="text-slate-700">Installment Duration</label>
            <select
              className="w-full border border-slate-200 px-3 focus:ring-0"
              value={tenure}
              onChange={(e) => {
                setValues({ tenure: Number(e.target.value) });
              }}
              // onChange={(e) => setTenure(Number(e.target.value))}
            >
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={5}>5 years (Affin bank only)</option>
            </select>
          </div>
        ) : null}

        {!estimate.meetBillReq && (
          <div className="block bg-blue-100 px-6 py-4">
            <h2 className="font-semibold text-blue-500">Note</h2>
            <p className="text-sm text-blue-900">
              We are unable to provide an estimate if your electric bill is less
              than RM {MIN_BILL}/mo or more than RM {MAX_BILL}/mo.
            </p>
            <p className="pt-2 text-sm text-blue-900">
              Please{" "}
              <Link href="/about#contact" className="italic">
                contact us
              </Link>{" "}
              for more information.
            </p>
          </div>
        )}

        <Link
          href="/quote"
          className="rounded-md bg-indigo-dye p-3 text-center text-white hover:opacity-95"
        >
          Get Quote
        </Link>
      </section>
      <section className="relative mt-4 flex w-full flex-col justify-between rounded-md bg-black-coral md:mt-0 lg:w-2/3">
        <div className="flex flex-col justify-between divide-y-4 divide-slate-500 px-4 py-2 text-white sm:flex-row sm:divide-x-4 sm:divide-y-0 sm:px-0 sm:py-6 xl:py-10">
          <div className="w-full py-4 sm:w-1/3 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            {paymentMethod === "loan" ? (
              <>
                <h2 className="text-xs sm:text-sm">Monthly Bill Savings</h2>
                <span className="text-xl font-semibold sm:text-2xl xl:text-3xl">
                  {estimate.meetBillReq
                    ? currency.format(estimate.getSavings())
                    : "-"}
                </span>
              </>
            ) : (
              <>
                <h2 className="text-xs sm:text-sm">Monthly Savings</h2>
                <span className="text-xl font-semibold sm:text-2xl xl:text-3xl">
                  {estimate.meetBillReq
                    ? currency.format(estimate.getSavings())
                    : "-"}
                </span>
              </>
            )}
          </div>
          <div className="w-full py-4 sm:w-1/3 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            <h2 className="text-xs sm:text-sm">System Size</h2>
            <span className="text-xl font-semibold sm:text-2xl xl:text-3xl">
              {estimate.meetBillReq
                ? `${Intl.NumberFormat("en-MY", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  }).format(estimate.getSystemSize())} kWp`
                : "-"}
            </span>
          </div>
          <div className="w-full py-4 sm:w-1/3 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            {paymentMethod === "loan" ? (
              <>
                <h2 className="text-xs sm:text-sm">Net Yearly Savings</h2>
                <span className="text-xl font-semibold sm:text-2xl xl:text-3xl">
                  {estimate.meetBillReq
                    ? currency.format(
                        estimate.getSavings() * 12 - estimate.getCost() / 10
                      )
                    : "-"}
                </span>
              </>
            ) : (
              <>
                <h2 className="text-xs sm:text-sm">Breakeven Time</h2>
                <span className="text-xl font-semibold sm:text-2xl xl:text-3xl">
                  {estimate.meetBillReq
                    ? Intl.NumberFormat("en", {
                        style: "unit",
                        unit: "year",
                        maximumFractionDigits: 1,
                        unitDisplay: "short",
                      }).format(estimate.getROI())
                    : "-"}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden px-4 pb-6 sm:aspect-[2/1] md:px-6 md:pb-12 xl:px-14 2xl:pl-16">
          {estimate.meetBillReq && (
            <Graph
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              data={estimate.generateGraphData()}
              paymentMethod={paymentMethod}
            />
          )}
        </div>
      </section>
    </div>
  );
}
