import { Suspense } from "react";
import type { Metadata, NextPage } from "next";
import Hero from "~/components/Hero";
import Container from "~/components/Container";
import PrimaryCard from "~/components/PrimaryCard";
import Step from "~/components/Step";
import Testimonial from "~/components/Testimonial";
import CTA from "~/components/CTA";
import AnimatedImage from "~/components/AnimatedImage";
import { testimonials } from "~/_content";
import { Button } from "~/components/Button";

import HomeownersHero from "~/../public/images/home-hero.jpg";
import GalleryImage from "~/../public/images/gallery-1.jpg";
import RoofPanelImage from "~/../public/images/panels.jpg";
import InverterIamge from "~/../public/images/inverter.jpg";
import { NEMGraphic, SelcoGraphic } from "./Graphics";
import SolarCalculator from "~/components/SolarCalculator";
import Emphasize from "~/components/EmphasizeWord";
import WhatsAppButton from "~/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Solar Panel for Home Malaysia | Affordable & Sustainable Energy Solutions",
  description:
    "Upgrade to solar panels for your Malaysian home and enjoy savings with government incentives up to RM 4k. Go green and power sustainably!",
};

const HomeownersPage: NextPage = () => {
  const steps = [
    {
      title: "E-Survey & Quotation",
      description:
        "An online survey is done to determine installation suitability, with a quotation issued to you.",
    },
    {
      title: "SEDA Application",
      description:
        "After the quotation is signed and deposit paid, we will submit your system's application to SEDA on your behalf.",
    },
    {
      title: "Down-payment and Scheduling",
      description:
        "Upon SEDA approval, a down payment is requested along with the scheduling of the installation date.",
    },
    {
      title: "Installation",
      description:
        "Our technical team installs the solar system at your home within 1-3 days.",
    },
    {
      title: "TNB Meter Change",
      description:
        "TNB conducts a meter change, after which the system can be turned on following the final payment of the system.",
    },
  ];

  const reviews = testimonials.slice(0, 3);

  return (
    <>
      <Hero bgImage={HomeownersHero}>
        <div className="flex flex-col gap-y-12 py-16 text-white lg:py-24">
          <h1 className="max-w-2xl text-4xl font-bold text-white lg:text-5xl">
            <Emphasize>Affordable</Emphasize> and{" "}
            <Emphasize>Reliable</Emphasize> Solar Panels for Your Home
          </h1>
          <p className="max-w-prose font-light text-gray-50">
            Clean electricity does not need to be expensive. Superpower your
            roof with solar panels and generate your own clean energy. Good for
            your wallet, and our environment.
          </p>
          <div className="flex gap-x-2 pb-24">
            <Button href="/quote">Get Quote</Button>
            <WhatsAppButton />
          </div>
        </div>
      </Hero>

      <Container>
        <PrimaryCard className="-mt-24">
          <div className="flex w-full flex-row gap-6 px-4 py-8 lg:w-1/2 lg:gap-x-10 lg:px-8">
            <div className="pt-1">
              <div className="h-14 w-14 rounded-full">
                <NEMGraphic className="h-14 w-14" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-sm text-gray-200">
              <h3 className="text-xl font-semibold">Net Energy Metering</h3>
              <p>
                Complement your energy usage with clean solar power and sell
                excess energy to the grid.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-row gap-6 border-t border-gray-500 px-4 py-8 lg:w-1/2 lg:gap-x-10 lg:border-l lg:border-t-0 lg:px-8 ">
            <div className="pt-1">
              <div className="h-14 w-14 rounded-full">
                <SelcoGraphic className="h-14 w-14" />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-sm text-gray-200">
              <h3 className="text-xl font-semibold">Self Consumption</h3>
              <p>Save on bills by reducing your reliance on grid power.</p>
            </div>
          </div>
        </PrimaryCard>
      </Container>

      <section className="">
        <Container className="py-24">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            <div className="w-full text-center text-4xl font-bold lg:w-1/3 lg:text-left">
              It&apos;s never been easier to save!
            </div>
            <p className="w-full text-center text-gray-500 lg:w-1/2 lg:text-left">
              With our flexible payment options, you can choose between maximum
              return of investment, or lower capital commitments.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <SolarCalculator />
          </Suspense>

          <p className="pt-2 text-xs text-gray-500">
            Disclaimer: The figures shown above are for illustrative purposes
            only. We are not able to guarantee the savings shown above due to
            other factors that were not taken into account. You can obtain a
            better estimation by contacting us or requesting a quote.
          </p>
        </Container>
      </section>

      <section className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <div className="mb-2 text-sm font-semibold uppercase text-gray-600">
              How it works
            </div>
            <h2 className="mb-4 text-3xl font-semibold capitalize md:text-4xl">
              5 Steps to Adding Solar Power to Your Roof
            </h2>
            <p className="text-sm text-gray-500 md:text-base">
              A complete solar PV system can be installed in as little as 5 easy
              steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-12 overflow-hidden md:grid-cols-4 lg:grid-cols-6">
            {steps.map((step, i) => {
              const data = {
                step: i + 1,
                title: step?.title,
                description: step?.description,
              };
              return <Step key={"step_" + i} data={data} />;
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <div
          className="mx-auto mb-12
         max-w-xl p-5 text-center"
        >
          <div className="mb-2 text-sm font-semibold uppercase text-gray-600">
            Gallery
          </div>
          <h2 className="mb-4 text-3xl font-semibold capitalize md:text-4xl">
            Reliable and Cost Effective
          </h2>
          <p className="text-sm text-gray-500 md:text-base">
            We only use the best components to ensure your system reliably
            generates returns for longer.
          </p>
        </div>
        <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <figure className="relative aspect-[3/2]">
            <AnimatedImage
              className="h-full w-full rounded-lg bg-slate-100 object-cover"
              src={GalleryImage}
              alt="Solar panels"
              fill
            />
          </figure>
          <figure className="relative aspect-[3/2] md:row-span-2 md:aspect-auto lg:col-span-2 ">
            <AnimatedImage
              className="aspect-[3/2] h-full w-full rounded-lg bg-slate-100 object-cover"
              src={RoofPanelImage}
              alt="Roof"
              fill
            />
          </figure>
          <figure className="relative aspect-[3/2]">
            <AnimatedImage
              className="h-full w-full rounded-lg bg-slate-100 object-cover"
              src={InverterIamge}
              alt="Inverter"
              fill
            />
          </figure>
        </Container>
      </section>

      <section className="bg-slate-200 py-20 md:py-24">
        <Container className="flex flex-col">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <div className="mb-2 text-sm font-semibold uppercase text-gray-700">
              Testimonials
            </div>
            <h2 className="mb-4 text-3xl font-semibold capitalize text-black md:text-4xl">
              What our Clients say
            </h2>
          </div>

          <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Testimonial
                key={"review_" + i}
                data={review}
                invertColours={true}
              />
            ))}
          </div>
        </Container>

        <CTA caption="Let's start your journey on the clean energy revolution!" />
      </section>
    </>
  );
};

export default HomeownersPage;
