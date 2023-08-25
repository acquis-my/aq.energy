"use client";
import Turnstile from "react-turnstile";
import FieldError from "./FieldError";
import { Field, Form, Formik } from "formik";
import { PatternFormat } from "react-number-format";
import * as Yup from "yup";
import { env } from "~/env.mjs";
import { type QuoteData } from "./QuoteForm";

const SITE_KEY = env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

const Step2Schema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").required("Required"),
  phone: Yup.string()
    .matches(/^0[0-9]{9,10}$/g, "Invalid number")
    .required("Required"),
});

interface StepProps {
  data: QuoteData;
  isSubmitting: boolean;
  next: (data: QuoteData, final?: boolean) => void;
  prev: (data: QuoteData) => void;
}

const Step2 = ({ data, isSubmitting, next, prev }: StepProps) => {
  return (
    <Formik
      initialValues={data}
      validationSchema={Step2Schema}
      onSubmit={(values) => next(values, true)}
    >
      {({ values, errors, touched, setFieldTouched, setFieldValue }) => (
        <Form>
          <div
            className={`grid grid-cols-6 gap-6 ${
              isSubmitting ? "opacity-60" : ""
            }`}
          >
            <div className="col-span-6 flex w-full flex-col ">
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                {errors.name && touched.name ? (
                  <FieldError>{errors.name}</FieldError>
                ) : null}
              </div>
              <Field
                name="name"
                disabled={isSubmitting}
                placeholder="Karen Tan"
                className="border border-slate-200 p-3 tracking-wide text-gray-700"
              />
            </div>

            <div className="col-span-6 flex w-full flex-col">
              <div className="flex items-center justify-between">
                <label htmlFor="phone" className="font-semibold">
                  phone
                </label>
                {errors.phone && touched.phone ? (
                  <FieldError>{errors.phone}</FieldError>
                ) : null}
              </div>
              <PatternFormat
                name="phone"
                disabled={isSubmitting}
                valueIsNumericString
                format="###-### #####"
                value={values.phone}
                placeholder="012-345 6789"
                className="border border-slate-200 p-3 tracking-wide text-gray-700"
                onBlur={() => {
                  if (!values.phone) {
                    setFieldTouched("phone", true);
                  }
                }}
                onValueChange={(vals) => {
                  void setFieldValue("phone", vals.value);
                }}
              />
            </div>

            <div className="col-span-6 h-20 w-full overflow-x-auto">
              <Turnstile
                sitekey={SITE_KEY}
                action="get-quote"
                onVerify={(token) => setFieldValue("token", token)}
              />
            </div>
          </div>

          <div className="col-span-6 mt-6 flex w-full items-end justify-center gap-2 sm:justify-end">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => prev(values)}
              className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || values.token === ""}
              className={`h-10 cursor-pointer rounded-lg bg-indigo-dye px-12 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60`}
            >
              {isSubmitting ? "Submitting..." : "Get Quote"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
