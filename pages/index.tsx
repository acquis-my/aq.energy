import type { NextPage } from "next";
import Hero from "../components/Hero";
import { Button, OutlineButton, OutlineButtonDark } from "../components/Button";
import Layout from "../components/Layout";
import Container from "../components/Container";
import PrimaryCard from "../components/PrimaryCard";
import Statistic from "../components/Statistic";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import FAQ from "../components/FAQ";
import CaseStudyCard, {
  CaseStudyCardVariant,
} from "../components/CaseStudyCard";

import caseStudies from "../_content/studies.json";
import testimonials from "../_content/testimonials.json";
import faqs from "../_content/faqs.json";
import Testimonial from "../components/Testimonial";
import { NextSeo } from "next-seo";
import AnimatedImage from "../components/AnimatedImage";

const stats = [
  {
    title: "Clients",
    value: "300+",
    unit: null,
    caption: "Empowering roofs since 2013",
  },
  {
    title: "CO2 Reduced",
    value: 228,
    unit: "kg",
    caption: "",
  },
  {
    title: "Customer Satisfaction",
    value: 100,
    unit: "%",
    caption: "5-star reviews on Google",
  },
  {
    title: "Accumulated Savings",
    value: "RM 240k",
    unit: null,
    caption: "Across all clients",
  },
];

const Home: NextPage<any> = () => {
  // Only get the first three
  const studies = caseStudies.slice(0, 3);
  const reviews = testimonials.slice(0, 3);

  return (
    <Layout>
      <NextSeo
        title="Affordable and reliable solar energy systems"
        description="We provide solutions to supercharge your roof with clean Solar Energy and reducing your reliance on grid power."
      />

      <Hero bgImage="images/home-hero.jpg">
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
            <OutlineButton href="/about#contact">Contact Us</OutlineButton>
          </div>
          <div className="flex flex-col gap-y-2">
            <p>With support from the best of the Solar industry:</p>
            <ul className="flex gap-x-2 overflow-auto">
              <li>
                <ExportedImage
                  height={48}
                  width={"100%"}
                  className="h-12 w-full"
                  src="/images/placeholder_logo.png"
                  alt="Placeholder Logo"
                />
              </li>
              <li>
                <ExportedImage
                  height={48}
                  width={"100%"}
                  className="h-12 w-full"
                  src="/images/placeholder_logo.png"
                  alt="Placeholder Logo"
                />
              </li>
              <li>
                <ExportedImage
                  height={48}
                  width={"100%"}
                  className="h-12 w-full"
                  src="/images/placeholder_logo.png"
                  alt="Placeholder Logo"
                />
              </li>
              <li>
                <ExportedImage
                  height={48}
                  width={"100%"}
                  className="h-12 w-full"
                  src="/images/placeholder_logo.png"
                  alt="Placeholder Logo"
                />
              </li>
            </ul>
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
              <ExportedImage
                src="images/soln-home.jpg"
                layout="fill"
                className="object-cover rounded-lg"
                alt="House with solar panels on da roof."
              />
            </figure>

            <Container className="relative flex flex-col py-14 text-center gap-6 text-white">
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
                src="images/soln-business.jpg"
                layout="fill"
                loading="eager"
                className="object-cover rounded-lg"
                alt="Array of solar panels."
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
                src="images/sun.svg"
                className="h-full mx-auto"
                alt=""
                layout="fill"
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
            <Link href="/case-studies">
              <a className="rounded text-indigo-dye hover:text-white border border-indigo-dye hover:bg-indigo-dye px-6 py-2 font-semibold text-sm">
                View More
              </a>
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
        <figure className="aboslute inset-0">
          <AnimatedImage
            alt=""
            layout="fill"
            loading="eager"
            src="images/home-quote.png"
            className="object-cover"
          />
        </figure>

        <Container className="p-20 flex justify-center lg:justify-end ">
          <div className="relative max-w-2xl bg-white rounded-b-md">
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
                our <strong>SEDA certified service provider</strong> status.
              </p>
            </div>
          </div>
        </Container>
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

        {/* <div className="mx-auto mt-12 text-sm text-slate-700">
          <Link href="/faq">
            <a className="border border-black-coral px-6 py-3 hover:border-yellow-600 hover:text-yellow-600">
              View More
            </a>
          </Link>
        </div> */}

        <div className="mx-auto mt-12 text-sm text-slate-700">
          <OutlineButtonDark href="/faq">View More</OutlineButtonDark>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
