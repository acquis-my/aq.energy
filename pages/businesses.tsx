import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Button, OutlineButton } from "../components/Button";
import BusinessSectionRow from "../components/BusinessSectionRow";

import caseStudies from "../fakedata/studies.json";
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
        title="Empower your business with clean solar energy"
        description="Join hundreds of other businesses who have introduced solar energy into their energy mix to reduce their carbon footprint."
      />

      <Hero bgImage="images/business-hero.png">
        <div className="flex flex-col py-16 lg:py-24 gap-y-12 text-white">
          <h1 className="max-w-xl text-4xl lg:text-5xl text-white font-bold">
            Power your business with{" "}
            <span className="text-cyber-yellow">Reliable</span> Solar Energy.
          </h1>
          <p className="max-w-prose text-gray-50 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            expedita nemo voluptate at ad. Mollitia eos aut repellat magni nisi
            cum nihil provident, doloribus fuga cupiditate iure illo quibusdam
            quas!
          </p>
          <div className="flex gap-x-2">
            <Button href="/quote">Get Quote</Button>
            <OutlineButton href="/about#contact">Contact Us</OutlineButton>
          </div>
        </div>
      </Hero>

      {/* Features row */}
      <section className="bg-slate-100">
        {rows.map((row, i) => {
          const isOdd = i % 2 !== 0;
          return (
            <BusinessSectionRow
              key={"sectionRow_" + i}
              reversed={isOdd}
              badgeText={"+2 Years"}
            >
              <h1 className="text-3xl md:text-4xl font-bold">{row}</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span>&mdash; Karen Tan</span>
            </BusinessSectionRow>
          );
        })}
      </section>

      {/* Case Studies  */}
      <section className="relative bg-white">
        <CaseStudiesSection
          studies={studies}
          header={"How other Businesses benefitted from Solar Energy"}
          subheader={
            "We've helped many business reduce their carbon footprint significantly using solar energy."
          }
        />
      </section>

      {/* Call to Action */}
      <CTA caption="Big or small, we do it all." />
    </Layout>
  );
};

export default BusinessesPage;
