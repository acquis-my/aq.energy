import "../app/globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
