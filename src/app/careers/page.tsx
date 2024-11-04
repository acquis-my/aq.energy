import type { Metadata } from "next";
import Hero from "~/components/Hero";
import AboutHeroImage from "~/../public/images/about/about-hero.png";
import JobForm from "~/components/JobForm";
import Container from "~/components/Container";
import SectionHeader from "~/components/SectionHeader";

export const metadata: Metadata = {
  title: "Join AQ Energy",
  description: "Develop a positive-impact career with us!",
};

const CareersPage = () => {
  return (
    <>
      <Hero bgImage={AboutHeroImage}>
        <section className="mx-auto flex max-w-lg flex-col items-center gap-y-12 py-12 text-center text-white">
          <h1 className="max-w-lg text-4xl font-bold text-white lg:text-5xl">
            Careers
          </h1>
        </section>
      </Hero>

      <section id="careers" className="relative bg-slate-200">
        <Container className="flex flex-col py-24">
          <SectionHeader
            header="Application Form"
            subheader="Leave us your details, and we'll get back to you if you're a good fit!"
          />

          <div className="flex flex-col items-center gap-4 overflow-hidden">
            <JobForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default CareersPage;
