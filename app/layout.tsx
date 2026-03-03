import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Forbliz Global Resources | Heavy Equipment & Industrial Services",
    template: "%s | Forbliz Global",
  },
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
  keywords: [
    "Forbliz Global Resources",
    "Heavy Equipment Nigeria",
    "Mining Support Services Africa",
    "Civil Infrastructure Engineering",
    "Earthmoving Machinery Rental",
    "Site Mobilization Logistics",
    "Excavator and Dozer Sourcing",
    "Industrial Site Development",
    "Forbliz Nigeria",
    "AIRMOB Subsidiary",
    "Construction Logistics Nigeria",
    "Technical Site Engineering",
  ],
  metadataBase: new URL("https://forbliz.com"), // Update to the actual Forbliz domain
  authors: [{ name: "Forbliz Corporate Communications" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://forbliz.com",
    siteName: "Forbliz Global Resources",
    title: "Forbliz Global | Engineering & Equipment Excellence",
    description:
      "A leader in heavy equipment solutions and civil engineering. We mobilize the power and precision needed for Africa's toughest terrains.",
    images: [
      {
        url: "/assets/images/og-image.png", // Use a high-res shot of heavy machinery or the Forbliz Amber logo
        width: 1200,
        height: 630,
        alt: "Forbliz Global Resources - Heavy Assets & Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forbliz Global | Heavy Equipment & Logistics",
    description:
      "Precision engineering and asset sourcing for mining, civil, and industrial projects.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/assets/images/og-image.png" />
        <meta property="og:image" content="/assets/images/og-image.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          data-n-head="ssr"
          data-hid="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <Toaster />
        <div className="pt-20">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
