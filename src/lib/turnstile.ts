import { env } from "~/env.mjs";

const VERIFY_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verify(token: string): Promise<boolean> {
  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET);
  formData.append("response", token);

  const res: unknown = await fetch(VERIFY_ENDPOINT, {
    cache: "no-cache",
    method: "POST",
    body: formData,
  }).then((r) => r.json());

  if (res && typeof res === "object") {
    if ("success" in res && res.success === true) {
      return true;
    }
  }

  return false;
}
