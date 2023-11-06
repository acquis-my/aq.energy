"use server";
import { env } from "~/env.mjs";
import { qstash } from "~/lib/qstash";
import { verify } from "~/lib/turnstile";
import { quoteSchema, type QuoteData } from "./Quote/schema";

export async function createQuote(formValues: QuoteData) {
  const quoteData = await quoteSchema.parseAsync(formValues);

  const { token, ...data } = quoteData;
  if (!token) throw new Error("Missing token");
  if (!(await verify(token))) {
    throw new Error("Invalid token");
  }

  // Because Zen ingests leads from multiple sources, we need to
  // normalize the JSON data into a FormData object.
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, String(value));
  }

  const publishLead = await qstash.publish({
    topic: env.ZEN_QSTASH_TOPIC,
    body: formData,
  });

  if (publishLead.length > 0) {
    return { status: "ok" };
  }

  throw new Error("Failed to create quote");
}
