import { Suspense } from "react";
import Container from "~/components/Container";
import Hero from "~/components/Hero";

import CTA from "~/components/CTA";
import { ButtonVariant2 } from "~/components/Button";
import SupplierLogos from "~/components/SupplierLogos";

import CaseStudiesHeroImage from "~/../public/images/case-studies-hero.jpg";
import PatternGraphic from "~/../public/images/Pattern.svg";
import CaseGrid from "./CaseGrid";
import { Metadata } from "next";
import Image from "next/image";
import { getStudies } from "~/lib/data";

export const metadata: Metadata = {
  title: "Success stories",
  description: "Case studies from clients who've worked with us.",
};

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: { [k: string]: string | string[] | null };
}) {
  const { type } = searchParams;
  const studies = await getStudies();

  return (
    <>
      <Hero bgImage={CaseStudiesHeroImage}>
        <section className="flex flex-col items-center py-16 lg:py-22 gap-y-10 text-white text-center">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            Success Stories ({type})
          </h1>
          <p className="max-w-prose text-gray-200 text-sm">
            From the smallest to largest, residential to industrial, explore
            some of our previous installations across Malaysia since 2013.
          </p>
        </section>
      </Hero>

      <CaseGrid studies={studies} />

      <section className="relative bg-slate-100 py-24">
        <figure className="absolute inset-0">
          <Image
            alt=""
            src={PatternGraphic}
            className="object-cover mx-auto h-full"
            fill
          />
        </figure>
        <div className="relative flex flex-col gap-12">
          <Container>
            <div className="flex flex-col mx-auto max-w-prose items-center text-center gap-10">
              <h1 className="text-4xl font-bold">Feeling inspired?</h1>
              <p className="text-gray-600">
                Like any electrical appliance or machinery, we know that solar
                energy is a significant investment. We work with the best in the
                solar industry to give you a system that is reliable and
                long-lasting.
              </p>
              <p className="text-gray-600">
                Contact us now to have any of your questions or worries
                answered.
              </p>
              <div>
                <ButtonVariant2 href="https://wa.me/60377339939">
                  WhatsApp Us
                </ButtonVariant2>
              </div>
            </div>
            <div className="max-w-3xl mx-auto pt-16 text-center w-auto invert opacity-40">
              <SupplierLogos />
            </div>
          </Container>
          <CTA caption="Big or small, we do it all." />
        </div>
      </section>
    </>
  );
}
