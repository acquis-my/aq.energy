import "../app/globals.css";
import Analytics from "~/components/Analytics";
import Footer from "../components/Footer";
import { Suspense } from "react";
import { Albert_Sans } from "next/font/google";
import { type Metadata } from "next";

const albertSans = Albert_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const meta: Metadata = {
  title: "AQ Energy",
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
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
