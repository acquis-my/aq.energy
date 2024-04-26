"use server";
import type { QuoteData } from "./Quote/schema";
import { quoteSchema } from "./Quote/schema";
import { qstash } from "~/lib/qstash";
import { verify } from "~/lib/turnstile";
import { env } from "~/env.mjs";

export async function createQuote(formValues: QuoteData) {
  const quoteData = await quoteSchema.safeParseAsync(formValues);

  if (!quoteData.success) {
    return {
      status: "error" as const,
      message: "The form contianed invalid data",
    };
  }

  const { token, ...data } = quoteData.data;
  if (!token)
    return {
      status: "error" as const,
      message: "Missing token",
    };

  const validToken = await verify(token);

  if (!validToken)
    return {
      status: "error" as const,
      message: "Invalid token",
    };

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

  if (publishLead.length < 1)
    return {
      status: "error" as const,
      message: "Failed to publish lead",
    };

  return { status: "ok" as const };
}
