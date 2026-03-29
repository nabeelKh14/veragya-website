import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <ProcessSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  );
}
