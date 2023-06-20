"use client";
import { useState } from "react";
import Container from "~/components/Container";
import { studies as caseStudies } from "~/_content";
import { CaseStudyCardVariant } from "~/components/CaseStudyCard";

export default function CaseGrid() {
  const [type, setType] = useState("all");

  const studies =
    type === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.type === type);

  return (
    <section className="z-10 flex flex-col gap-y-8 py-14">
      <Container className="flex flex-row items-center gap-4">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="supply_phases" className="font-semibold">
            Installation Type
          </label>
          <select
            className="p-3 border border-slate-200 text-gray-700 tracking-wide"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="all">All</option>
            <option value="home">Home</option>
            <option value="business">Business</option>
          </select>
        </div>
      </Container>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {studies.map((study, i) => (
          <CaseStudyCardVariant key={"study_" + i} data={study} />
        ))}
      </Container>
    </section>
  );
}
