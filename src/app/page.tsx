import Hero from "../components/Hero";
import Container from "../components/Container";
import PrimaryCard from "../components/PrimaryCard";
import Statistic from "../components/Statistic";
import Link from "next/link";
import FAQ from "./faq/FAQItem";
import { CaseStudyCardVariant } from "../components/CaseStudyCard";
import { Button, OutlineButton, OutlineButtonDark } from "../components/Button";
import { getStudies } from "~/lib/data";
import type { Metadata } from "next";

import { faqs } from "~/_content";
import testimonials from "../_content/testimonials.json";
import Testimonial from "../components/Testimonial";
import AnimatedImage from "../components/AnimatedImage";
import SupplierLogos from "../components/SupplierLogos";

import SunPattern from "../../public/images/sun.svg";
import homepageHero from "../../public/images/main-hero.jpg";
import homeSolutionsImage from "../../public/images/soln-home.jpg";
import businessSolutionsImage from "../../public/images/soln-business.jpg";
import SedaHeroImage from "../../public/images/seda_hero.png";
import SedaMobileHeroImage from "../../public/images/seda_hero-mobile.png";

const stats = [
  {
    title: "Clients",
    value: "300+",
    unit: null,
    caption: "Empowering roofs since 2013",
  },
  {
    title: "CO2 Reduced",
    value: "250",
    unit: "",
    caption: "Tonnes Yearly",
  },
  {
    title: "Customer Satisfaction",
    value: 100,
    unit: "%",
    caption: "5-star reviews on Google",
  },
  {
    title: "Achieved yearly savings",
    value: "RM 3.5M",
    unit: null,
    caption: "Across all clients based on existing installations",
  },
];

export const metadata: Metadata = {
  title: "Affordable and reliable solar energy systems",
  description:
    "We provide solutions to supercharge your roof with clean Solar Energy and reducing your reliance on grid power.",
};

export default async function Home() {
  const studies = await getStudies({ limit: 3, type: "residential" });
  const reviews = testimonials.slice(0, 3);

  return (
    <>
      <Hero bgImage={homepageHero}>
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <p className="max-w-md text-4xl lg:text-5xl text-white capitalize font-bold">
            Give your roof{" "}
            <span className="text-cyber-yellow">Superpowers</span>
          </p>
          <p className="max-w-prose text-gray-50 font-light">
            Generate clean solar energy to fulfill your electricity needs. From
            small-scale residential, to large-scale commercial solutions, we
            have a dedicated team to help you achieve lower electricity costs
            with a solar PV system.
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="https://wa.me/60377339939">
              WhatsApp Us
            </OutlineButton>
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
      <Container className="pt-24 pb-48">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
            Multi-scale Solar
          </h1>
          <p className="text-4xl font-semibold mb-4 capitalize">
            Big or small, we do it all.
          </p>
          <p className="text-gray-500">
            We provide solar energy solutions for both homeowners and business
            to supercharge their roofs. *Solar financing available
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-12 gap-y-8 ">
          <div className="relative w-full md:w-1/2 bg-slate-100 rounded-lg aspect-[1/1.1] md:aspect-[3/3] lg:aspect-[1.2/1] min-h-fit">
            <figure className="absolute inset-0 ">
              <AnimatedImage
                src={homeSolutionsImage}
                className="object-cover rounded-lg"
                alt="Home solar PV system on a roof."
                fill
              />
            </figure>

            <Container className="relative flex flex-col py-14 text-center gap-6 rounded-lg text-white bg-gradient-to-b from-black/70">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                For Homeowners
              </h2>
              <div className="max-w-sm mx-auto mb-4 text-sm text-gray-300">
                Build your own sun generator and save up to RM 850 per month.
              </div>
              <div>
                <Button href="/homeowners">Learn More</Button>
              </div>
            </Container>
          </div>

          <div className="relative w-full md:w-1/2 bg-slate-100 rounded-lg aspect-[1/1.1] lg:aspect-[1.2/1] min-h-fit">
            <figure className="absolute inset-0">
              <AnimatedImage
                fill
                src={businessSolutionsImage}
                className="object-cover rounded-lg"
                alt="Array of solar panels on a grassy field."
              />
            </figure>

            <Container className="relative flex flex-col py-14 text-center gap-6 text-white">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                For Businessess
              </h2>
              <div className="max-w-sm mx-auto mb-4 text-sm text-gray-300">
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
              <AnimatedImage
                src={SunPattern}
                className="h-full mx-auto"
                alt=""
                fill
              />
            </figure>
            <Container className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10">
              {stats.map((stat, i) => (
                <Statistic key={"stat_" + i} stat={stat} />
              ))}
            </Container>
          </PrimaryCard>
        </Container>
      </section>

      {/* Case Studies  */}
      <section className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
              Case studies
            </h1>
            <p className="text-4xl font-semibold mb-4 capitalize">
              See how others have gained from Solar Energy
            </p>
            <p className="text-gray-600">
              Verified by our customers, and monitoring data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {studies.map((study, i) => (
              <CaseStudyCardVariant key={"study_" + i} data={study} />
            ))}
          </div>

          <div className="mx-auto mt-12">
            <Link
              href="/case-studies"
              className="rounded text-indigo-dye hover:text-white border border-indigo-dye hover:bg-indigo-dye px-6 py-2 font-semibold text-sm"
            >
              View More
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials  */}
      <section className="bg-indigo-dye">
        <Container className="flex flex-col py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-cyber-yellow mb-2 uppercase text-sm font-semibold">
              Testimonials
            </h1>
            <p className="text-white text-4xl font-semibold mb-4 capitalize">
              What our Clients say
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {reviews.map((review, i) => (
              <Testimonial key={"review_" + i} data={review} />
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Quote Form  */}
      <section className="relative">
        <figure className="aboslute lg:hidden inset-0">
          <AnimatedImage
            alt=""
            loading="eager"
            src={SedaMobileHeroImage}
            className="object-cover"
            fill
          />
        </figure>
        <figure className="aboslute hidden lg:block inset-0">
          <AnimatedImage
            alt=""
            loading="eager"
            src={SedaHeroImage}
            className="object-cover"
            fill
          />
        </figure>

        <div className="relative bg-gradient-to-r from-indigo-dye/30 to-indigo-dye/20 px-8 lg:px-36 py-36 xl:py-48 flex justify-center lg:justify-end">
          <div className="container">
            <div className="ml-auto mr-auto lg:mr-0 max-w-xl bg-white rounded-md">
              <div className="flex flex-row -mt-1">
                <div className="w-3/6 h-1 bg-indigo-dye rounded-tl-md"></div>
                <div className="w-2/6 h-1 bg-cyber-yellow"></div>
                <div className="w-1/6 h-1 bg-silver rounded-tr-md"></div>
              </div>
              <div className="flex flex-col gap-6 p-12">
                <div>
                  <h1 className="font-semibold text-3xl">
                    We take care of everything
                  </h1>
                </div>
                <p className="text-gray-600 text-sm">
                  From SEDA submission, installation, and post-installation
                  services, we do it all.
                </p>
                <p className="text-gray-600 text-sm">
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
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-semibold mb-4 capitalize">FAQ</h1>
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
