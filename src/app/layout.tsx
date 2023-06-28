import "../app/globals.css";
import Analytics from "~/components/Analytics";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Suspense } from "react";

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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="images/aq-logo-primary.png" />
      </head>
      <body>
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
