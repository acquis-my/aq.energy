import Header from "../components/Header";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ButtonVariant2 } from "../components/Button";
import { Field, Form, Formik } from "formik";
import Turnstile from "react-turnstile";
import * as Yup from "yup";
import FieldError from "../components/FieldError";
import { NumericFormat, PatternFormat } from "react-number-format";
import SupplierLogos from "../components/SupplierLogos";

const LeadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.string()
    .matches(/^0[0-9]{9,10}$/g, "Invalid number")
    .required("Required"),
  address: Yup.string().min(10, "Too short").required("Required"),
  avg_bill: Yup.number().required("Required"),
});

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY ?? "";
const CT = [
  { label: "I don't know", value: 0 },
  { label: "Fuse 32A", value: 32 },
  { label: "Fuse 63A", value: 63 },
  { label: "CT 150/5", value: 150 },
  { label: "CT 200/5", value: 200 },
  { label: "CT 300/5", value: 300 },
  { label: "CT 400/5", value: 400 },
  { label: "CT 500/5", value: 500 },
  { label: "CT 600/5", value: 600 },
  { label: "CT 800/5", value: 800 },
  { label: "CT 1000/5", value: 1000 },
  { label: "CT 1200/5", value: 1200 },
  { label: "CT 1600/5", value: 1600 },
];

const QuoteForm = () => {
  const router = useRouter();
  const { ref = "" } = router.query;

  const [verifyUser, setVerifyUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: any) => {
    const data = { token: verifyUser, referrer: ref, ...values };
    alert(JSON.stringify(data, null, 2));
    // const API_HOST = process.env.NEXT_PUBLIC_ZEN_API ?? "http://localhost:8787";

    // try {
    //   const result = await fetch(`${API_HOST}/leads`, {
    //     method: "POST",
    //     headers: [["Content-Type", "application/json"]],
    //     body: JSON.stringify(data),
    //   });

    //   if (!result.ok) throw result.status;
    //   setIsSubmitted(true);
    // } catch (error) {
    //   alert("Something went wrong! Please try again.");
    //   console.log(error);
    // }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={LeadSchema}
      initialValues={{
        is_commercial: 0,
        language: "en",
        avg_bill: "",
        fuse_rating: 0,
        phases: 1,
        name: "",
        mobile: "",
        email: "",
        address: "",
      }}
    >
      {({
        values,
        isSubmitting,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form>
          <div className="relative mx-auto w-full max-w-3xl z-10 -mt-28 px-6 md:px-8 lg:px-14 py-8 lg:py-12 gap-10 rounded-lg shadow-lg bg-white flex flex-col border boder-slate-100 overflow-auto">
            {isSubmitted ? (
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Quote request received
                </h1>
                <p className="text-sm md:text-base pt-2 text-gray-600">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Begin your solar journey here.
                  </h1>
                  <p className="text-sm md:text-base pt-2 text-gray-600">
                    We just need some information and will get back to you with
                    your personalised quote.
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-6 md:gap-8">
                  <div className="flex flex-col col-span-6 md:col-span-3">
                    <label htmlFor="is_commercial" className="font-semibold">
                      Installation type
                    </label>
                    <Field
                      name="is_commercial"
                      component="select"
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                    >
                      <option value={0}>Residential</option>
                      <option value={1}>Commercial</option>
                    </Field>
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-3">
                    <label htmlFor="language" className="font-semibold">
                      Language
                    </label>
                    <Field
                      name="language"
                      component="select"
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                    >
                      <option value="en">English</option>
                      <option value="cn">中文</option>
                      <option value="bm">Bahasa Malaysia</option>
                    </Field>
                  </div>

                  <div className="col-span-6 md:col-span-3 flex flex-col col-start-1">
                    <label htmlFor="phases" className="font-semibold">
                      Supply Type
                    </label>
                    <Field
                      name="phases"
                      component="select"
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                    >
                      <option value={1}>Single Phase</option>
                      <option value={3}>Three Phase</option>
                    </Field>
                  </div>

                  <div className="col-span-6 md:col-span-3 w-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <label htmlFor="mobile" className="font-semibold">
                        Average TNB Bill
                      </label>
                      {errors.avg_bill && touched.avg_bill ? (
                        <FieldError>{errors.avg_bill}</FieldError>
                      ) : null}
                    </div>
                    <div className="flex p-3 gap-2 border border-slate-200 text-gray-700 tracking-wide">
                      <span className="font-semibold">RM</span>
                      <NumericFormat
                        name="avg_bill"
                        value={values.avg_bill}
                        decimalScale={0}
                        thousandSeparator={","}
                        placeholder="0"
                        allowNegative={false}
                        onValueChange={(v) => {
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
                  </div>

                  {values.is_commercial == 1 ? (
                    <div className="col-span-6 flex flex-col col-start-1">
                      <label htmlFor="fuse_rating" className="font-semibold">
                        Fuse Rating / CT Ratio
                      </label>
                      <Field
                        name="fuse_rating"
                        component="select"
                        className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                      >
                        {CT.map((o) => (
                          <option key={`ct_option-${o.value}`} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </Field>
                    </div>
                  ) : null}

                  <div className="w-full flex flex-col col-span-6 md:col-span-2">
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
                      placeholder="Karen Tan"
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                    />
                  </div>

                  <div className="w-full flex flex-col col-span-6 md:col-span-2">
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

                  <div className="w-full flex flex-col col-span-6 md:col-span-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      {errors.email && touched.email ? (
                        <FieldError>{errors.email}</FieldError>
                      ) : null}
                    </div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="k.tan@email.com"
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6 w-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email" className="font-semibold">
                        Address
                      </label>
                      {errors.address && touched.address ? (
                        <FieldError>{errors.address}</FieldError>
                      ) : null}
                    </div>
                    <Field
                      as="textarea"
                      name="address"
                      rows={5}
                      className="p-3 border border-slate-200 text-gray-700 tracking-wide resize-none"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 w-full overflow-x-auto">
                    <Turnstile
                      sitekey={SITE_KEY}
                      action="get-quote"
                      onVerify={(token) => setVerifyUser(token)}
                    />
                  </div>
                  <div className="w-full flex justify-center sm:justify-end items-end col-span-6 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={
                        Object.keys(errors).length > 0 ||
                        !verifyUser ||
                        isSubmitting
                      }
                      className={`h-10 px-12 py-2 cursor-pointer bg-indigo-dye text-white rounded-lg text-sm ${
                        (Object.keys(errors).length > 0 ||
                          !verifyUser ||
                          isSubmitting) &&
                        "cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;
