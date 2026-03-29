"use client";

import "@/lib/GSAPAnimations";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: {
    item: string;
  }[];
}

const ProcessCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "Concept & Research",
      tagline: "Understanding Your Vision",
      description:
        "We start by studying your brand identity, target market, and design vision. Through mood boards, reference analysis, and detailed briefs, we define the aesthetic direction, fabric choices, and construction approach for every garment. This foundation ensures every design decision aligns with your brand DNA.",
      deliverables: [
        { item: "Mood boards & references" },
        { item: "Fabric & trim research" },
        { item: "Design direction brief" },
      ],
      bg_image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    },
    {
      title: "2D Pattern Development",
      tagline: "Precision Engineering on Flat",
      description:
        "Our pattern makers create precise 2D patterns with full grading, seam allowances, notches, and construction marks. Every pattern is built to production standards — compatible with Gerber, Lectra, and Optitex systems. We deliver ready-to-cut files that your factory can use immediately.",
      deliverables: [
        { item: "Graded 2D patterns" },
        { item: "DXF/AI production files" },
        { item: "Size spec sheets" },
      ],
      bg_image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    },
    {
      title: "CLO 3D Design & Rendering",
      tagline: "Bringing Fabrics to Life",
      description:
        "Using CLO 3D, we simulate garments with accurate fabric physics, drape, and fit on customizable avatars. You get photorealistic renders from every angle — perfect for buyer presentations, e-commerce, and social media — before a single sample is cut. Virtual fittings replace costly physical iterations.",
      deliverables: [
        { item: "Photorealistic 3D renders" },
        { item: "Virtual fitting sessions" },
        { item: "CLO 3D project files" },
      ],
      bg_image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    },
    {
      title: "Production Handoff",
      tagline: "Factory-Ready Delivery",
      description:
        "We package everything your manufacturer needs: Illustrator tech packs with BOM, construction details, and trim specifications; CLO 3D files for reference; graded patterns in production formats; and animated 3D videos for presentations. One handoff. Zero confusion. Ready to produce.",
      deliverables: [
        { item: "Illustrator tech packs" },
        { item: "Manufacturing-ready files" },
        { item: "3D animation videos" },
      ],
      bg_image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    },
  ];

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 5%",
      endTrigger: slidesRef.current[slidesRef.current.length - 2],
      end: "center top",
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.slice(0, 3).forEach((slide) => {
      if (!slide) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      const getAnimationValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        if (isMobile) {
          return { scale: 0.8, z: -50, rotationX: 8, opacity: 0 };
        } else if (isTablet) {
          return { scale: 0.7, z: -75, rotationX: 12, opacity: 0 };
        } else {
          return { scale: 0.6, z: -100, rotationX: 15, opacity: 0 };
        }
      };

      tl.to(slide, {
        ...getAnimationValues(),
        duration: 0.7,
        ease: "power2.inOut",
      });
    });

    const updatePinning = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (isMobile) {
        headerPin.disable();
      } else {
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    updatePinning();
    window.addEventListener("resize", updatePinning);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  const addSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      slidesRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="relative space-y-4 px-4 sm:px-6 lg:px-8" id="services">
      <SectionHeading
        ref={headingRef}
        badge="Our Process"
        heading="How We Bring Your Designs to Life"
        description="From initial concept to manufacturing-ready files — a streamlined workflow refined across hundreds of fashion projects."
        size="md"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-6 md:mb-14"
      />

      <div ref={containerRef} className="relative">
        {process.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            ref={(el) => addSlideRef(el, index)}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className="relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              <div className="w-full space-y-3 rounded-md bg-white/20 p-4 backdrop-blur-lg sm:space-y-4 sm:p-6 md:max-w-7/12">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="heading text-h4 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-xs font-normal tracking-wide text-[#323c4d] sm:text-sm">
                    <span>✦</span> {slide.tagline}
                  </p>
                </div>

                <p className="text-p text-sm leading-snug text-black/60 sm:text-base lg:max-w-4/5">
                  {slide.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                  {slide.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${dl.item}-${ix}`}
                      className="text-heading bg-tag-bg/20 rounded-4xl px-3 py-1 text-xs tracking-wide backdrop-blur-lg sm:px-4"
                    >
                      {dl.item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 md:right-12 md:bottom-8 lg:right-16 lg:bottom-10">
                <div className="relative">
                  <span
                    className="text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
                    style={{
                      WebkitTextStroke: "2px rgb(225,225,225,0.9)",
                      textShadow: "0 1px 2px rgba(225, 225, 225, 0.05)",
                      color: "rgb(0,0,0,0.09)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCards;
