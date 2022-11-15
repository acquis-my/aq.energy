import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Button, OutlineButton } from "../components/Button";
import BusinessSectionRow from "../components/BusinessSectionRow";

import caseStudies from "../_content/studies.json";
import CTA from "../components/CTA";
import CaseStudiesSection from "../components/CaseStudiesSection";
import { NextSeo } from "next-seo";

const BusinessesPage = () => {
  const rows = [
    "Extended Workmanship Guarantee",
    "Professional Site Research",
    "After Sales Monitoring and Service",
  ];

  const studies = caseStudies.filter((study) => study.type === "business");

  return (
    <Layout>
      <NextSeo
        title="Energize your business with clean solar"
        description="Join hundreds of other businesses who have introduced solar energy into their energy mix to reduce their carbon footprint."
      />

      <Hero bgImage="images/for-work/work_hero.jpeg">
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <h1 className="max-w-xl text-4xl lg:text-5xl text-white font-bold">
            Energize your business with{" "}
            <span className="text-cyber-yellow">Great</span> Solar Energy.
          </h1>
          <p className="max-w-prose text-gray-50 font-light">
            Protect your energy bills against rising operational costs. Put your
            rooftops to work by transforming them into productive solar
            generators. All with hassle-free systems monitoring and solid
            workmanship.
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="/about#contact">Contact Us</OutlineButton>
          </div>
        </div>
      </Hero>

      {/* Features row */}
      <section className="bg-slate-100 py-12">
        <BusinessSectionRow
          reversed={false}
          badgeText={"+2 Years"}
          imgURL={"images/for-work/workmanship.png"}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            5-Year Extended Workmanship Guarantee
          </h1>
          <p className="text-gray-600">
            Big investments deserve greater care. We provide an additional 2
            years to ensure your system performs at its maximum for longer.
          </p>
        </BusinessSectionRow>

        <BusinessSectionRow
          reversed={true}
          badgeText={"+2 Years"}
          imgURL={"images/for-work/site-research.jpg"}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Professional Site Research
          </h1>
          <p className="text-gray-600">
            From satellite-based imagery, software simulations, to on-site power
            data-logging, we use the best tools in the industry.
          </p>
        </BusinessSectionRow>

        <BusinessSectionRow
          reversed={false}
          badgeText={"+2 Years"}
          imgURL={"images/monitoring.jpg"}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Post-Installation Monitoring and Service
          </h1>
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
    </Layout>
  );
};

export default BusinessesPage;
