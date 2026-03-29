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
  const founderRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
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

    if (founderRef.current) {
      gsap.effects.fadeUpOnScroll(founderRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (visionRef.current) {
      gsap.effects.fadeUpOnScroll(visionRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (missionRef.current) {
      gsap.effects.fadeUpOnScroll(missionRef.current, {
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
        {/* Hero */}
        <section className="py-32 mx-auto max-w-6xl px-5" aria-labelledby="about-heading">
          <div className="container">
            <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                <header ref={heroContentRef} className="pr-6">
                  <h1
                    id="about-heading"
                    className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl"
                  >
                    About Veragya
                  </h1>
                  <p className="mb-9 text-lg font-medium lg:text-xl">
                    Where creativity meets technology to turn ideas into meaningful visual
                    experiences
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    At Veragya, creativity meets technology to turn ideas into meaningful visual
                    experiences. We are a multidisciplinary creative studio specializing in{" "}
                    <strong className="text-foreground">
                      CLO 3D design, animations, custom designs, interior design, Procreate artwork,
                      and professional video editing
                    </strong>
                    , helping bring concepts to life with precision and originality.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Beyond design, we are passionate about{" "}
                    <strong className="text-foreground">
                      sharing knowledge and empowering creatives
                    </strong>
                    . Through training in various creative and technical software, we help aspiring
                    artists and professionals develop practical skills for the digital world.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Our services also include{" "}
                    <strong className="text-foreground">
                      marketing solutions, wedding invitation design, and choreography
                    </strong>
                    , ensuring every project — whether personal, artistic, or business-focused — is
                    handled with creativity and care.
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Inspired by the Sanskrit concept{" "}
                    <strong className="text-foreground">"Vairagya" (Veragya)</strong> — symbolizing
                    clarity, wisdom, simplicity, and mindful living — we believe every idea deserves
                    a beautiful and meaningful expression.
                  </p>
                </header>
                <figure
                  ref={(el) => {
                    imageGroupRefs.current[0] = el as HTMLDivElement;
                  }}
                  className="flex flex-col items-center justify-center gap-6 md:flex-row"
                  role="group"
                  aria-label="Veragya studio and design work"
                >
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
                <figure
                  ref={(el) => {
                    imageGroupRefs.current[1] = el as HTMLDivElement;
                  }}
                  className="flex flex-col items-center justify-center gap-6 md:flex-row"
                  role="group"
                  aria-label="Fashion design process and 3D visualization"
                >
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
              </div>
            </div>

            {/* Founder Story */}
            <section
              ref={founderRef}
              className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-20"
              aria-labelledby="founder-heading"
            >
              <figure
                ref={(el) => {
                  imageGroupRefs.current[2] = el as HTMLDivElement;
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="Ragini, founder of Veragya, in a creative design workspace"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="flex flex-col justify-center">
                <h2 id="founder-heading" className="mb-4 text-3xl font-semibold md:text-4xl">
                  Founder Story — Ragini
                </h2>
                <p className="mb-6 text-lg font-medium text-muted-foreground">
                  A creative professional with a Master's degree in Fashion and Textile
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ragini, the founder of Veragya, is a creative professional with a strong
                  background in{" "}
                  <strong className="text-foreground">
                    fashion design, digital creativity, marketing, and graphic design
                  </strong>
                  , combining artistic vision with practical industry experience.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  She has worked with various clients in{" "}
                  <strong className="text-foreground">CLO 3D fashion design</strong>, helping
                  aspiring designers — including students from institutes like NIFT — bring their
                  ideas to life through digital fashion concepts. Her academic research also
                  explored the global significance of{" "}
                  <strong className="text-foreground">T-shirts</strong>, highlighting how fabrics
                  like cotton offer both comfort and a platform for personal expression.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ragini is also passionate about{" "}
                  <strong className="text-foreground">art and dance</strong>, and she always aspired
                  to become an entrepreneur and artist. Through Veragya, she aims to bring together
                  fashion design, digital creativity, and creative education to inspire others.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A passionate traveler who has lived in different parts of India, Ragini hopes to
                  expand her creative journey globally and build Veragya into a platform that
                  encourages creativity, innovation, and meaningful collaboration.
                </p>
              </div>
            </section>

            {/* Vision & Mission */}
            <div className="mt-24 grid gap-12 md:grid-cols-2">
              <article ref={visionRef} className="rounded-2xl border p-8 md:p-10">
                <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to become a leading creative and design studio known for innovation,
                  artistic excellence, and impactful digital experiences. Veragya aims to build a
                  global creative community where technology and art work together to inspire new
                  possibilities in design, education, and digital media. We aspire to be a platform
                  that not only delivers exceptional creative services but also empowers the next
                  generation of designers and creators.
                </p>
              </article>
              <article ref={missionRef} className="rounded-2xl border p-8 md:p-10">
                <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Veragya, our mission is to blend creativity, technology, and innovation to
                  deliver high-quality design, digital solutions, and artistic experiences. We
                  strive to empower individuals and businesses through creative services such as 3D
                  design, animations, interior design, digital art, and marketing solutions. By also
                  providing professional software training and creative guidance, we aim to nurture
                  talent, encourage artistic expression, and help people turn their ideas into
                  reality.
                </p>
              </article>
            </div>

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
