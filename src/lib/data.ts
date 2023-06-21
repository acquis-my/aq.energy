import client from "./sanity/client";
import { urlForImage } from "./sanity/image";

export type CaseStudy = {
  year?: number;
  systemSize: number;
  title: string;
  type: "commercial" | "residential";
  thumbnail: string;
};

interface GetStudiesOptions {
  type?: "commercial" | "residential";
  slice?: number;
}

export async function getStudies(options?: GetStudiesOptions) {
  let studies = await client.fetch<CaseStudy[]>({
    query: `*[_type == "case_study"]`,
    config: { next: { revalidate: 60 } },
  });

  // Filter by type
  if (options?.type) {
    studies = studies.filter((study) => study.type === options.type);
  }

  // Slice
  if (options?.slice) {
    studies = studies.slice(0, options.slice);
  }

  return studies.map((study) => {
    return {
      ...study,
      thumbnail: urlForImage(study.thumbnail),
    };
  });
}
