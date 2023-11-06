"use client";
import { useState } from "react";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Submitted from "./Submitted";
import { useSearchParams } from "next/navigation";
import { useCalculatorStore } from "~/stores/calculatorStore";
import { createQuote } from "../actions";
import { type QuoteData } from "./schema";

const QuoteForm = () => {
  const params = useSearchParams();
  const calculatorBill = useCalculatorStore((state) => state.bill);
  const referrer = params.get("ref") ?? undefined;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Partial<QuoteData>>({
    token: "",
    type: "RESIDENTIAL",
    bill: calculatorBill,
    name: "",
    phone: "",
    state: "",
  });

  async function handleSubmit(formData: QuoteData) {
    setIsSubmitting(true);
    const data = { referrer, ...formData };

    await createQuote(data)
      .then(() => setIsSubmitted(true))
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  }

  const handleNextStep = async (newData: Partial<QuoteData>, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      await handleSubmit({ ...data, ...newData } as QuoteData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = (newData: Partial<QuoteData>) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const renderSteps = [
    <Step1 key="step-1" next={handleNextStep} data={data} />,
    <Step2
      key="step-2"
      next={handleNextStep}
      prev={handlePreviousStep}
      data={data}
      isSubmitting={isSubmitting}
    />,
  ];

  return (
    <div className="boder-slate-100 relative z-10 mx-auto -mt-28 flex w-full max-w-3xl flex-col gap-10 overflow-auto rounded-lg border bg-white px-6 py-8 shadow-lg md:px-8 lg:px-14 lg:py-12">
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold md:text-3xl">Solar Lagi Jimat!</h1>
          <p className="pt-2 text-sm text-gray-600 md:text-base">
            We just need some information and will get back to you with your
            personalised quote.
          </p>
        </div>
        {isSubmitted ? <Submitted /> : renderSteps[currentStep]}
      </div>

      <pre>{JSON.stringify({ ...data, currentStep }, null, 2)}</pre>
    </div>
  );
};

export default QuoteForm;
