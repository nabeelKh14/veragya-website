"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Box, Check, Layers, Lightbulb, Package, Palette, Shirt } from "lucide-react";
import { useState } from "react";

interface ProcessStep {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  bg_image: string;
  deliverables: string[];
  tools: string[];
  benefits: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: "concept",
    title: "Concept & Research",
    tagline: "Understanding Your Vision",
    description:
      "We start by studying your brand identity, target market, and design vision. Through mood boards, reference analysis, and detailed briefs, we define the aesthetic direction, fabric choices, and construction approach for every garment.",
    longDescription:
      "Our concept phase is the foundation of every successful project. We dive deep into your brand DNA, studying your target audience, competitive landscape, and design aspirations. Through collaborative mood boards, fabric research, and detailed design briefs, we establish a clear creative direction that guides every subsequent decision. This ensures alignment between your vision and our execution from day one.",
    icon: Lightbulb,
    bg_image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    deliverables: [
      "Mood boards & visual references",
      "Fabric & trim research",
      "Design direction brief",
      "Brand identity analysis",
      "Target market insights",
    ],
    tools: ["Figma", "Pinterest", "Adobe Illustrator"],
    benefits: ["Clear creative direction", "Aligned expectations", "Reduced revision cycles"],
  },
  {
    id: "pattern",
    title: "2D Pattern Development",
    tagline: "Precision Engineering on Flat",
    description:
      "Our pattern makers create precise 2D patterns with full grading, seam allowances, notches, and construction marks. Every pattern is built to production standards — compatible with Gerber, Lectra, and Optitex systems.",
    longDescription:
      "Technical precision meets creative excellence in our pattern development process. We create production-ready patterns with complete grading across all sizes, accurate seam allowances, construction notches, and detailed technical marks. Our patterns are compatible with industry-standard systems including Gerber AccuMark, Lectra Modaris, and Optitex, ensuring seamless integration with your manufacturing workflow.",
    icon: Layers,
    bg_image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1200&q=80",
    deliverables: [
      "Graded 2D patterns (all sizes)",
      "DXF/AI production files",
      "Complete size spec sheets",
      "Seam allowance documentation",
      "Construction notches & marks",
    ],
    tools: ["Gerber AccuMark", "Lectra Modaris", "Optitex", "Adobe Illustrator"],
    benefits: ["Factory-ready patterns", "Multi-system compatibility", "Accurate grading"],
  },
  {
    id: "3d",
    title: "CLO 3D Design & Rendering",
    tagline: "Bringing Fabrics to Life",
    description:
      "Using CLO 3D, we simulate garments with accurate fabric physics, drape, and fit on customizable avatars. You get photorealistic renders from every angle — perfect for buyer presentations, e-commerce, and social media.",
    longDescription:
      "Experience your designs before they're made. Our CLO 3D simulations accurately replicate fabric behavior, drape, and fit on customizable avatars. We produce photorealistic renders from every angle, virtual fitting sessions, and animation videos that bring your collection to life. This revolutionary approach eliminates costly physical sampling while providing stunning visuals for presentations, e-commerce, and marketing.",
    icon: Box,
    bg_image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=1200&q=80",
    deliverables: [
      "Photorealistic 3D renders",
      "Virtual fitting sessions",
      "CLO 3D project files",
      "360° garment views",
      "Animation videos",
    ],
    tools: ["CLO 3D", "Marvelous Designer", "KeyShot"],
    benefits: [
      "Zero physical samples needed",
      "Faster buyer approvals",
      "Stunning marketing visuals",
    ],
  },
  {
    id: "styling",
    title: "Styling",
    tagline: "Elevating Your Fashion Vision",
    description:
      "Our expert stylists curate looks that capture your brand essence. From editorial shoots to runway presentations, we ensure every detail aligns with your creative direction and resonates with your target audience.",
    longDescription:
      "Styling is the art of visual storytelling. Our experienced stylists work closely with you to understand your brand identity and translate it into compelling visual narratives. Whether it's for editorial shoots, lookbooks, runway shows, or personal styling, we meticulously curate every element — from garments and accessories to props and settings — ensuring each look tells your unique story and captivates your audience.",
    icon: Shirt,
    bg_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    deliverables: [
      "Editorial styling",
      "Lookbook curation",
      "Runway coordination",
      "Personal styling sessions",
      "Wardrobe consultation",
    ],
    tools: ["Creative Direction", "Mood Boards", "On-set Management"],
    benefits: ["Cohesive brand story", "Professional presentation", "Audience engagement"],
  },
  {
    id: "merchandising",
    title: "Merchandising / Branding",
    tagline: "Building Your Brand Identity",
    description:
      "We create cohesive brand experiences that tell your story. From visual merchandising strategies to complete brand identity systems, we help you establish a distinctive presence in the fashion marketplace.",
    longDescription:
      "Your brand is more than just a logo — it's an experience. Our merchandising and branding services encompass everything from creating distinctive brand identities to designing immersive retail experiences. We develop comprehensive brand guidelines, visual merchandising strategies, and marketing collateral that work together to create a memorable and consistent brand presence across all touchpoints.",
    icon: Palette,
    bg_image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    deliverables: [
      "Brand identity design",
      "Visual merchandising",
      "Marketing collateral",
      "Packaging design",
      "Brand guidelines",
    ],
    tools: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    benefits: [
      "Distinctive brand identity",
      "Consistent visual presence",
      "Market differentiation",
    ],
  },
  {
    id: "handoff",
    title: "Production Handoff",
    tagline: "Factory-Ready Delivery",
    description:
      "We package everything your manufacturer needs: Illustrator tech packs with BOM, construction details, and trim specifications; CLO 3D files for reference; graded patterns in production formats; and animated 3D videos.",
    longDescription:
      "The final mile matters most. We compile comprehensive production packages that leave nothing to chance. Your manufacturer receives complete tech packs with bill of materials, detailed construction guides, trim specifications, CLO 3D reference files, production-ready patterns in their preferred format, and animated videos for complex construction details. One complete handoff eliminates confusion and accelerates time to production.",
    icon: Package,
    bg_image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
    deliverables: [
      "Illustrator tech packs with BOM",
      "Complete construction details",
      "Trim & specification sheets",
      "Manufacturing-ready files",
      "3D animation reference videos",
    ],
    tools: ["Adobe Illustrator", "Techpacker", "Excel"],
    benefits: ["Single comprehensive handoff", "Zero confusion", "Accelerated production"],
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState<string>("concept");

  const currentStep = processSteps.find((s) => s.id === activeStep) || processSteps[0];

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 via-transparent to-neutral-900/20" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 sm:text-sm">
            Our Process
          </p>
          <h1
            className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How We Bring Your Designs to Life
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            From initial concept to manufacturing-ready files — a streamlined workflow refined
            across hundreds of fashion projects.
          </p>
        </div>
      </section>

      {/* Process Cards Grid - Complete Workflow Overview */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Complete Workflow Overview
            </h2>
            <p className="mt-4 text-muted-foreground">Click on any step to explore the details</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300",
                    isActive
                      ? "border-neutral-900 bg-neutral-900 text-white shadow-xl scale-105"
                      : "border-border bg-card hover:border-neutral-300 hover:shadow-lg"
                  )}
                >
                  <div
                    className="absolute top-4 right-4 text-6xl font-bold opacity-10"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <Icon
                    className={cn(
                      "h-8 w-8 mb-4",
                      isActive ? "text-neutral-400" : "text-muted-foreground"
                    )}
                  />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      isActive ? "text-neutral-300" : "text-muted-foreground"
                    )}
                  >
                    {step.tagline}
                  </p>
                  <ArrowRight
                    className={cn(
                      "mt-4 h-4 w-4 transition-transform group-hover:translate-x-1",
                      isActive ? "text-white" : "text-muted-foreground"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={currentStep.bg_image}
                alt={currentStep.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  Step {processSteps.findIndex((s) => s.id === activeStep) + 1} of{" "}
                  {processSteps.length}
                </span>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentStep.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2">
              <currentStep.icon className="h-4 w-4 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-600">{currentStep.tagline}</span>
            </div>

            <h2
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {currentStep.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {currentStep.longDescription}
            </p>

            {/* Deliverables */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                What You'll Receive
              </h3>
              <ul className="space-y-3">
                {currentStep.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-8 rounded-xl bg-muted/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Key Benefits
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {currentStep.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-lg bg-background p-4 text-center border border-border"
                  >
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-neutral-100 via-background to-neutral-100 p-8 text-center sm:p-12 border border-border">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let's discuss your vision and create a customized workflow that brings your designs to
            life with precision and creativity.
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
