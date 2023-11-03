"use server";
import { z } from "zod";
import { env } from "~/env.mjs";
import { qstash } from "~/lib/qstash";
import { verify } from "~/lib/turnstile";

const quoteSchema = z.object({
  referrer: z.string().optional(),
  token: z.string().optional(),
  type: z.string().refine((v) => ["RESIDENTIAL", "COMMERCIAL"].includes(v)),
  bill: z.coerce
    .number()
    .int()
    .positive()
    .transform((v) => String(v)),
  state: z.string().nonempty(),
  name: z.string().nonempty(),
  phone: z.string().nonempty(),
});

type QuoteData = z.infer<typeof quoteSchema>;

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
    formData.append(key, value);
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
