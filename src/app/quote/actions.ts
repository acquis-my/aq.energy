"use server";
import { env } from "~/env.mjs";
import { qstash } from "~/lib/qstash";
import { verify } from "~/lib/turnstile";
import { quoteSchema, type QuoteData } from "./Quote/schema";
import { get } from "@vercel/edge-config";

async function submitLegacyLead(data: QuoteData) {
  const API_HOST = process.env.NEXT_PUBLIC_ZEN_API;

  const leadData = {
    referrer: data.referrer,
    token: data.token,
    is_commercial: data.type === "RESIDENTIAL" ? 0 : 1,
    avg_bill: data.bill,
    name: data.name,
    mobile: data.phone,
    state: data.state,
  };

  return await fetch(`${API_HOST}/leads`, {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(leadData),
    cache: "no-cache",
  });
}

export async function createQuote(formValues: QuoteData) {
  const quoteData = await quoteSchema.parseAsync(formValues);
  const useLegacy = await get("useLegacyLeadIngest");

  if (useLegacy) {
    const res = await submitLegacyLead(quoteData);

    if (!res.ok) {
      throw new Error("Failed to create quote");
    }
  }

  const { token, ...data } = quoteData;
  if (!token) throw new Error("Missing token");

  // We can skip the verification step if we're using the legacy
  // lead ingest endpoint because the legacy endpoint
  // already verifies the token.
  if (!useLegacy && !(await verify(token))) {
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
