import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { Button, OutlineButton } from "../components/Button";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PrimaryCard from "../components/PrimaryCard";
import Step from "../components/Step";
import Testimonial from "../components/Testimonial";
import testimonials from "../_content/testimonials.json";
import CTA from "../components/CTA";
import SolarCalculator from "../components/SolarCalculator";
import ExportedImage from "next-image-export-optimizer";

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
    <Layout>
      <Head>
        <title>
          Affordable and Reliable Solar Energy for your Home - AQ Energy
        </title>
      </Head>

      <Hero bgImage="images/home-hero.jpg">
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            <span className="text-cyber-yellow">Affordable</span> and{" "}
            <span className="text-cyber-yellow">Reliable</span> Home Solar
          </h1>
          <p className="max-w-prose text-gray-50 font-light">
            Clean electricity does not need to be expensive. Superpower your
            roof with solar panels and generate your own clean energy. Good for
            your wallet, and our environment.
          </p>
          <div className="flex gap-x-2 pb-24">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="https://wa.me/60377339939">
              WhatsApp Us
            </OutlineButton>
          </div>
        </div>
      </Hero>

      <Container>
        <PrimaryCard className="-mt-24">
          <div className="w-full lg:w-1/2 flex flex-row px-4 lg:px-8 py-8 gap-6 lg:gap-x-10">
            <div className="pt-1">
              <div className="h-14 w-14 rounded-full">
                <ExportedImage src="images/nem.svg" height={128} width={128} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-gray-200 text-sm">
              <h1 className="font-semibold text-xl">Net Energy Metering</h1>
              <p>
                Complement your energy usage with clean solar power and sell
                excess energy to the grid.
              </p>
              {/* <p>
                <a className="underline" href="">
                  Watch how NEM works &rarr;
                </a>
              </p> */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-row px-4 lg:px-8 py-8 gap-6 lg:gap-x-10 border-gray-500 border-t lg:border-l lg:border-t-0 ">
            <div className="pt-1">
              <div className="h-14 w-14 rounded-full">
                <ExportedImage
                  src="images/selco.svg"
                  height={128}
                  width={128}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 text-gray-200 text-sm">
              <h1 className="font-semibold text-xl">Self Consumption</h1>
              <p>Save on bills by reducing your reliance on grid power.</p>
            </div>
          </div>
        </PrimaryCard>
      </Container>

      <section className="">
        <Container className="py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h1 className="w-full lg:w-1/3 text-center lg:text-left text-4xl font-bold">
              It&apos;s never been easier to save!
            </h1>
            <p className="w-full lg:w-1/2 text-center lg:text-left text-gray-500">
              With our flexible payment options, you can choose between maximum
              return of investment, or lower capital commitments.
            </p>
          </div>

          <SolarCalculator />

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
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
              How it works
            </h1>
            <p className="text-3xl md:text-4xl font-semibold mb-4 capitalize">
              5 Steps to Super-Roofs
            </p>
            <p className="text-sm md:text-base text-gray-500">
              A complete solar PV system can be installed in as little as 5 easy
              steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-12 overflow-hidden">
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
          className="max-w-xl p-5
         mx-auto mb-12 text-center"
        >
          <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
            Gallery
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-4 capitalize">
            Reliable + Cost Effective
          </p>
          <p className="text-sm md:text-base text-gray-500">
            We only use the best components to ensure your system reliably
            generates returns for longer.
          </p>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <figure className="relative aspect-[3/2]">
            <ExportedImage
              src="images/gallery-1.jpg"
              layout="fill"
              alt="Solar panels"
              className="object-cover h-full w-full rounded-lg bg-slate-100"
            />
          </figure>
          <figure className="relative aspect-[3/2] md:aspect-auto md:row-span-2 lg:col-span-2 ">
            <ExportedImage
              src="images/panels.jpg"
              height={800}
              width={1200}
              layout="fill"
              alt="Roof"
              className="object-cover aspect-[3/2] h-full w-full rounded-lg bg-slate-100"
            />
          </figure>
          <figure className="relative aspect-[3/2]">
            <ExportedImage
              src="images/inverter.jpg"
              height={400}
              width={600}
              layout="fill"
              alt="Inverter"
              className="h-full w-full object-cover rounded-lg bg-slate-100"
            />
          </figure>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-slate-200">
        <Container className="flex flex-col">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-gray-700 mb-2 uppercase text-sm font-semibold">
              Testimonials
            </h1>
            <p className="text-black text-3xl md:text-4xl font-semibold mb-4 capitalize">
              What our Clients say
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
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
    </Layout>
  );
};

export default HomeownersPage;
