"use client";
import Link from "next/link";
import Graph from "./Graph";
import Estimate, { PaymentMethod } from "../lib/SolarEstimate";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/navigation";
import { useCalculatorStore } from "~/stores/calculatorStore";

const MIN_BILL: number = 200;
const MAX_BILL: number = 1000;

export default function SolarCalculator() {
  const router = useRouter();
  const { bill, tenure, paymentMethod, setValues } = useCalculatorStore();

  const estimate = new Estimate(bill, {
    paymentMethod: paymentMethod,
    tenure: tenure,
    interest: 0.02,
    minBill: MIN_BILL,
    maxBill: MAX_BILL,
  });

  return (
    <div className="flex flex-col lg:flex-row mt-12 pt-4 md:p-4 lg:p-8 gap-y-10 gap-x-10 border border-gray-200 bg-white shadow-lg shadow-gray-100 rounded-md justify-between">
      <section className="w-full lg:w-1/3 flex flex-col gap-2 gap-y-6 lg:gap-8 p-4">
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
          <label className="text-slate-700">Current electricity bill</label>
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
              onValueChange={(v) => setValues({ bill: v.floatValue ?? 0 })}
              // onValueChange={(v) => setBill(v.floatValue ?? 0)}
              className="w-full border-0 focus:ring-0"
            />
          </div>
        </div>
        <div className="">
          <label className="text-slate-700">Payment Method</label>
          <select
            className="w-full px-3 focus:ring-0 border border-slate-200"
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
            <div className="text-xs pt-1">
              This option is only available through Affin Bank.
            </div>
          ) : null}
        </div>

        {paymentMethod === "credit" ? (
          <div className="">
            <label className="text-slate-700">Installment Duration</label>
            <select
              className="w-full px-3 focus:ring-0 border border-slate-200"
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
            <h2 className="text-blue-500 font-semibold">Note</h2>
            <p className="text-blue-900 text-sm">
              We are unable to provide an estimate if your electric bill is less
              than RM {MIN_BILL}/mo or more than RM {MAX_BILL}/mo.
            </p>
            <p className="text-blue-900 text-sm pt-2">
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
          className="bg-indigo-dye text-white p-3 rounded-md text-center hover:opacity-95"
        >
          Get Quote
        </Link>
      </section>
      <section className="relative w-full mt-4 md:mt-0 lg:w-2/3 bg-black-coral rounded-md flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row px-4 sm:px-0 py-2 sm:py-6 xl:py-10 justify-between divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-slate-500 text-white">
          <div className="w-full sm:w-1/3 py-4 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            {paymentMethod === "loan" ? (
              <>
                <h2 className="text-xs sm:text-sm">Monthly Bill Savings</h2>
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                  {estimate.meetBillReq
                    ? `RM ${estimate.getSavings().toFixed(0)}`
                    : "-"}
                </span>
              </>
            ) : (
              <>
                <h2 className="text-xs sm:text-sm">Monthly Savings</h2>
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                  {estimate.meetBillReq
                    ? `RM ${estimate.getSavings().toFixed(0)}`
                    : "-"}
                </span>
              </>
            )}
          </div>
          <div className="w-full sm:w-1/3 py-4 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            <h2 className="text-xs sm:text-sm">System Size</h2>
            <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
              {estimate.meetBillReq
                ? `${estimate.getSystemSize().toFixed(2)} kWp`
                : "-"}
            </span>
          </div>
          <div className="w-full sm:w-1/3 py-4 sm:py-2 sm:pl-6 xl:pl-14 2xl:pl-16">
            {paymentMethod === "loan" ? (
              <>
                <h2 className="text-xs sm:text-sm">Net Yearly Savings</h2>
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                  {estimate.meetBillReq
                    ? `RM ${(
                        estimate.getSavings() * 12 -
                        estimate.getCost() / 10
                      ).toFixed(0)}`
                    : "-"}
                </span>
              </>
            ) : (
              <>
                <h2 className="text-xs sm:text-sm">Breakeven Time</h2>
                <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                  {estimate.meetBillReq
                    ? `${estimate.getROI().toFixed(1)} yrs`
                    : "-"}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="w-full aspect-[4/3] sm:aspect-[2/1] px-4 pb-6 xl:px-14 2xl:pl-16 md:px-6 md:pb-12 overflow-hidden">
          {estimate.meetBillReq && (
            <Graph
              data={estimate.generateGraphData()}
              paymentMethod={paymentMethod}
            />
          )}
        </div>
      </section>
    </div>
  );
}
