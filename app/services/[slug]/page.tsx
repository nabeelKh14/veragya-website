"use client";

import WhatsAppButton from "@/components/custom/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { type Service, services } from "@/data/services";
import { ArrowRight, Check, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-center">
          <h1
            className="text-4xl font-bold text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            Service Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The service you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <Link href="/services">Back to Services</Link>
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 via-transparent to-neutral-900/20" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 sm:text-sm">
            {service.category}
          </p>
          <h1
            className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Delivery Time */}
            <div className="mt-6 flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Delivery Time: {service.deliveryTime}</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Features */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="relative flex flex-wrap gap-4 mt-10">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <WhatsAppButton variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-neutral-100 via-background to-neutral-100 p-8 text-center sm:p-12 border border-border">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
