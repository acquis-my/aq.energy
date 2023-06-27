"use client";
import Turnstile from "react-turnstile";
import FieldError from "./FieldError";
import { Field, Form, Formik } from "formik";
import { PatternFormat } from "react-number-format";
import * as Yup from "yup";
import { env } from "~/env.mjs";

const SITE_KEY = env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

const Step2Schema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").required("Required"),
  mobile: Yup.string()
    .matches(/^0[0-9]{9,10}$/g, "Invalid number")
    .required("Required"),
});

const Step2 = ({ data, isSubmitting, next, prev }: any) => {
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
            <div className="w-full flex flex-col col-span-6 ">
              <div className="flex justify-between items-center">
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
                className="p-3 border border-slate-200 text-gray-700 tracking-wide"
              />
            </div>

            <div className="w-full flex flex-col col-span-6">
              <div className="flex justify-between items-center">
                <label htmlFor="mobile" className="font-semibold">
                  Mobile
                </label>
                {errors.mobile && touched.mobile ? (
                  <FieldError>{errors.mobile}</FieldError>
                ) : null}
              </div>
              <PatternFormat
                name="mobile"
                disabled={isSubmitting}
                valueIsNumericString
                format="###-### #####"
                value={values.mobile}
                placeholder="012-345 6789"
                className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                onBlur={() => {
                  if (!values.mobile) {
                    setFieldTouched("mobile", true);
                  }
                }}
                onValueChange={(vals) => {
                  setFieldValue("mobile", vals.value);
                }}
              />
            </div>

            <div className="col-span-6 w-full overflow-x-auto h-20">
              <Turnstile
                sitekey={SITE_KEY}
                action="get-quote"
                onVerify={(token) => setFieldValue("token", token)}
              />
            </div>
          </div>

          <div className="w-full flex justify-center sm:justify-end items-end col-span-6 gap-2 mt-6">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => prev(values)}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white h-10 px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || values.token === ""}
              className={`h-10 px-12 py-2 cursor-pointer bg-indigo-dye text-white rounded-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed`}
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
