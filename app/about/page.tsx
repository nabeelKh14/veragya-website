"use client";

import "@/lib/GSAPAnimations";
import { pageMetadata } from "@/lib/metadata";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const workplaceContentRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const imageGroupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (workplaceContentRef.current) {
      gsap.effects.fadeUpOnScroll(workplaceContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (statsSectionRef.current) {
      gsap.effects.fadeUpOnScroll(statsSectionRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (statsGridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(statsGridRef.current, {
        duration: 0.6,
        yOffset: 20,
        stagger: 0.1,
        start: "top 85%",
      });
    }

    imageGroupRefs.current.forEach((ref) => {
      if (ref) {
        gsap.effects.fadeUpOnScroll(ref, {
          duration: 0.7,
          yOffset: 25,
          start: "top 80%",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageMetadata.about.structuredData),
        }}
      />

      <main id="main-content" role="main">
        <section className="py-32 mx-auto max-w-6xl px-5" aria-labelledby="about-heading">
          <div className="container">
            <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                <header ref={heroContentRef} className="pr-6">
                  <h1 id="about-heading" className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                    About Veragya
                  </h1>
                  <p className="mb-9 text-lg font-medium lg:text-xl">
                    Where fashion design meets digital precision
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Veragya is a CLO 3D fashion design studio specializing in end-to-end garment
                    development. We bridge the gap between creative vision and manufacturing
                    reality — delivering photorealistic 3D renders, precise 2D patterns, animated
                    visualizations, and factory-ready files that eliminate guesswork from the
                    production process.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Our team combines deep fashion industry knowledge with cutting-edge 3D
                    technology. Whether you're an emerging designer launching your first collection
                    or an established brand streamlining your development pipeline, we deliver
                    the files and visuals you need to produce with confidence.
                  </p>
                </header>
                <figure ref={(el) => { imageGroupRefs.current[0] = el as HTMLDivElement; }} className="flex flex-col items-center justify-center gap-6 md:flex-row" role="group" aria-label="Veragya studio and design work">
                  <img
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                    alt="CLO 3D garment render showing fabric drape and construction details"
                    className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
                    loading="eager"
                    decoding="sync"
                    width="400"
                    height="571"
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80"
                      alt="2D flat pattern development for garment production"
                      className="aspect-[1.1] rounded-lg object-cover"
                      loading="lazy"
                      decoding="async"
                      width="300"
                      height="273"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80"
                      alt="Fashion design workspace with CLO 3D software"
                      className="aspect-[0.7] rounded-lg object-cover"
                      loading="lazy"
                      decoding="async"
                      width="300"
                      height="429"
                    />
                  </div>
                </figure>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                <figure ref={(el) => { imageGroupRefs.current[1] = el as HTMLDivElement; }} className="flex flex-col items-center justify-center gap-6 md:flex-row" role="group" aria-label="Fashion design process and 3D visualization">
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
                    alt="3D garment animation showing movement and fit"
                    className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="444"
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                      alt="Finished garment produced from CLO 3D design files"
                      className="aspect-[0.8] rounded-lg object-cover"
                      loading="lazy"
                      decoding="async"
                      width="300"
                      height="375"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                      alt="Manufacturing-ready tech pack with construction details"
                      className="aspect-[0.9] rounded-lg object-cover"
                      loading="lazy"
                      decoding="async"
                      width="300"
                      height="333"
                    />
                  </div>
                </figure>
                <article ref={workplaceContentRef} className="px-8">
                  <h2 className="mb-8 text-2xl font-semibold lg:mb-6">
                    Our Approach
                  </h2>
                  <p className="mb-9 text-lg font-medium lg:text-xl">
                    Precision, creativity, and production-readiness
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Inspired by the Sanskrit concept of "Vairagya" — clarity, wisdom, and
                    mindful creation — we believe every garment deserves a thoughtful design
                    process. Our workflow replaces costly physical sampling cycles with digital
                    precision, helping brands save time, reduce waste, and get to market faster
                    without compromising on quality or fit.
                  </p>
                </article>
              </div>
            </div>

            <section ref={statsSectionRef} className="container flex flex-col gap-16 mt-24" aria-labelledby="stats-heading">
              <header>
                <h2 id="stats-heading" className="max-w-3xl text-4xl font-medium md:text-5xl">
                  Numbers that speak for themselves
                </h2>
              </header>
              <div ref={statsGridRef} className="grid grid-cols-2 gap-6 md:grid-cols-3" role="region" aria-label="Studio statistics">
                <div className="flex flex-col gap-6 border-b pb-8">
                  <p className="text-4xl font-medium md:text-5xl">200+</p>
                  <p className="text-muted-foreground">Garment styles delivered</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8">
                  <p className="text-4xl font-medium md:text-5xl">40+</p>
                  <p className="text-muted-foreground">Fashion brands served</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8">
                  <p className="text-4xl font-medium md:text-5xl">60%</p>
                  <p className="text-muted-foreground">Avg. sampling cost reduction</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8">
                  <p className="text-4xl font-medium md:text-5xl">8</p>
                  <p className="text-muted-foreground">Countries served</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8">
                  <p className="text-4xl font-medium md:text-5xl">95%</p>
                  <p className="text-muted-foreground">First-round approval rate</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
