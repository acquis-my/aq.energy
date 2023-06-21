import { env } from "~/env.mjs";
import SanityClient from "next-sanity-client";

const client = new SanityClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
});

export default client;
