import Link from "next/link";
import React from "react";
import Container from "./Container";
import { CaseStudyCardVariant } from "./CaseStudyCard";
import { type CaseStudy } from "~/lib/data";

interface CaseStudySection {
  header: string;
  subheader: string;
  studies: CaseStudy[];
}

const CaseStudiesSection: React.FC<CaseStudySection> = ({
  header,
  subheader,
  studies,
}) => {
  return (
    <Container className="flex flex-col py-24">
      <div className="max-w-xl mx-auto mb-12 text-center">
        <div className="text-gray-600 mb-2 uppercase text-sm font-semibold">
          Case studies
        </div>
        <h2 className="text-4xl font-semibold mb-4 capitalize">{header}</h2>
        <p className="text-gray-500">{subheader}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {studies.map((study, i) => (
          <CaseStudyCardVariant key={"study_" + i} data={study} />
        ))}
      </div>

      <div className="mx-auto mt-12">
        <Link
          href="/portfolio"
          className="rounded text-indigo-dye hover:text-white border border-indigo-dye hover:bg-indigo-dye px-6 py-2 font-semibold text-sm"
        >
          View More
        </Link>
      </div>
    </Container>
  );
};

export default CaseStudiesSection;
