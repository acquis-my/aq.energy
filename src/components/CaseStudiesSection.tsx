import Link from "next/link";
import React from "react";
import { CaseStudyCardVariant } from "./CaseStudyCard";
import Container from "./Container";

interface CaseStudySection {
  header: string;
  subheader: string;
  studies: any[];
}

const CaseStudiesSection: React.FC<CaseStudySection> = ({
  header,
  subheader,
  studies,
}) => {
  return (
    <Container className="flex flex-col py-24">
      <div className="max-w-xl mx-auto mb-12 text-center">
        <h1 className="text-gray-600 mb-2 uppercase text-sm font-semibold">
          Case studies
        </h1>
        <p className="text-4xl font-semibold mb-4 capitalize">{header}</p>
        <p className="text-gray-500">{subheader}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {studies.map((study, i) => (
          <CaseStudyCardVariant key={"study_" + i} data={study} />
        ))}
      </div>

      <div className="mx-auto mt-12">
        <Link
          href="/case-studies"
          className="rounded text-indigo-dye hover:text-white border border-indigo-dye hover:bg-indigo-dye px-6 py-2 font-semibold text-sm">
          
            View More
          
        </Link>
      </div>
    </Container>
  );
};

export default CaseStudiesSection;
