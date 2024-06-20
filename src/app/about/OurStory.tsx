import Container from "~/components/Container";
import CompanyVideo from "./CompanyVideo";

export default function OurStory() {
  return (
    <section className="py-24">
      <Container className="grid justify-between gap-6 lg:grid-cols-2">
        <div className="space-y-6 text-center text-gray-600 md:text-left lg:max-w-prose">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="font-bold">
            Building Sustainability, One Panel at a Time.
          </p>
        </div>

        <div className="lg:row-span-2">
          <CompanyVideo />
        </div>

        <div className="space-y-6 text-center text-gray-600 md:text-left lg:max-w-prose">
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
      </Container>
    </section>
  );
}
