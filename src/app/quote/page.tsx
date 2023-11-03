import Header from "~/components/Header";
import Container from "~/components/Container";
import SupplierLogos from "~/components/SupplierLogos";
import QuoteForm from "./Quote/QuoteForm";
import { ButtonVariant2 } from "~/components/Button";
import { WHATSAPP_LINK } from "~/links";
import { type Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Begin your journey of clean solar energy here",
  description:
    "Get a personalised quote for your solar energy solution; big or small, we do it all.",
};

const Quote: React.FC<object> = () => {
  return (
    <>
      <Header title="Quote" subtitle="Get started on supercharging your roof">
        <div className="pb-36" />
      </Header>

      <div className="px-2">
        <QuoteForm />
      </div>

      <Container className="relative max-w-7xl py-24">
        <div className="flex flex-col items-center gap-y-10 text-center">
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
          <ButtonVariant2 href={WHATSAPP_LINK}>WhatsApp Us</ButtonVariant2>
        </div>
        <div className="mx-auto w-auto max-w-3xl pt-16 text-center opacity-40 invert">
          <SupplierLogos />
        </div>
      </Container>
    </>
  );
};

export default Quote;
