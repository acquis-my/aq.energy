import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { Suspense } from "react";

import "../app/globals.css";
import MainNavigation from "~/components/Navigation/MainNavigation";
import Analytics from "~/components/Analytics";
import Footer from "~/components/Footer";

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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={albertSans.className}>
      <head>
        <link rel="icon" type="image/png" href="/images/aq-logo-primary.png" />
      </head>
      <body className="overflow-y-scroll">
        <Suspense>
          <Analytics />
        </Suspense>
        <div className="relative flex min-h-screen flex-col">
          <MainNavigation />
          <main className="relative z-0 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
