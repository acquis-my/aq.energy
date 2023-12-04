import Hero from "../components/Hero";
import Container from "../components/Container";
import PrimaryCard from "../components/PrimaryCard";
import { Statistic } from "../components/Statistic";
import Link from "next/link";
import FAQ from "./faq/FAQItem";
import { CaseStudyCardVariant } from "../components/CaseStudyCard";
import { Button, OutlineButtonDark } from "../components/Button";
import { getStudies } from "~/lib/data";
import type { Metadata } from "next";

import { faqs, testimonials } from "~/_content";
import Testimonial from "../components/Testimonial";
import AnimatedImage from "../components/AnimatedImage";
import SupplierLogos from "../components/SupplierLogos";

import homepageHero from "../../public/images/main-hero.jpg";
import homeSolutionsImage from "../../public/images/soln-home.jpg";
import businessSolutionsImage from "../../public/images/soln-business.jpg";
import SedaHeroImage from "../../public/images/seda_hero.png";
import SedaMobileHeroImage from "../../public/images/seda_hero-mobile.png";
import { SunPattern } from "~/components/Pattern";
import Emphasize from "~/components/EmphasizeWord";
import WhatsAppButton from "~/components/WhatsAppButton";

const stats = [
  {
    title: "Clients",
    value: "450+",
    unit: null,
    countup: {
      start: 100,
      end: 450,
      suffix: "+",
      scrollSpyOnce: true,
      enableScrollSpy: true,
    },
    caption: "Empowering roofs since 2013",
  },
  {
    title: "CO2 Reduced",
    value: "250",
    unit: "",
    countup: {
      start: 1,
      end: 250,
      scrollSpyOnce: true,
      enableScrollSpy: true,
    },
    caption: "Tonnes Yearly",
  },
  {
    title: "Customer Satisfaction",
    value: 100,
    unit: "%",
    countup: {
      start: 1,
      end: 100,
      suffix: "%",
      scrollSpyOnce: true,
      enableScrollSpy: true,
    },
    caption: "5-star reviews on Google",
  },
  {
    title: "Achieved yearly savings",
    value: "RM 3.5M",
    unit: null,
    countup: {
      start: 0.5,
      end: 3.5,
      decimals: 1,
      prefix: "RM ",
      suffix: "M",
      scrollSpyOnce: true,
      enableScrollSpy: true,
    },
    caption: "Across all clients based on existing installations",
  },
];

export const metadata: Metadata = {
  title: "AQ Energy: Malaysia's Top Solar Panel Solutions Provider",
  description:
    "We provide first-class expertise and support for residential and commercial solar panel installations all over Malaysia.",
};

export default async function Home() {
  const studies = await getStudies({ limit: 3, type: "residential" });
  const reviews = testimonials.slice(0, 3);

  return (
    <>
      <Hero bgImage={homepageHero}>
        <div className="flex flex-col gap-y-12 py-16 text-white lg:py-24">
          <h1 className="max-w-2xl text-4xl font-bold capitalize text-white lg:text-5xl">
            Providing Malaysians with <Emphasize>Reliable</Emphasize> Solar
            Panel Solutions
          </h1>
          <p className="max-w-prose font-light text-gray-50">
            Generate clean solar energy to fulfill your electricity needs. From
            small-scale residential, to large-scale commercial solutions, we
            have a dedicated team to help you achieve lower electricity costs
            with a solar PV system.
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <WhatsAppButton />
          </div>
          <div className="flex flex-col gap-y-2">
            <p>With support from the best of the Solar industry:</p>
            <div className="max-w-lg">
              <SupplierLogos />
            </div>
          </div>
        </div>
      </Hero>

      {/* Solutions Section */}
      <Container className="pb-48 pt-24">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <div className="mb-2 text-sm font-semibold uppercase text-gray-600">
            Solar Energy Solutions
          </div>
          <h2 className="mb-4 text-4xl font-semibold capitalize">
            Big or small, we do it all.
          </h2>
          <p className="text-gray-500">
            We provide solar energy solutions for both homeowners and business
            to supercharge their roofs. *Solar financing available
          </p>
        </div>

        <div className="flex flex-col gap-x-12 gap-y-8 md:flex-row ">
          <div className="relative aspect-[1/1.1] min-h-fit w-full rounded-lg bg-slate-100 md:aspect-[3/3] md:w-1/2 lg:aspect-[1.2/1]">
            <figure className="absolute inset-0 ">
              <AnimatedImage
                src={homeSolutionsImage}
                className="rounded-lg object-cover"
                alt="Home solar PV system on a roof."
                fill
              />
            </figure>

            <Container className="relative flex flex-col gap-6 rounded-lg bg-gradient-to-b from-black/70 py-14 text-center text-white">
              <h3 className="text-2xl font-semibold lg:text-3xl">
                Solar For Home
              </h3>
              <div className="mx-auto mb-4 max-w-sm text-sm text-gray-300">
                Build your own sun generator and save up to RM 850 per month.
              </div>
              <div>
                <Button href="/homeowners">Learn More</Button>
              </div>
            </Container>
          </div>

          <div className="relative aspect-[1/1.1] min-h-fit w-full rounded-lg bg-slate-100 md:w-1/2 lg:aspect-[1.2/1]">
            <figure className="absolute inset-0">
              <AnimatedImage
                fill
                src={businessSolutionsImage}
                className="rounded-lg object-cover"
                alt="Array of solar panels on a grassy field."
              />
            </figure>

            <Container className="relative flex flex-col gap-6 py-14 text-center text-white">
              <h3 className="text-2xl font-semibold lg:text-3xl">
                Solar For Businessess
              </h3>
              <div className="mx-auto mb-4 max-w-sm text-sm text-gray-300">
                With large roofs, come greater savings and stronger
                environmental responsibility.
              </div>
              <div>
                <Button href="/businesses">Learn More</Button>
              </div>
            </Container>
          </div>
        </div>
      </Container>

      {/* Stats Section  */}
      <section className="bg-slate-200">
        <Container className="py-4">
          <PrimaryCard className="relative -mt-32 overflow-hidden">
            <figure className="absolute inset-0 ">
              <SunPattern className="mx-auto h-full" alt="" fill />
            </figure>
            <Container className="relative grid grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Statistic key={"stat_" + i} stat={{ ...stat, type: "home" }} />
              ))}
            </Container>
          </PrimaryCard>
        </Container>
      </section>

      {/* Case Studies  */}
      <section className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <div className="mb-2 text-sm font-semibold uppercase text-gray-600">
              Track Record
            </div>
            <h2 className="mb-4 text-4xl font-semibold capitalize">
              See how others have gained from Solar Energy
            </h2>
            <p className="text-gray-600">
              Verified by our customers and monitoring data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {studies.map((study, i) => (
              <CaseStudyCardVariant key={"study_" + i} data={study} />
            ))}
          </div>

          <div className="mx-auto mt-12">
            <Link
              href="/portfolio"
              className="rounded border border-indigo-dye px-6 py-2 text-sm font-semibold text-indigo-dye hover:bg-indigo-dye hover:text-white"
            >
              View More
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials  */}
      <section className="bg-indigo-dye">
        <Container className="flex flex-col py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <div className="mb-2 text-sm font-semibold uppercase text-cyber-yellow">
              Testimonials
            </div>
            <h2 className="mb-4 text-4xl font-semibold capitalize text-white">
              What our Clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Testimonial key={"review_" + i} data={review} />
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Quote Form  */}
      <section className="relative">
        <figure className="aboslute inset-0 lg:hidden">
          <AnimatedImage
            alt=""
            loading="eager"
            src={SedaMobileHeroImage}
            className="object-cover"
            fill
          />
        </figure>
        <figure className="aboslute inset-0 hidden lg:block">
          <AnimatedImage
            alt=""
            loading="eager"
            src={SedaHeroImage}
            className="object-cover"
            fill
          />
        </figure>

        <div className="relative flex justify-center bg-gradient-to-r from-indigo-dye/30 to-indigo-dye/20 px-8 py-36 lg:justify-end lg:px-36 xl:py-48">
          <div className="container">
            <div className="ml-auto mr-auto max-w-xl rounded-md bg-white lg:mr-0">
              <div className="-mt-1 flex flex-row">
                <div className="h-1 w-3/6 rounded-tl-md bg-indigo-dye"></div>
                <div className="h-1 w-2/6 bg-cyber-yellow"></div>
                <div className="h-1 w-1/6 rounded-tr-md bg-silver"></div>
              </div>
              <div className="flex flex-col gap-6 p-12">
                <div>
                  <div className="text-3xl font-semibold">
                    We take care of everything
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  From SEDA submission, installation, and post-installation
                  services, we do it all.
                </p>
                <p className="text-sm text-gray-600">
                  With no hidden fees and all-inclusive pricing, feel safe with
                  our{" "}
                  <a
                    href="https://www.seda.gov.my/directory/registered-pv-service-provider-directory/"
                    target="_BLANK"
                    rel="noreferrer"
                  >
                    <strong>SEDA certified service provider</strong>
                  </a>{" "}
                  status under Max Bell Sdn. Bhd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ  */}
      <Container className="flex flex-col py-24">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-4 text-4xl font-semibold capitalize">FAQ</h2>
          <p className="text-gray-500">
            Some of the most common questions from our clients.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.slice(0, 5).map((faq, i) => (
            <FAQ key={`faq_${i}`} data={faq} />
          ))}
        </div>

        <div className="mx-auto mt-12 text-sm text-slate-700">
          <OutlineButtonDark href="/faq">View More</OutlineButtonDark>
        </div>
      </Container>
    </>
  );
}
