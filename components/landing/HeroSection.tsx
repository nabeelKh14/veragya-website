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
    image: "/images/change_image_3.png",
    accent: "from-amber-500 to-yellow-300",
  },
  {
    title: "Crafted with Precision, Designed for Impact",
    subtitle:
      "From concept to creation, we blend traditional craftsmanship with cutting-edge technology to deliver fashion solutions that resonate with your vision.",
    cta: "Click here to know more",
    ctaHref: "/#contact",
    image: "/images/change_image_1.png",
    accent: "from-emerald-500 to-teal-300",
  },
  {
    title: "Where Innovation Meets Elegance",
    subtitle:
      "Experience the perfect harmony of creativity and efficiency. Our expert team transforms your ideas into stunning, production-ready designs.",
    cta: "Click here to know more",
    ctaHref: "/services",
    image: "/images/change_image_4.png",
    accent: "from-purple-500 to-fuchsia-400",
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
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

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
