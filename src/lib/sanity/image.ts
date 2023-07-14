import createImageUrlBuilder from "@sanity/image-url";

import { env } from "~/env.mjs";

const imageBuilder = createImageUrlBuilder({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!source?.asset?._ref) {
    return "";
  }

  return imageBuilder
    ?.image(source as string)
    .auto("format")
    .fit("max")
    .url();
};
