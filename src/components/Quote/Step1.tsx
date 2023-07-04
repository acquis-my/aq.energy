"use client";
import { Field, Form, Formik } from "formik";
import FieldError from "./FieldError";
import { NumericFormat } from "react-number-format";
import states from "../../lib/states";
import fmtString from "../../lib/fmt_string";
import * as Yup from "yup";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Step1Schema = Yup.object().shape({
  avg_bill: Yup.number().required("Required"),
  state: Yup.string()
    .oneOf([...states])
    .required("Required"),
});

const Step1 = ({ data, next }: any) => {
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
          <div className="flex flex-col col-span-6">
            <label htmlFor="is_commercial" className="font-semibold">
              Installation type
            </label>

            <div
              role="group"
              className="mt-1 flex flex-row gap-x-2 justify-around"
            >
              <label
                htmlFor="home_radio"
                className={`border ${
                  values.is_commercial == 0
                    ? "border-slate-300 shadow-sm"
                    : "border-gray-200"
                } px-4 py-3 rounded-md w-full flex gap-3 items-center text-sm sm:text-base accent-indigo-dye`}
              >
                <Field
                  id="home_radio"
                  type="radio"
                  name="is_commercial"
                  value={0}
                  checked={values.is_commercial == 0}
                />
                Residential
              </label>
              <label
                htmlFor="commercial_radio"
                className={`border ${
                  values.is_commercial == 1
                    ? "border-slate-300 shadow-sm"
                    : "border-gray-200"
                } px-4 py-3 rounded-md w-full flex gap-3 items-center text-sm sm:text-base accent-indigo-dye`}
              >
                <Field
                  id="commercial_radio"
                  type="radio"
                  name="is_commercial"
                  value={1}
                  checked={values.is_commercial == 1}
                />
                Commercial
              </label>
            </div>
          </div>

          <div className="col-span-6 w-full flex flex-col">
            <div className="flex justify-between items-center">
              <label htmlFor="mobile" className="font-semibold">
                Average TNB Bill
              </label>
              {errors.avg_bill && touched.avg_bill ? (
                <FieldError>{errors.avg_bill}</FieldError>
              ) : null}
            </div>
            <div className="flex p-3 gap-2 border border-slate-200 text-gray-700 tracking-wide rounded">
              <span className="font-semibold">RM</span>
              <NumericFormat
                name="avg_bill"
                value={values.avg_bill}
                decimalScale={0}
                thousandSeparator={","}
                placeholder="0"
                allowNegative={false}
                onValueChange={(v) => {
                  setPrefilled(false);
                  setFieldValue("avg_bill", v.floatValue);
                }}
                onBlur={() => {
                  if (!values.avg_bill) {
                    setFieldTouched("avg_bill", true);
                  }
                }}
                className="w-full text-right border-0 focus:outline-none focus:ring-0 p-0"
              />
            </div>
            {prefilled ? (
              <div className="text-sm text-slate-600 mt-1">
                This field has been pre-filled using information you&apos;ve
                entered from our calculator.
              </div>
            ) : null}
          </div>

          <div className="col-span-6 flex flex-col">
            <div className="flex justify-between items-center">
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
              className="p-3 border border-slate-200 text-gray-700 tracking-wide rounded"
            >
              <option value={""}>- Select State -</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {fmtString(state, "_")}
                </option>
              ))}
            </Field>
          </div>

          <div className="w-full flex justify-center sm:justify-end items-end col-span-6 mt-1">
            <button
              type="submit"
              className={`h-10 px-12 py-2 cursor-pointer bg-indigo-dye text-white rounded-lg text-sm `}
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
