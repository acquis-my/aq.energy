import client from "./sanity";

type CaseStudy = {
  year?: number;
  systemSize: number;
  title: string;
  type: "commercial" | "residential";
  thumbnail: string;
};

export async function getStudies() {
  const studies = await client.fetch({
    query: `*[_type == "case_study"]`,
    config: { next: { revalidate: 3600 } },
  });

  return studies as CaseStudy[];
}
