// app/providers.js
"use client";
import type { PropsWithChildren } from "react";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

import { env } from "~/env.mjs";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}
export function CSPostHogProvider({ children }: PropsWithChildren) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
