import { useState } from "react";
import { NextSeo } from "next-seo";
import { CaseStudyCardVariant } from "../components/CaseStudyCard";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import caseStudies from "../_content/studies.json";
import CTA from "../components/CTA";
import { ButtonVariant2 } from "../components/Button";
import ExportedImage from "next-image-export-optimizer";

const CaseStudiesPage = () => {
  const [type, setType] = useState("all");

  const studies =
    type === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.type === type);

  return (
    <Layout>
      <NextSeo
        title="Success stories"
        description="Case studies from clients who've worked with us."
      />

      <Hero bgImage="images/case-studies-hero.png">
        <section className="flex flex-col items-center py-16 gap-y-10 text-white text-center">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            Success Stories
          </h1>
          <p className="max-w-prose text-gray-400 text-sm">
            From the smallest to largest, residential to industrial, explore
            some of our previous installations across Malaysia since 2013.
          </p>
        </section>
      </Hero>

      <section className="z-10 flex flex-col gap-y-8 py-14">
        <Container className="flex flex-row items-center gap-4">
          <div className="col-span-2 flex flex-col">
            <label htmlFor="supply_phases" className="font-semibold">
              Installation Type
            </label>
            <select
              className="p-3 border border-slate-200 text-gray-700 tracking-wide"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value="all">All</option>
              <option value="home">Home</option>
              <option value="business">Business</option>
            </select>
          </div>
        </Container>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {studies.map((study, i) => (
            <CaseStudyCardVariant key={"study_" + i} data={study} />
          ))}
        </Container>
      </section>

      <section className="relative bg-slate-100 py-24">
        <figure className="absolute inset-0">
          <ExportedImage
            alt=""
            layout="fill"
            src="images/Pattern.svg"
            className="object-cover mx-auto h-full"
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
                <ButtonVariant2 href="/about#contact">
                  Contact Us
                </ButtonVariant2>
              </div>
            </div>
            <div className="pt-16 text-center">Supplier logos here</div>
          </Container>
          <CTA caption="Big or small, we do it all." />
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;
