import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import WhatsAppButton from "@/components/custom/WhatsAppButton";
import "@/lib/GSAPAnimations";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Outfit } from "next/font/google";
import { Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-heading",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifDevanagari.variable} ${plusJakartaSans.variable} ${outfit.variable} antialiased`}
      >
        <div className="min-h-screen w-full">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
