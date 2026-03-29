import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { CartProvider } from "@/lib/CartContext";
import "@/lib/GSAPAnimations";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${outfit.variable} antialiased`}>
        <CartProvider>
          <div className="min-h-screen w-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
