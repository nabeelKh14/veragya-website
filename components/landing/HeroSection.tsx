"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/services";
import { useCart } from "@/lib/CartContext";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const heroSlides = [
  {
    title: "Festive Golden Hour",
    subtitle:
      "Discover the elegance of custom Indian ethnic wear, designed for your most precious moments.",
    cta: "Shop the Collection",
    ctaHref: "/services",
    image: "/images/hero/banner_1.png",
    accent: "from-amber-500 to-yellow-300",
  },
  {
    title: "Premium Handcrafted Designs",
    subtitle: "Experience the luxurious feel of our meticulously crafted ethnic ensembles.",
    cta: "Explore Now",
    ctaHref: "/#contact",
    image: "/images/hero/banner_2.png",
    accent: "from-emerald-500 to-teal-300",
  },
  {
    title: "Elegance Redefined",
    subtitle: "Step into the spotlight with our exquisite collection of traditional wear.",
    cta: "View Collection",
    ctaHref: "/services",
    image: "/images/hero/banner_3.png",
    accent: "from-purple-500 to-fuchsia-400",
  },
];

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[₹,]/g, "");
  return Number.parseInt(cleaned, 10) || 0;
}

function formatPrice(num: number): string {
  return `₹${num.toLocaleString("en-IN")}`;
}

function HeroBanner() {
  return (
    <section aria-label="Featured promotions">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full bg-black"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative flex w-full flex-col justify-center min-h-[480px] sm:min-h-[500px] md:aspect-[3.2/1] md:min-h-0 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover object-center md:object-[center_30%]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Left-to-right gradient overlay to ensure text readability on mobile and bright areas */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:w-2/3 md:w-[60%]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 md:px-16 md:py-0">
                  <div className="max-w-xl space-y-4 sm:space-y-6">
                    <p
                      className={`inline-block bg-gradient-to-r ${slide.accent} bg-clip-text text-xs font-bold tracking-widest text-transparent uppercase drop-shadow-md`}
                    >
                      Veragya Studio
                    </p>
                    <h2
                      className="text-heading text-4xl leading-tight font-bold sm:text-5xl md:text-5xl lg:text-6xl drop-shadow-lg"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "italic",
                        color: "#fff",
                      }}
                    >
                      {slide.title}
                    </h2>
                    <p className="max-w-md text-sm leading-relaxed text-slate-200 sm:text-base drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <a
                      href={slide.ctaHref}
                      className={`group inline-flex items-center gap-0 rounded-full bg-gradient-to-r ${slide.accent} pr-1.5 pl-6 py-1.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    >
                      <span>{slide.cta}</span>
                      <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 transition-colors group-hover:bg-black/40">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </a>
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

function FeaturedServices() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (service: (typeof services)[0]) => {
    const priceNum = parsePrice(service.price);
    addToCart({
      id: service.id,
      title: service.title,
      price: priceNum,
      image: service.image,
    });
    setAddedId(service.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const featured = services.slice(0, 6);

  return (
    <section aria-label="Featured services" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between sm:mb-8">
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Featured Services</h2>
          <Link
            href="/services"
            className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            View All
            <ChevronRight className="ml-0.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featured.map((service) => {
            const priceNum = parsePrice(service.price);
            const originalPrice = Math.round(priceNum * 1.2);
            const discount = Math.round(((originalPrice - priceNum) / originalPrice) * 100);

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {service.popular && (
                    <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                      POPULAR
                    </span>
                  )}

                  <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white">
                    -{discount}% OFF
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 p-4">
                  <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                    {service.category}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {service.title}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-lg font-bold text-gray-900">{formatPrice(priceNum)}</span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                  </div>

                  {service.priceNote && (
                    <p className="text-xs text-gray-400">{service.priceNote}</p>
                  )}

                  <Button
                    onClick={() => handleAddToCart(service)}
                    className={`mt-2 w-full cursor-pointer rounded-full py-5 text-sm font-semibold transition-all duration-300 ${
                      addedId === service.id
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {addedId === service.id ? (
                      "Added to Cart"
                    ) : (
                      <>
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <div>
      <HeroBanner />
      <FeaturedServices />
    </div>
  );
}
