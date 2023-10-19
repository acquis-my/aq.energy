import createImageUrlBuilder from "@sanity/image-url";
import { z } from "zod";

import { env } from "~/env.mjs";

const imageBuilder = createImageUrlBuilder({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
});

const imageSchema = z.object({
  asset: z.object({
    _ref: z.string(),
  }),
});

function imageSource(source: unknown) {
  const result = imageSchema.safeParse(source);

  if (!result.success) return null;
  return result.data;
}

/**
 * Returns the dimensions of an image asset from Sanity CMS.
 * @param source - The image asset source.
 * @returns An array containing the width and height of the image asset.
 */
export const getImgDimensions = (source: unknown) => {
  const assetRef = imageSource(source);
  const dimRegex = /([0-9]+)x([0-9]+)/;
  const dimensions = assetRef ? assetRef.asset._ref.match(dimRegex) : null;

  if (!dimensions) return { width: 0, height: 0 };

  return {
    width: parseInt(dimensions[1]!),
    height: parseInt(dimensions[2]!),
  };
};

/**
 * Returns the URL of  image from Sanity CMS.
 * @param source - The source of the image.
 * @returns The URL of the optimized image.
 */
export const urlForImage: (source: unknown) => string = (source) => {
  const assetRef = imageSource(source);

  if (!assetRef) return "";
  return imageBuilder.image(assetRef).auto("format").fit("max").url();
};
