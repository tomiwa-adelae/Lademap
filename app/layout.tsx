import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LADEMAB Nigeria Limited | Logistics & Supply Chain Services",
    template: "%s | LADEMAB",
  },
  description:
    "LADEMAB Nigeria Limited is Africa's most reliable logistics and supply chain partner. We provide freight forwarding, customs brokerage, warehousing, and end-to-end supply chain solutions across Nigeria and beyond.",
  keywords: [
    "LADEMAB Nigeria",
    "Logistics Company Nigeria",
    "Supply Chain Africa",
    "Freight Forwarding Nigeria",
    "Customs Brokerage Nigeria",
    "Warehousing Lagos",
    "Import Export Logistics Nigeria",
    "Cargo Services Nigeria",
    "Supply Chain Management Africa",
    "International Freight Nigeria",
    "Shipping Company Nigeria",
    "lademab.com",
  ],
  metadataBase: new URL("https://lademab.com"),
  authors: [{ name: "LADEMAB Corporate Communications" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://lademab.com",
    siteName: "LADEMAB Nigeria Limited",
    title: "LADEMAB | Africa's Premier Logistics & Supply Chain Partner",
    description:
      "Enabling businesses to thrive in a connected global economy through innovative logistics, freight forwarding, and supply chain solutions across Africa.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "LADEMAB Nigeria Limited - Logistics & Supply Chain Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LADEMAB Nigeria | Logistics & Supply Chain Services",
    description:
      "Africa's most reliable logistics and supply chain partner. Freight forwarding, customs brokerage, and warehousing across Nigeria.",
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
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <Toaster />
        <div className="pt-20">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
