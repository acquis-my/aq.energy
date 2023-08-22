"use client";
import { CaseStudyCardVariant } from "~/components/CaseStudyCard";
import Container from "~/components/Container";
import useFilter from "~/hooks/useFilter";
import Filter from "./Filter";
import { type CaseStudy } from "~/lib/data";

const INSTALL_TYPES = [
  { label: "All", value: "" },
  { label: "Home", value: "residential" },
  { label: "Business", value: "commercial" },
];

export default function CaseGrid({
  studies: caseStudies,
}: {
  studies: CaseStudy[];
}) {
  const { data: studies, updateFilters, getValue } = useFilter(caseStudies);

  return (
    <section className="z-10 flex flex-col gap-y-8 py-14">
      <Container className="inline-flex items-center justify-between gap-4">
        <Filter
          name="install-type"
          label="Type"
          options={INSTALL_TYPES}
          currentValue={getValue("type")}
          handleChange={(e) => updateFilters("type", e)}
        />

        <Filter
          name="install-year"
          label="Year"
          options={[
            { label: "All", value: "" },
            { label: "2023", value: 2023 },
            { label: "2022", value: 2022 },
          ]}
          currentValue={getValue("year")}
          handleChange={(e) => updateFilters("year", e)}
        />
      </Container>

      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {studies.map((study, i) => (
          <CaseStudyCardVariant key={"study_" + i} data={study} />
        ))}
      </Container>
    </section>
  );
}
