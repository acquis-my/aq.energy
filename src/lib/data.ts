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
  limit?: number;
}

export async function getStudies(options?: GetStudiesOptions) {
  let studies = await client.fetch<CaseStudy[]>({
    query: `*[_type == "case_study"] | order(_createdAt desc)`,
    config: {
      next: { revalidate: 60 },
    },
  });

  // Filter by type
  if (options?.type) {
    studies = studies.filter((study) => study.type === options.type);
  }

  // limit
  if (options?.limit) {
    studies = studies.slice(0, options.limit);
  }

  return studies.map((study) => {
    return {
      ...study,
      thumbnail: urlForImage(study.thumbnail),
    };
  });
}
