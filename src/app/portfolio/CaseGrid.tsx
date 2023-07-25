"use client";
import Container from "~/components/Container";
import { CaseStudyCardVariant } from "~/components/CaseStudyCard";
import useStudyFilter from "./useStudyFilter";
import { type CaseStudy } from "~/lib/data";

export default function CaseGrid({
  studies: caseStudies,
}: {
  studies: CaseStudy[];
}) {
  const { studies, setFilters, currentValue } = useStudyFilter(caseStudies);

  return (
    <section className="z-10 flex flex-col gap-y-8 py-14">
      <Container className="flex flex-row items-center gap-4">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="supply_phases" className="font-semibold">
            Installation Type
          </label>
          <select
            className="p-3 border border-slate-200 text-gray-700 tracking-wide"
            onChange={(e) => setFilters(e.target.value)}
            value={currentValue}
          >
            <option value="all">All</option>
            <option value="home">Home</option>
            <option value="commercial">Business</option>
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
