import createImageUrlBuilder from "@sanity/image-url";

import { env } from "~/env.mjs";

const imageBuilder = createImageUrlBuilder({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
});

export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return "";
  }

  return imageBuilder?.image(source).auto("format").fit("max").url();
};
