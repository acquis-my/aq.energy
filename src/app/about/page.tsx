import Container from "~/components/Container";
import Hero from "~/components/Hero";
import { Icon } from "~/components/Icon";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { ButtonVariant2 } from "~/components/Button";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import SupplierLogos from "~/components/SupplierLogos";

// import Portrait from "../components/Portrait";
// import JobPost from "../components/JobPost";
import NoJobs from "~/components/NoJobs";

import AboutHeroImage from "~/../public/images/about/about-hero.png";
import MaxbellImage from "~/../public/images/about/mb.jpeg";
import { Metadata } from "next";
import Image from "next/image";
import Patter from "~/../public/images/Pattern.svg";

export const metadata: Metadata = {
  title: "About AQ Energy",
  description: "Discover our history.",
};

const AboutPage = () => {
  return (
    <>
      <Hero bgImage={AboutHeroImage}>
        <section className="max-w-lg mx-auto flex flex-col items-center py-12 gap-y-12 text-white text-center">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            About Us
          </h1>
          <p className="max-w-prose text-gray-300 text-sm">
            With rising energy demand and accelerating climate change,
            sustainable and renewable energy has become ever so important. We
            take pride in playing a part in that transformation and supporting
            Malaysia&apos;s goal of achieving net-zero carbon by 2050.
          </p>
          <div className="grid grid-cols-3 divide-x divide-dashed divide-gray-600">
            <div className="flex flex-col gap-4 px-2 sm:px-6 justify-between">
              <span className="uppercase text-xs text-gray-200">
                Operating Since
              </span>
              <span className="text-4xl font-bold text-cyber-yellow">2013</span>
            </div>
            <div className="flex flex-col gap-4 px-2 sm:px-6 justify-between">
              <span className="uppercase text-xs text-gray-200">
                Mitigated CO2 Emissions
              </span>
              <span className="text-4xl font-bold text-cyber-yellow">
                2.1 kT
              </span>
            </div>
            <div className="flex flex-col gap-4 px-2 sm:px-6 justify-between">
              <span className="uppercase text-xs text-gray-200">Clients</span>
              <span className="text-4xl font-bold text-cyber-yellow">400+</span>
            </div>
          </div>
        </section>
      </Hero>

      <Container className="flex flex-col md:flex-row justify-between py-20 gap-8">
        <div className="w-full lg:w-3/5 max-w-prose flex flex-col gap-6 my-auto text-gray-600 text-center md:text-left">
          <h1 className="font-bold text-4xl text-gray-800">Our Story</h1>
          <p>
            <strong>Building Sustainability, One Panel at a Time.</strong>
          </p>
          <p>
            Max Bell Sdn. Bhd. was established in 2013 to play a positive role
            in developing solar PV infrastructure across Malaysia. Starting with
            the installations of residential Feed-in-Tariff (FiT) customers, Max
            Bell began catering to commercial clients in 2016 against a backdrop
            of climate change and greater focus on Environmental and Social
            Governance (ESG) policies.
          </p>
          <p>
            Our rebranding to AQ Energy took place in 2022 to reflect the
            involvement of a greater headcount and greater visionaries. It is
            with a mixed talent pool, that we aim to make solar energy more
            affordable for everyone.
          </p>
        </div>
        <figure className="relative w-full lg:w-2/5 h-96 my-auto">
          <Image
            src={MaxbellImage}
            alt="Acquis Logo"
            className="object-cover rounded-xl"
            fill
          />
        </figure>
      </Container>

      <section id="careers" className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
              Open Positions
            </h1>
            <p className="text-4xl font-semibold mb-4 capitalize">
              Develop a Positive-Impact Career with Us
            </p>
            <p className="text-gray-500">
              A place to work, and a place to do good.
            </p>
          </div>

          <div className="flex flex-col gap-4 overflow-hidden items-center">
            <NoJobs />

            {/* <JobPost />
            <JobPost />
            <JobPost />

            <Link href="">
              <a className="mt-8 text-indigo-dye rounded border border-indigo-dye px-6 py-2 text-sm md:text-base">
                View All Openings
              </a>
            </Link> */}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-semibold mb-4 capitalize">
              Our Ethos
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center gap-3">
              <figure className="pb-6">
                <CheckBadgeIcon className="h-20 w-20 mx-auto bg-cyber-yellow text-white rounded-full p-4" />
              </figure>
              <span className="text-lg font-semibold">Vision</span>
              <p className="max-w-sm text-sm text-gray-500">
                To accelerate Malaysia&apos;s transformation into a net-zero
                carbon economy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <figure className="pb-6">
                <CheckBadgeIcon className="h-20 w-20 mx-auto bg-cyber-yellow text-white rounded-full p-4" />
              </figure>
              <span className="text-lg font-semibold">Mission</span>
              <p className="max-w-sm text-sm text-gray-500">
                Delivering powerful and accessible solar PV systems to
                Malaysians.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <figure className="pb-6">
                <CheckBadgeIcon className="h-20 w-20 mx-auto bg-cyber-yellow text-white rounded-full p-4" />
              </figure>
              <span className="text-lg font-semibold">Values</span>
              <p className="max-w-sm text-sm text-gray-500">
                To treat the environment, and our people, fairly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-indigo-dye">
        <Container className="flex flex-col py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-2xl text-white mb-4">
              Trusted by 400+ of homeowners and businesses throughout Malaysia
            </h1>
          </div>
          <div className="w-full max-w-3xl mx-auto text-center">
            <SupplierLogos />
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col py-16 md:py-24">
          {/* <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 capitalize">
              Our People
            </h1>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Portrait name="Albert Lee" title="Bossman" image="images/AB.JPG" />
            <Portrait
              name="Albert Lee"
              title="Bossette"
              image="images/AB.JPG"
            />
            <Portrait name="Albert Lee" title="Bossman" image="images/AB.JPG" />
            <Portrait name="Albert Lee" title="Bossman" image="images/AB.JPG" />
            <Portrait name="Albert Lee" title="Bossman" image="images/AB.JPG" />
            <Portrait name="Albert Lee" title="Bossman" image="images/AB.JPG" />
          </div> */}
          <div
            id="contact"
            // className="mt-10 md:mt-16 flex flex-col bg-gray-100 rounded px-8 py-12 lg:px-12 md:py-14 lg:py-16"
          >
            <div className="max-w-xl mx-auto mb-8 lg:mb-12 text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold mb-4 capitalize">
                Contact Us
              </h1>
              <p className="text-slate-600">
                Feel free to get in touch with us. Powered by 100% humans.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:justify-center md:items-baseline mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-300 overflow-hidden text-sm font-semibold text-black-coral">
              <a
                href="https://wa.me/60377339939"
                className="flex items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0 whitespace-nowrap"
              >
                <Icon>
                  <svg className="h-6 w-6" viewBox="0 0 50 50">
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                  </svg>
                </Icon>
                +603 7832 1039
              </a>
              <a
                href="mailto:hello@aq.energy"
                className="flex items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0 whitespace-nowrap"
              >
                <Icon>
                  <EnvelopeIcon className="h-6 w-6" />
                </Icon>
                hello@aq.energy
              </a>
              <a
                href="https://g.page/MaxBellSolar"
                className="flex items-start xl:items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0"
              >
                <Icon>
                  <MapPinIcon className="h-6 w-6" />
                </Icon>
                10, Jalan Delta U6/19, Sunway Subang Business Park, 40150 Shah
                Alam, Selangor
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-slate-100 py-24">
        <figure className="absolute inset-0">
          <Image
            alt=""
            fill
            src="images/Pattern.svg"
            className="object-cover mx-auto h-full"
          />
        </figure>
        <div className="relative flex flex-col gap-12">
          <Container>
            <div className="flex flex-col mx-auto max-w-prose items-center text-center gap-10">
              <h1 className="text-4xl font-bold">
                Why leave your roofs empty?
              </h1>
              <p className="text-gray-600">
                Solar energy is clean, quiet, and does not require significant
                maintenance. With more people and companies signing up each day,
                don&apos;t miss out on greater electricity savings!
              </p>
              <p className="text-gray-600">
                Get a free quote from us. No commitments.
              </p>
              <div>
                <ButtonVariant2 href="/quote">Get a Quote</ButtonVariant2>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
