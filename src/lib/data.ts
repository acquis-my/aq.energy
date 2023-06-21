import client from "./sanity/client";
import { urlForImage } from "./sanity/image";

export type CaseStudy = {
  year?: number;
  systemSize: number;
  title: string;
  type: "commercial" | "residential";
  thumbnail: string;
};

export async function getStudies() {
  const studies = await client.fetch<CaseStudy[]>({
    query: `*[_type == "case_study"]`,
    config: { next: { revalidate: 60 } },
  });

  return studies.map((study) => {
    return {
      ...study,
      thumbnail: urlForImage(study.thumbnail),
    };
  });
}
