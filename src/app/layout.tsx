import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Albert_Sans } from "next/font/google";
import { Suspense } from "react";

import { CSPostHogProvider } from "./providers";
import { env } from "~/env.mjs";
import MainNavigation from "~/components/Navigation/MainNavigation";
import Analytics from "~/components/Analytics";
import Footer from "~/components/Footer";
import "../app/globals.css";

const albertSans = Albert_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AQ Energy",
  openGraph: {
    images: ["https://i.imgur.com/3tv9GTA.png"],
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={albertSans.className}>
      <head>
        <link rel="icon" type="image/png" href="/images/aq-logo-primary.png" />
      </head>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      <CSPostHogProvider>
        <body className="overflow-y-scroll">
          <Suspense>
            <Analytics />
          </Suspense>
          <div className="relative flex min-h-screen flex-col">
            <MainNavigation />
            <main className="relative z-0 flex-grow">{props.children}</main>
            <Footer />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
