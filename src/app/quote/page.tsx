import type { Metadata } from "next";
import { Suspense } from "react";

import { WHATSAPP_LINK } from "~/links";
import { ButtonVariant2 } from "~/components/Button";
import SupplierLogos from "~/components/SupplierLogos";
import Container from "~/components/Container";
import QuoteForm from "./Quote/QuoteForm";
import Header from "~/components/Header";

export const metadata: Metadata = {
  title: "Begin your journey of clean solar energy here",
  description:
    "Get a personalised quote for your solar energy solution; big or small, we do it all.",
};

export default function page() {
  return (
    <>
      <Header title="Quote" subtitle="Get started on supercharging your roof">
        <div className="pb-36" />
      </Header>

      <section className="px-2">
        <div className="boder-slate-100 relative z-10 mx-auto -mt-28 flex w-full max-w-3xl flex-col gap-10 overflow-auto rounded-lg border bg-white px-6 py-8 shadow-lg md:px-8 lg:px-14 lg:py-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">
                Solar Lagi Jimat!
              </h1>
              <p className="pt-2 text-sm text-gray-600 md:text-base">
                We just need some information and will get back to you with your
                personalised quote.
              </p>
            </div>

            <Suspense>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-24">
        <Container className="relative max-w-7xl">
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
      </section>
    </>
  );
}
