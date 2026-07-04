import type { Metadata } from "next";
import ServicesPage from "./page";

export const metadata: Metadata = {
  title: "Our Services — Veragya",
  description:
    "Professional fashion design services tailored for modern brands. From CLO 3D renders to complete brand identity packages — transparent pricing, clear deliverables, and fast turnaround times.",
  keywords: [
    "CLO 3D services",
    "fashion design services",
    "3D garment rendering",
    "pattern development",
    "brand identity design",
    "fashion marketing",
    "digital fashion illustration",
  ],
  openGraph: {
    title: "Our Services — Veragya",
    description:
      "Professional fashion design services tailored for modern brands. From CLO 3D renders to complete brand identity packages — transparent pricing, clear deliverables, and fast turnaround times.",
    url: "https://veragya.com/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veragya Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services — Veragya",
    description:
      "Professional fashion design services tailored for modern brands. From CLO 3D renders to complete brand identity packages.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://veragya.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
