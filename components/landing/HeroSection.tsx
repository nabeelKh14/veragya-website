"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    title: "Welcome to a More Sustainable Fashion",
    subtitle:
      "Our services help reduce the wastage of sampling and the rising costs for brands and individuals alike, creating a more eco-conscious fashion future.",
    cta: "Click here to know more",
    ctaHref: "/services",
    image: "/images/hero/hero-1.jpg",
    accent: "from-amber-500 to-yellow-300",
  },
  {
    title: "Crafted with Precision, Designed for Impact",
    subtitle:
      "From concept to creation, we blend traditional craftsmanship with cutting-edge technology to deliver fashion solutions that resonate with your vision.",
    cta: "Click here to know more",
    ctaHref: "/#contact",
    image: "/images/hero/hero-2.webp",
    accent: "from-emerald-500 to-teal-300",
  },
  {
    title: "Where Innovation Meets Elegance",
    subtitle:
      "Experience the perfect harmony of creativity and efficiency. Our expert team transforms your ideas into stunning, production-ready designs.",
    cta: "Click here to know more",
    ctaHref: "/services",
    image: "/images/hero/hero-3.jpg",
    accent: "from-purple-500 to-fuchsia-400",
  },
  {
    title: "Transform Your Fashion Vision Into Reality",
    subtitle:
      "Professional design services that bridge the gap between creative concepts and market-ready products.",
    cta: "Click here to know more",
    ctaHref: "/portfolio",
    image: "/images/hero/hero-4.webp",
    accent: "from-blue-500 to-cyan-300",
  },
  {
    title: "Expert Pattern Making & 3D Design",
    subtitle:
      "Industry-leading expertise in garment construction, digital fitting, and production-ready technical specifications.",
    cta: "Click here to know more",
    ctaHref: "/services/clo-3d-design-rendering",
    image: "/images/hero/hero-5.jpg",
    accent: "from-rose-500 to-pink-300",
  },
  {
    title: "End-to-End Fashion Solutions",
    subtitle:
      "From initial sketches to final production, we handle every step of your fashion project with precision and care.",
    cta: "Click here to know more",
    ctaHref: "/#contact",
    image: "/images/hero/hero-6.png",
    accent: "from-orange-500 to-amber-300",
  },
];

function HeroBanner() {
  return (
    <section aria-label="Featured promotions">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full bg-black"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative flex w-full flex-col justify-center h-[100dvh] overflow-hidden">
                {/* Background Image - starts from top */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover object-top"
                    loading={index === 0 ? "eager" : "lazy"}
                    style={{ objectPosition: "top center" }}
                  />
                </div>

                {/* Content centered */}
                <div className="relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-10 md:p-16">
                  <div className="max-w-2xl space-y-6 text-center">
                    <h2
                      className="text-heading text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "italic",
                        color: "#fff",
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={slide.ctaHref}
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-white pr-6 pl-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <span>{slide.cta}</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-colors group-hover:bg-black/20">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 size-9 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" />
        <CarouselNext className="right-4 size-9 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" />
      </Carousel>
    </section>
  );
}

export default function HeroSection() {
  return (
    <div>
      <HeroBanner />
    </div>
  );
}
