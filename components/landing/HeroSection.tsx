"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { caseStudies } from "@/data/caseStudies";
import { services } from "@/data/services";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Scissors } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef(null);

  useGSAP(() => {
    const headingElement = heroRef?.current?.querySelector("h1");
    if (headingElement) {
      SplitText.create(headingElement, {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            duration: 0.6,
            y: 10,
            opacity: 0.5,
            filter: "blur(6px)",
            autoAlpha: 0,
            stagger: 0.06,
          });
        },
      });
    }

    if (heroRef?.current && caseStudiesRef?.current) {
      gsap.effects.fadeUpOnScroll(caseStudiesRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <div className="item-center flex flex-col flex-nowrap p-5">
      <div
        ref={heroRef}
        className="hero space-y-4 pt-[116px] pb-[48px] md:pt-[128px] md:pb-[128px] md:text-center lg:pt-[140px] lg:pb-[96px]"
      >
        <SectionHeading
          badge="CLO 3D Fashion Design"
          heading="From Concept to Manufacturing-Ready Files"
          description="We create photorealistic 3D garment renders, precise 2D patterns, animated visualizations, and production-ready CLO 3D files — everything your fashion brand needs to go from idea to factory floor."
          icon={Scissors}
          size="lg"
          align="center"
          as="h1"
          className="heading max-w-4/5 mx-auto"
          headingClassName="md:mx-auto md:w-2/3 leading-tight"
          showDescriptionToScreenReaders={true}
        />

        <div
          aria-label="Call to action buttons"
          className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-center"
        >
          <Button
            aria-describedby="cta-description"
            type="button"
            className="cursor-pointer"
            asChild
          >
            <a href="/#contact">Start Your Project</a>
          </Button>
          <Button
            aria-describedby="portfolio-cta-description"
            type="button"
            className="cursor-pointer"
            variant={"outline"}
            asChild
          >
            <a href="/#portfolio">View Our Work</a>
          </Button>
          <Button
            aria-describedby="services-cta-description"
            type="button"
            className="cursor-pointer"
            variant={"outline"}
            asChild
          >
            <a href="/services">Browse Services</a>
          </Button>
        </div>

        <section className="relative" aria-label="Our services overview">
          <h2 className="!sr-only">Our CLO 3D Design Services</h2>
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:w-48" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent md:w-48" />

          <Marquee pauseOnHover className="mt-14">
            {["3D Garment Renders", "2D Patterns", "CLO 3D Files", "Illustrator Tech Packs", "3D Animations", "Manufacturing Files"].map((service, index) => (
              <div
                key={`service-${index}`}
                className="group mx-4 flex-shrink-0 cursor-pointer"
              >
                <div className="relative flex h-12 items-center justify-center rounded-full border px-6 transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                  <span className="whitespace-nowrap text-sm font-medium">{service}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </section>

        <section className="relative mt-14" aria-label="Browse our services">
          <h2 className="sr-only">Our Services</h2>
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:w-48" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent md:w-48" />

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, index) => (
              <a
                key={service.id}
                href="/services"
                className="group relative flex-shrink-0 snap-start overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl w-[350px] md:w-[400px]"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding={index < 3 ? "sync" : "async"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {service.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-snug text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xl font-extrabold text-white">
                      {service.price}
                      {service.priceNote && (
                        <span className="ml-1 text-sm font-normal text-white/60">
                          {service.priceNote}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <Carousel
          ref={caseStudiesRef}
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          aria-label="portfolio"
          aria-labelledby="featured-projects-heading"
          id="portfolio"
          className="relative mt-14 w-full"
        >
          <h2 id="featured-projects-heading" className="!sr-only">
            Featured Projects
          </h2>
          <div className="pointer-events-none absolute top-0 left-0 z-5 h-full w-12 bg-gradient-to-r from-gray-50/80 via-gray-50/20 to-transparent md:w-36" />
          <div className="pointer-events-none absolute top-0 right-0 z-5 h-full w-12 bg-gradient-to-l from-gray-50/90 via-gray-50/20 to-transparent md:w-36" />

          <CarouselContent>
            {caseStudies.map((caseStudy, index) => (
              <CarouselItem
                key={`${caseStudy.name}-carousel-${index}`}
                className="md:basis-1/2 lg:basis-1/4"
                data-carousel-item
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${caseStudies.length}: ${caseStudy.name}`}
              >
                <div key={`case-study-${index}`} className="w-full max-w-sm space-y-3 text-left">
                  <div className="bg-tag-bg flex aspect-square items-center justify-center rounded-md p-4">
                    <img
                      src={caseStudy.main_image_src}
                      className="max-h-full max-w-full rounded-md object-cover"
                      alt={`${caseStudy.name} project preview - ${caseStudy.project_title}`}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding={index < 4 ? "sync" : "async"}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-heading text-md leading-snug font-semibold">
                       {caseStudy.name}
                    </p>
                    <p className="text-heading text-sm text-muted-foreground line-clamp-2">
                       {caseStudy.project_title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Previous project"
            className="left-0 z-50 size-9 translate-x-0 border-0 bg-gray-500/50"
          />
          <CarouselNext
            aria-label="Next project"
            className="right-0 z-50 size-9 translate-x-0 border-0 bg-gray-500/50"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default HeroSection;
