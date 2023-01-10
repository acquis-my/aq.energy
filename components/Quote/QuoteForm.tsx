import { useState } from "react";
import { useRouter } from "next/router";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Submitted from "./Submitted";

interface QuoteData {
  token: string;
  is_commercial: number;
  avg_bill: string;
  name: string;
  mobile: string;
  state: string;
}

const QuoteForm = () => {
  const router = useRouter();
  const { ref = "", bill = 0 } = router.query;

  const [data, setData] = useState({
    token: "",
    is_commercial: 0,
    avg_bill: bill ?? 0,
    name: "",
    mobile: "",
    state: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = async (formData: QuoteData) => {
    setIsSubmitting(true);
    const data = { referrer: ref, ...formData };
    const API_HOST = process.env.NEXT_PUBLIC_ZEN_API ?? "http://localhost:8787";

    try {
      const result = await fetch(`${API_HOST}/leads`, {
        method: "POST",
        headers: [["Content-Type", "application/json"]],
        body: JSON.stringify(data),
      });

      if (!result.ok) throw result.status;
      setIsSubmitted(true);
    } catch (error) {
      alert("Something went wrong! Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = (newData: QuoteData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      handleSubmit(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = (newData: QuoteData) => {
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
    <div className="relative mx-auto w-full max-w-3xl z-10 -mt-28 px-6 md:px-8 lg:px-14 py-8 lg:py-12 gap-10 rounded-lg shadow-lg bg-white flex flex-col border boder-slate-100 overflow-auto">
      <div>
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Solar Lagi Jimat!</h1>
          <p className="text-sm md:text-base pt-2 text-gray-600">
            We just need some information and will get back to you with your
            personalised quote.
          </p>
        </div>
        {isSubmitted ? <Submitted /> : renderSteps[currentStep]}
      </div>
    </div>
  );
};

export default QuoteForm;
