import Header from "~/components/Header";
import Container from "~/components/Container";
import Layout from "~/components/Layout";
import { ButtonVariant2 } from "~/components/Button";
import SupplierLogos from "~/components/SupplierLogos";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const QuoteForm = dynamic(() => import("~/components/Quote/QuoteForm"));

export const metadata: Metadata = {
  title: "Begin your journey of clean solar energy here",
  description:
    "Get a personalised quote for your solar energy solution; big or small, we do it all.",
};

const Quote: React.FC<{}> = () => {
  return (
    <>
      <Header title="Quote" subtitle="Get started on supercharging your roof">
        <div className="pb-36" />
      </Header>

      <div className="px-2">
        <QuoteForm />
      </div>

      <Container className="relative py-24 max-w-7xl">
        <div className="flex flex-col gap-y-10 items-center text-center">
          <h1 className="text-4xl font-bold">
            Have something specific in mind?
          </h1>
          <p className="max-w-prose text-gray-700">
            We work with the best in the solar industry to give you a system
            that is reliable and long-lasting.
          </p>

          <p className="text-gray-600">
            Contact us now to have any of your questions or worries answered.
          </p>
          <ButtonVariant2 href={"https://wa.me/60377339939"}>
            WhatsApp Us
          </ButtonVariant2>
        </div>
        <div className="max-w-3xl mx-auto pt-16 text-center w-auto invert opacity-40">
          <SupplierLogos />
        </div>
      </Container>
    </>
  );
};

export default Quote;
