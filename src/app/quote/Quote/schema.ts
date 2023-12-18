// import { isValidPhoneNumber } from "libphonenumber-js";
import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";
import states from "~/lib/states";

export const quoteSchema = z.object({
  referrer: z.string().optional(),
  token: z.string().optional(),
  type: z.string().refine((v) => ["RESIDENTIAL", "COMMERCIAL"].includes(v)),
  bill: z.number().int().positive(),
  state: z
    .string()
    .refine((v) => states.includes(v), { message: "Invalid state" }),
  name: z.string().nonempty(),
  phone: z
    .string()
    // ? Make this into an edge function to reduce the bundle size
    .refine((v) => isValidPhoneNumber(v, "MY"), {
      message: "Invalid phone number",
    }),
});

export type QuoteData = z.infer<typeof quoteSchema>;
