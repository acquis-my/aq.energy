"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { usePostHog } from "posthog-js/react";

import type { QuoteData } from "./schema";
import { useCalculatorStore } from "~/stores/calculatorStore";
import { createQuote } from "../actions";
import ErrorList from "~/components/ErrorList";
import Submitted from "./Submitted";
import Step1 from "./Step1";
import Step2 from "./Step2";

const QuoteForm = () => {
  const params = useSearchParams();
  const calculatorBill = useCalculatorStore((state) => state.bill);
  const referrer = params.get("ref") ?? undefined;

  const posthog = usePostHog();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<Partial<QuoteData>>({
    token: "",
    type: "RESIDENTIAL",
    bill: calculatorBill,
    name: "",
    phone: "",
    state: "",
  });

  async function handleSubmit(formData: QuoteData) {
    setError(null);
    setIsSubmitting(true);
    const data = { referrer, ...formData };

    await createQuote(data)
      .then((r) => {
        if (r.status === "error") return void setError(r.message);
        setIsSubmitted(true);
        posthog.identify(
          data.phone,
          { state: data.state, bill: data.bill, type: data.type },
          { name: data.name, referrerId: data.referrer }
        );
        posthog.capture("quote_request", data);
      })
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
    <>
      {error && (
        <ErrorList
          title="Unable to create your quote request"
          errors={[error]}
        />
      )}

      {isSubmitted ? <Submitted /> : renderSteps[currentStep]}
    </>
  );
};

export default QuoteForm;
