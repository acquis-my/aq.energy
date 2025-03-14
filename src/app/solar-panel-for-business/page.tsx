import { type Metadata } from "next";
import { Button } from "~/components/Button";
import BusinessSectionRow from "~/components/BusinessSectionRow";
import Hero from "~/components/Hero";

import CTA from "~/components/CTA";
import CaseStudiesSection from "~/components/CaseStudiesSection";

import WorkHeroImage from "~/../public/images/for-work/work_hero.jpeg";
import { getStudies } from "~/lib/data";
import Emphasize from "~/components/EmphasizeWord";
import WhatsAppButton from "~/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "We Provide Solar Panel Solutions for Businesses | AQ Energy",
  description:
    "Discover the power of solar paneling for businesses in Malaysia. Our tailored solutions provide cost-effective and sustainable energy solutions, reducing operational costs and environmental impact. Get a quote now!",
};

export default async function BusinessesPage() {
  const studies = await getStudies({ type: "commercial", limit: 3 });

  return (
    <>
      <Hero bgImage={WorkHeroImage}>
        <div className="flex flex-col gap-y-12 py-16 text-white lg:py-24">
          <h1 className="max-w-3xl text-4xl font-bold text-white lg:text-5xl">
            Elevate Business <Emphasize>Sustainability</Emphasize> with
            Commercial and Industrial Solar Solutions
          </h1>
          <p className="max-w-prose font-light text-gray-50">
            Protect your energy bills against rising operational costs. Put your
            rooftops to work by transforming them into productive solar
            generators. All with hassle-free systems monitoring and solid
            workmanship.
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <WhatsAppButton />
          </div>
        </div>
      </Hero>

      {/* Features row */}
      <section className="bg-slate-100 py-12">
        <BusinessSectionRow
          reversed={false}
          badgeText={"5 Years"}
          imgURL={"/images/for-work/workmanship.png"}
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Extended Workmanship Guarantee
          </h3>
          <p className="text-gray-600">
            Big investments deserve greater care. We provide an additional 2
            years to ensure your system performs at its maximum for longer.
          </p>
        </BusinessSectionRow>

        <BusinessSectionRow
          reversed={true}
          // badgeText={"2 Years"}
          imgURL={"/images/for-work/site-research.jpg"}
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Professional Site Research
          </h3>
          <p className="text-gray-600">
            From satellite-based imagery, software simulations, to on-site power
            data-logging, we use the best tools in the industry.
          </p>
        </BusinessSectionRow>

        <BusinessSectionRow
          reversed={false}
          badgeText={"System Inclusive"}
          imgURL={"/images/for-work/monitoring_new.jpg"}
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Post-Installation Monitoring and Service
          </h3>
          <p className="text-gray-600">
            With great power, comes great responsibility. We ensure fast online
            troubleshooting of system issues and responsive servicing that
            require on-site rectification.
          </p>
        </BusinessSectionRow>
      </section>

      {/* Case Studies  */}
      <section className="relative bg-white">
        <CaseStudiesSection
          studies={studies}
          header="It's cheaper going Green."
          subheader="Explore how we've helped commercial and industrial entities reduce their electricity costs and transform into more environmentally responsible businesses."
        />
      </section>

      {/* Call to Action */}
      <section className="mb-16 md:mb-24">
        <CTA caption="Big or small, we do it all." />
      </section>
    </>
  );
}
