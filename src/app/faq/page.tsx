import Header from "~/components/Header";
import { faqs } from "~/_content";
import { type Metadata } from "next";
import FAQList from "./FAQList";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently asked questions about our solar PV systems.",
};

const FAQPage = () => {
  return (
    <>
      <Header title="Frequently Asked Questions" />

      <FAQList faqs={faqs} />
    </>
  );
};

export default FAQPage;
