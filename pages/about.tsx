import ExportedImage from "next-image-export-optimizer";
import { NextSeo } from "next-seo";
import Container from "../components/Container";
import Hero from "../components/Hero";
import { Icon } from "../components/Icon";
import JobPost from "../components/JobPost";
import Layout from "../components/Layout";
import Portrait from "../components/Portrait";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { ButtonVariant2 } from "../components/Button";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const AboutPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Discover our history"
        description="Case studies from clients who've worked with us."
      />

      <Hero bgImage="images/case-studies-hero.png">
        <section className="max-w-lg mx-auto flex flex-col items-center py-12 gap-y-12 text-white text-center">
          <h1 className="max-w-lg text-4xl lg:text-5xl text-white font-bold">
            About Us
          </h1>
          <p className="max-w-prose text-gray-400 text-sm">
            With rising energy demand and accelerating climate change,
            sustainable and renewable energy has become ever so important. We
            take pride in playing a part in that transformation and supporting
            Malaysia's goal of achieving net-zero carbon by 2050.
          </p>
          <div className="flex flex-row gap-14">
            <div className="flex flex-col gap-4">
              <span className="uppercase text-xs text-gray-200">
                Operating Since
              </span>
              <span className="text-4xl font-bold text-cyber-yellow">2013</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="uppercase text-xs text-gray-200">
                Mitigated CO2 Emissions
              </span>
              <span className="text-4xl font-bold text-cyber-yellow">
                2.1 kT
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="uppercase text-xs text-gray-200">Clients</span>
              <span className="text-4xl font-bold text-cyber-yellow">300+</span>
            </div>
          </div>
        </section>
      </Hero>

      <Container className="flex flex-col md:flex-row justify-between py-20 gap-8">
        <div className="w-full lg:w-3/5 max-w-prose flex flex-col gap-6 my-auto text-gray-600 text-center lg:text-left">
          <h1 className="font-bold text-4xl text-gray-800">Our Story</h1>
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
          <ExportedImage
            src="images/case-studies-hero.png"
            alt="Acquis Logo"
            className="object-cover rounded-xl"
            layout="fill"
          />
        </figure>
      </Container>

      <section className="relative bg-slate-200">
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
            <JobPost />
            <JobPost />
            <JobPost />

            <Link href="">
              <a className="mt-8 text-indigo-dye rounded border border-indigo-dye px-6 py-2 text-sm md:text-base">
                View All Openings
              </a>
            </Link>
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
                To accelerate Malaysia's transformation into a net-zero carbon
                economy.
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
              Trusted by 100+ of homeowners and businesses throughout Malaysia
            </h1>
          </div>
          <div>[Logos go Here]</div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col py-16 md:py-24">
          <div className="max-w-xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 capitalize">
              Our People
            </h1>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Portrait />
            <Portrait />
            <Portrait />
            <Portrait />
            <Portrait />
          </div>
          <div
            id="contact"
            className="mt-10 md:mt-16 flex flex-col bg-gray-100 rounded px-8 py-12 lg:px-12 md:py-14 lg:py-16"
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
              <p className="flex items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0 whitespace-nowrap">
                <Icon>
                  <PhoneIcon className="h-4 w-4" />
                </Icon>
                +6012 345 6789
              </p>
              <p className="flex items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0 whitespace-nowrap">
                <Icon>
                  <EnvelopeIcon className="h-4 w-4" />
                </Icon>
                hello@aq.energy
              </p>
              <p className="flex items-start xl:items-center gap-3 sm:px-4 lg:px-6 py-5 md:py-0">
                <Icon>
                  <MapPinIcon className="h-4 w-4" />
                </Icon>
                51, Jalan SS 22/23, Damansara Jaya, 47400 Petaling Jaya,
                Selangor
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-slate-100 py-24">
        <figure className="absolute inset-0">
          <img src="/Pattern.svg" className="object-cover mx-auto h-full" />
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
                don't miss out on greater electricity savings!
              </p>
              <p className="text-gray-600">
                Get a free quote from us. No commitments.
              </p>
              <div>
                <ButtonVariant2 href="/about#contact">
                  Get a Quote
                </ButtonVariant2>
              </div>
            </div>
            <div className="pt-16 text-center">[LOGOS] GO Here</div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
