import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { Button, OutlineButton } from "../components/Button";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PrimaryCard from "../components/PrimaryCard";
import Step from "../components/Step";
import Testimonial from "../components/Testimonial";
import testimonials from "../fakedata/testimonials.json";
import CTA from "../components/CTA";
import ExportedImage from "next-image-export-optimizer";
import SolarCalculator from "../components/SolarCalculator";

const HomeownersPage: NextPage = () => {
  const steps = [
    {
      title: "Site Survey & Quotation",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      title: "SEDA Application",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      title: "Down-payment and Settle Outstanding Bill",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      title: "Installation",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      title: "Final Payment",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  const reviews = testimonials.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Affordable Solar Energy for your Home - AQ Energy</title>
      </Head>

      <Hero bgImage="images/homeowners-hero.png">
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            <span className="text-cyber-yellow">Affordable</span> Solar Energy
            for your Home.
          </h1>
          <p className="max-w-prose text-gray-50 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            expedita nemo voluptate at ad. Mollitia eos aut repellat magni nisi
            cum nihil provident, doloribus fuga cupiditate iure illo quibusdam
            quas!
          </p>
          <div className="flex gap-x-2 pb-24">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="/about#contact">Contact Us</OutlineButton>
          </div>
        </div>
      </Hero>

      <Container>
        <PrimaryCard className="-mt-28">
          <div className="w-full lg:w-1/2 flex flex-row px-4 lg:px-8 py-8 gap-6 lg:gap-x-10">
            <div>
              <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-y-4 text-gray-200 text-sm">
              <h1 className="font-semibold text-xl">Net Energy Metering</h1>
              <p>
                Complement your energy usage with clean solar power and sell
                excess energy to the grid.
              </p>
              <div>
                <a className="underline" href="">
                  Watch how NEM works &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-row px-4 lg:px-8 py-8 gap-6 lg:gap-x-10 border-gray-500 border-t lg:border-l lg:border-t-0 ">
            <div>
              <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-y-4 text-gray-200 text-sm">
              <h1 className="font-semibold text-xl">Self Consumption</h1>
              <p>Save on bills by reducing your reliance on grid power.</p>
              <div>
                <a className="underline" href="">
                  Watch how SelCo works &rarr;
                </a>
              </div>
            </div>
          </div>
        </PrimaryCard>
      </Container>

      <section className="">
        <Container className="py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h1 className="w-full lg:w-1/3 text-center lg:text-left text-4xl font-bold">
              How much could you save?
            </h1>
            <p className="w-full lg:w-1/2 text-center lg:text-left text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              reiciendis autem natus veritatis ipsum quasi dolores accusantium.
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
              5 Steps to Installation
            </p>
            <p className="text-sm md:text-base text-gray-500">
              A solar PV system can be installed in as little as 5 easy steps.
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
            System Components
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-4 capitalize">
            Reliable + Cost Effective
          </p>
          <p className="text-sm md:text-base text-gray-500">
            We only use the best components to ensure a your system reliably
            generates returns.
          </p>
        </div>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <figure>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Solar panels"
              className="object-cover h-full w-full rounded-lg"
            />
          </figure>
          <figure className="md:row-span-2 lg:col-span-2 ">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Roof"
              className="object-cover h-full w-full rounded-lg"
            />
          </figure>
          <figure className=" ">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Inverter"
              className="object-cover h-full w-full rounded-lg"
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
