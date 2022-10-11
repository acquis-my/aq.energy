import Header from "../components/Header";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { ButtonVariant2 } from "../components/Button";
import { Field, Form, Formik } from "formik";
import Turnstile from "react-turnstile";
import * as Yup from "yup";
import FieldError from "../components/FieldError";
import { NumericFormat, PatternFormat } from "react-number-format";

const LeadSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^0[0-9]{9,10}$/g, "Invalid number")
    .required("Required"),
  address: Yup.string().min(10, "Too short").required("Required"),
  bill: Yup.number().required("Required"),
});

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY ?? "";

const Quote = () => {
  const [verifyUser, setVerifyUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: any) => {
    const data = { token: verifyUser, ...values };
    const API_HOST = process.env.NEXT_PUBLIC_ZEN_API ?? "http://zen_quotes";

    try {
      const result = await fetch(API_HOST + "/new", {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(data),
      });

      if (!result.ok) throw result.status;
      setIsSubmitted(true);
    } catch (error) {
      alert("Something went wrong! Please try again.");
      console.log(error);
    }
  };

  return (
    <Layout>
      <NextSeo
        title="Begin your journey of clean solar energy here"
        description="Get a presonalised quote for your solar energy solution. Big or small, we do it all."
      />

      <Header title="Quote" subtitle="Get started on supercharging your roof">
        <div className="pb-36" />
      </Header>

      <div className="px-2">
        <Formik
          onSubmit={handleSubmit}
          validationSchema={LeadSchema}
          initialValues={{
            lead_type: "res",
            lang: "en",
            bill: "",
            breaker_rating: 1000,
            supply_phases: 1,
            name: "",
            phone: "",
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
                        Begin your journey here.
                      </h1>
                      <p className="text-sm md:text-base pt-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="grid grid-cols-6 gap-6 md:gap-8">
                      <div className="flex flex-col col-span-6 md:col-span-3">
                        <label htmlFor="lead_type" className="font-semibold">
                          Installation type
                        </label>
                        <Field
                          name="lead_type"
                          component="select"
                          className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                        >
                          <option value="res">Residential</option>
                          <option value="com">Commercial</option>
                        </Field>
                      </div>
                      <div className="flex flex-col col-span-6 md:col-span-3">
                        <label htmlFor="lang" className="font-semibold">
                          Language
                        </label>
                        <Field
                          name="lang"
                          component="select"
                          className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                        >
                          <option value="en">English</option>
                          <option value="cn">中文</option>
                          <option value="bm">Bahasa Malaysia</option>
                        </Field>
                      </div>

                      <div className="col-span-6 md:col-span-3 flex flex-col col-start-1">
                        <label
                          htmlFor="supply_phases"
                          className="font-semibold"
                        >
                          Supply Type
                        </label>
                        <Field
                          name="supply_phases"
                          component="select"
                          className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                        >
                          <option value={1}>Single Phase</option>
                          <option value={3}>Three Phase</option>
                        </Field>
                      </div>

                      <div className="col-span-6 md:col-span-3 w-full flex flex-col">
                        <div className="flex justify-between items-center">
                          <label htmlFor="phone" className="font-semibold">
                            Average TNB Bill
                          </label>
                          {errors.bill && touched.bill ? (
                            <FieldError>{errors.bill}</FieldError>
                          ) : null}
                        </div>
                        <div className="flex p-3 gap-2 border border-slate-200 text-gray-700 tracking-wide">
                          <span className="font-semibold">RM</span>
                          <NumericFormat
                            name="bill"
                            value={values.bill}
                            decimalScale={2}
                            thousandSeparator={","}
                            placeholder="0.00"
                            onValueChange={(v) => {
                              setFieldValue("bill", v.floatValue);
                            }}
                            onBlur={() => {
                              if (!values.bill) {
                                setFieldTouched("bill", true);
                              }
                            }}
                            className="w-full text-right focus:outline-none"
                          />
                        </div>
                      </div>

                      {values.lead_type === "com" && (
                        <div className="col-span-6 flex flex-col col-start-1">
                          <label
                            htmlFor="breaker_rating"
                            className="font-semibold"
                          >
                            Breaker Rating
                          </label>
                          <Field
                            name="breaker_rating"
                            component="select"
                            className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                          >
                            <option value={1000}>1/1000</option>
                            <option value={1500}>1/1500</option>
                            <option value={2000}>1/2000</option>
                          </Field>
                        </div>
                      )}

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
                          <label htmlFor="phone" className="font-semibold">
                            Mobile
                          </label>
                          {errors.phone && touched.phone ? (
                            <FieldError>{errors.phone}</FieldError>
                          ) : null}
                        </div>
                        <PatternFormat
                          name="phone"
                          valueIsNumericString
                          format="###-### #####"
                          value={values.phone}
                          placeholder="012-345 6789"
                          className="p-3 border border-slate-200 text-gray-700 tracking-wide"
                          onBlur={() => {
                            if (!values.phone) {
                              setFieldTouched("phone", true);
                            }
                          }}
                          onValueChange={(vals) => {
                            setFieldValue("phone", vals.value);
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
      </div>

      <Container className="relative py-24 max-w-7xl">
        <div className="flex flex-col gap-y-10 items-center text-center">
          <h1 className="text-4xl font-bold">
            Have something specific in mind?
          </h1>
          <p className="max-w-prose text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            saepe, quo error explicabo.
          </p>
          <ButtonVariant2 href={"/about#contact"}>Contact Us</ButtonVariant2>
        </div>
        <ul className="w-full flex justify-between mt-14 overflow-hidden">
          <li>
            <div className="h-10 w-48 bg-gray-300"></div>
          </li>
          <li>
            <div className="h-10 w-48 bg-gray-300"></div>
          </li>
          <li>
            <div className="h-10 w-48 bg-gray-300"></div>
          </li>
          <li>
            <div className="h-10 w-48 bg-gray-300"></div>
          </li>
          <li>
            <div className="h-10 w-48 bg-gray-300"></div>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Quote;
