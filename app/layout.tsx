import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POLSTATIC — Paul Vincent Ong, Static Designer",
  description:
    "POLSTATIC is the portfolio of Paul Vincent Ong — a static designer making scroll-stopping ad creatives for DTC brands across hair care, supplements, pain relief, safety, and art.",
  openGraph: {
    title: "POLSTATIC — Static Design Portfolio",
    description:
      "Scroll-stopping ad creatives for DTC brands. Hair care, supplements, pain relief, safety, art.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POLSTATIC — Static Design Portfolio",
    description:
      "Scroll-stopping ad creatives for DTC brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="bg-ink text-bone grain">{children}</body>
    </html>
  );
}
