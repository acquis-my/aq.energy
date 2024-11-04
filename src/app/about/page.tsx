import type { Metadata } from "next";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

// import Portrait from "../components/Portrait";
// import JobPost from "../components/JobPost";
// import NoJobs from "~/components/NoJobs";

import { Icon } from "~/components/Icon";
import { ButtonVariant2 } from "~/components/Button";
import { WHATSAPP_LINK } from "~/links";
import { Statistic } from "~/components/Statistic";
import { Pattern } from "~/components/Pattern";
import AboutHeroImage from "~/../public/images/about/about-hero.png";
import Container from "~/components/Container";
import Hero from "~/components/Hero";
import SectionHeader from "~/components/SectionHeader";
import SupplierLogos from "~/components/SupplierLogos";
import OurStory from "./OurStory";

export const metadata: Metadata = {
  title: "About AQ Energy",
  description: "Discover our history.",
};

const AboutPage = () => {
  return (
    <>
      <Hero bgImage={AboutHeroImage}>
        <section className="mx-auto flex max-w-lg flex-col items-center gap-y-12 py-12 text-center text-white">
          <h1 className="max-w-lg text-4xl font-bold text-white lg:text-5xl">
            About Us
          </h1>
          <p className="max-w-prose text-sm text-gray-300">
            With rising energy demand and accelerating climate change,
            sustainable and renewable energy has become ever so important. We
            take pride in playing a part in that transformation and supporting
            Malaysia&apos;s goal of achieving net-zero carbon by 2050.
          </p>
          <div className="grid grid-cols-3 divide-x divide-dashed divide-gray-600">
            <div className="flex flex-col justify-between gap-4 px-2 sm:px-6">
              <span className="text-xs uppercase text-gray-200">
                Operating Since
              </span>
              <span className="text-4xl font-bold text-cyber-yellow">2013</span>
            </div>
            <div className="flex flex-col justify-between gap-4 px-2 sm:px-6">
              <span className="text-xs uppercase text-gray-200">
                Mitigated CO2 Emissions
              </span>
              <Statistic
                stat={{
                  countup: {
                    start: 1,
                    end: 4.5,
                    suffix: " kT",
                    decimals: 1,
                    scrollSpyOnce: true,
                    enableScrollSpy: true,
                  },
                  type: "about",
                }}
              />
            </div>
            <div className="flex flex-col justify-between gap-4 px-2 sm:px-6">
              <span className="text-xs uppercase text-gray-200">Clients</span>
              <Statistic
                stat={{
                  countup: {
                    start: 450,
                    end: 700,
                    suffix: "+",
                    scrollSpyOnce: true,
                    enableScrollSpy: true,
                  },
                  type: "about",
                }}
              />
            </div>
          </div>
        </section>
      </Hero>

      <OurStory />

      <section id="careers" className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <SectionHeader
            alt="Open Positions"
            header="Develop a Positive-Impact Career with Us"
            subheader="A place to work, and a place to do good."
          />

          <div className="flex flex-col items-center gap-4 overflow-hidden">
            <ButtonVariant2 href="/careers">Join us</ButtonVariant2>

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
          <SectionHeader header="Our Ethos" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 text-center">
              <figure className="pb-6">
                <CheckBadgeIcon className="mx-auto h-20 w-20 rounded-full bg-cyber-yellow p-4 text-white" />
              </figure>
              <span className="text-lg font-semibold">Vision</span>
              <p className="max-w-sm text-sm text-gray-500">
                To accelerate Malaysia&apos;s transformation into a net-zero
                carbon economy.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
              <figure className="pb-6">
                <CheckBadgeIcon className="mx-auto h-20 w-20 rounded-full bg-cyber-yellow p-4 text-white" />
              </figure>
              <span className="text-lg font-semibold">Mission</span>
              <p className="max-w-sm text-sm text-gray-500">
                Delivering powerful and accessible solar PV systems to
                Malaysians.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <figure className="pb-6">
                <CheckBadgeIcon className="mx-auto h-20 w-20 rounded-full bg-cyber-yellow p-4 text-white" />
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
          <div className="mx-auto mb-16 max-w-xl text-center text-2xl text-white">
            Trusted by 700+ of homeowners and businesses throughout Malaysia
          </div>
          <div className="mx-auto w-full max-w-3xl text-center">
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
            <SectionHeader
              header="Contact Us"
              subheader="Feel free to get in touch with us. Powered by 100% humans."
            />

            <div className="mx-auto flex flex-col divide-y divide-slate-300 overflow-hidden text-sm font-semibold text-black-coral md:flex-row md:items-baseline md:divide-x md:divide-y-0 lg:justify-center">
              <a
                href={WHATSAPP_LINK}
                className="flex items-center gap-3 whitespace-nowrap py-5 sm:px-4 md:py-0 lg:px-6"
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
                className="flex items-center gap-3 whitespace-nowrap py-5 sm:px-4 md:py-0 lg:px-6"
              >
                <Icon>
                  <EnvelopeIcon className="h-6 w-6" />
                </Icon>
                hello@aq.energy
              </a>
              <a
                href="https://goo.gl/maps/6cN1wHW1SR6MivpD8"
                className="flex items-start gap-3 py-5 sm:px-4 md:py-0 lg:px-6 xl:items-center"
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
          <Pattern className="mx-auto h-full object-cover" fill />
        </figure>
        <div className="relative flex flex-col gap-12">
          <Container>
            <div className="mx-auto flex max-w-prose flex-col items-center gap-10 text-center">
              <div className="text-4xl font-bold">
                Why leave your roofs empty?
              </div>
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
