import { Client } from "@upstash/qstash";
import { env } from "~/env.mjs";

export const qstash = new Client({
  token: env.ZEN_QSTASH_TOKEN,
});
