"use client";
import { Field, Form, Formik } from "formik";
import FieldError from "./FieldError";
import { NumericFormat } from "react-number-format";
import states from "../../../lib/states";
import fmtString from "../../../lib/fmt_string";
import * as Yup from "yup";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { type QuoteData } from "./QuoteForm";

const Step1Schema = Yup.object().shape({
  bill: Yup.number().required("Required"),
  state: Yup.string()
    .oneOf([...states])
    .required("Required"),
});

interface StepProps {
  data: QuoteData;
  next: (data: QuoteData) => void;
}

const Step1 = ({ data, next }: StepProps) => {
  const params = useSearchParams();
  const bill = params.get("bill") ?? 0;

  const [prefilled, setPrefilled] = useState(!!bill);

  return (
    <Formik
      validationSchema={Step1Schema}
      initialValues={data}
      onSubmit={(values) => next(values)}
    >
      {({ values, errors, touched, setFieldTouched, setFieldValue }) => (
        <Form className="grid grid-cols-6 gap-6">
          <div className="col-span-6 flex flex-col">
            <label htmlFor="is_commercial" className="font-semibold">
              Installation type
            </label>

            <div
              role="group"
              className="mt-1 flex flex-row justify-around gap-x-2"
            >
              <label
                htmlFor="home_radio"
                className={`border ${
                  values.type === "RESIDENTIAL"
                    ? "border-slate-300 shadow-sm"
                    : "border-gray-200"
                } flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm accent-indigo-dye sm:text-base`}
              >
                <Field
                  id="home_radio"
                  type="radio"
                  name="type"
                  value={"RESIDENTIAL"}
                  checked={values.type === "RESIDENTIAL"}
                />
                Residential
              </label>
              <label
                htmlFor="commercial_radio"
                className={`border ${
                  values.type === "COMMERCIAL"
                    ? "border-slate-300 shadow-sm"
                    : "border-gray-200"
                } flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm accent-indigo-dye sm:text-base`}
              >
                <Field
                  id="commercial_radio"
                  type="radio"
                  name="type"
                  value={"COMMERCIAL"}
                  checked={values.type === "COMMERCIAL"}
                />
                Commercial
              </label>
            </div>
          </div>

          <div className="col-span-6 flex w-full flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="mobile" className="font-semibold">
                Average TNB Bill
              </label>
              {errors.bill && touched.bill ? (
                <FieldError>{errors.bill}</FieldError>
              ) : null}
            </div>
            <div className="flex gap-2 rounded border border-slate-200 p-3 tracking-wide text-gray-700">
              <span className="font-semibold">RM</span>
              <NumericFormat
                name="bill"
                value={values.bill}
                decimalScale={0}
                thousandSeparator={","}
                placeholder="0"
                allowNegative={false}
                onValueChange={(v) => {
                  setPrefilled(false);
                  void setFieldValue("bill", v.floatValue);
                }}
                onBlur={() => {
                  if (!values.bill) {
                    setFieldTouched("bill", true);
                  }
                }}
                className="w-full border-0 p-0 text-right focus:outline-none focus:ring-0"
              />
            </div>
            {prefilled ? (
              <div className="mt-1 text-sm text-slate-600">
                This field has been pre-filled using information you&apos;ve
                entered from our calculator.
              </div>
            ) : null}
          </div>

          <div className="col-span-6 flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="state" className="font-semibold">
                State
              </label>
              {errors.state && touched.state ? (
                <FieldError>{errors.state}</FieldError>
              ) : null}
            </div>
            <Field
              name="state"
              component="select"
              className="rounded border border-slate-200 p-3 tracking-wide text-gray-700"
            >
              <option value={""}>- Select State -</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {fmtString(state, "_")}
                </option>
              ))}
            </Field>
          </div>

          <div className="col-span-6 mt-1 flex w-full items-end justify-center sm:justify-end">
            <button
              type="submit"
              className={`h-10 cursor-pointer rounded-lg bg-indigo-dye px-12 py-2 text-sm text-white `}
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
