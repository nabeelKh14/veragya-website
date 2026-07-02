"use client";

import "@/lib/GSAPAnimations";
import { pageMetadata } from "@/lib/metadata";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Creative Expertise",
    description:
      "We offer services including CLO 3D fashion design, animation, custom designs, interior design, Procreate illustrations, video editing, marketing creatives, wedding invitations, and choreography.",
  },
  {
    title: "Strong Design Foundation",
    description:
      "With a solid background in fashion and textile design, our work combines creativity with professional knowledge and practical experience.",
  },
  {
    title: "Personalized Approach",
    description:
      "Every project is tailored to reflect the client's ideas, brand identity, or special occasion.",
  },
  {
    title: "Creativity with Technology",
    description:
      "We integrate artistic creativity with modern digital tools to create innovative and high-quality designs.",
  },
  {
    title: "Learning & Growth",
    description:
      "We also provide training and guidance to help aspiring designers build practical digital skills.",
  },
];

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (highlightsRef.current) {
      gsap.effects.staggerFadeUpOnScroll(highlightsRef.current, {
        duration: 0.6,
        yOffset: 20,
        stagger: 0.08,
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
        {/* About Us */}
        <section className="py-32 mx-auto max-w-6xl px-5" aria-labelledby="about-heading">
          <div className="container">
            <header ref={heroContentRef} className="max-w-3xl">
              <h1
                id="about-heading"
                className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl"
              >
                About Us
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Veragya, we believe great clothing begins with thoughtful design.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                We create timeless pieces that combine comfort, quality, and effortless style. Every
                garment is designed with attention to detail, from the choice of fabric and
                silhouette to the fit and finishing, so that it not only looks beautiful but also
                feels good to wear.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our collections are made for people who appreciate simple, well-crafted clothing
                that can be worn season after season. Instead of following fast-changing trends, we
                focus on creating versatile designs that remain relevant for years.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every piece starts with an idea and goes through a careful design process before it
                comes to life. We combine creativity, craftsmanship, and modern technology to ensure
                that every garment meets the highest standards of quality.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                At Veragya, we believe fashion should be beautiful, functional, and made with
                purpose. Whether it's an everyday essential or a statement piece, our goal is to
                create clothing that helps you feel confident, comfortable, and true to yourself.
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                As we grow, our vision is to build a brand known for timeless design, quality
                craftsmanship, and clothing that people love to wear for years to come.
              </p>
            </header>

            {/* Why Choose Us */}
            <section className="mt-24" aria-labelledby="why-heading">
              <header className="mb-12">
                <h2 id="why-heading" className="text-3xl font-semibold md:text-4xl">
                  Why Choose Veragya
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                  At Veragya, we believe creativity is about transforming ideas into meaningful
                  designs with passion, innovation, and precision. Our goal is to help individuals,
                  brands, and artists express their vision through impactful creative solutions.
                </p>
              </header>

              {/* UI Component Image */}
              <figure className="mb-12 overflow-hidden rounded-2xl">
                <img
                  src="/images/change_image_0.png"
                  alt="Veragya creative design showcase"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div ref={highlightsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-md"
                  >
                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Closing Tagline */}
              <p className="mt-12 text-center text-lg font-semibold text-foreground md:text-xl">
                At Veragya, creativity meets purpose — bringing ideas to life with quality and
                originality.
              </p>
            </section>

            {/* Stats */}
            <section
              ref={statsSectionRef}
              className="container flex flex-col gap-16 mt-24"
              aria-labelledby="stats-heading"
            >
              <header>
                <h2 id="stats-heading" className="max-w-3xl text-4xl font-medium md:text-5xl">
                  Numbers that speak for themselves
                </h2>
              </header>
              <div
                ref={statsGridRef}
                className="grid grid-cols-2 gap-6 md:grid-cols-3"
                role="region"
                aria-label="Studio statistics"
              >
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
