"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Death of the Sample Room: How CLO 3D Is Rewriting Fashion's Oldest Rule",
    excerpt:
      "Physical sampling costs fashion brands thousands per style. CLO 3D is eliminating that waste — and the brands who've switched aren't going back.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    date: "Mar 28, 2026",
    tag: "Industry",
    slug: "death-of-the-sample-room",
    isTopPick: true,
  },
  {
    id: 2,
    title: "3D Garment Animation: Making Fabric Move on Screen Like It Does in Real Life",
    excerpt:
      "Static renders are table stakes. Animated 3D garments that stretch, sway, and react to movement are the new frontier of fashion visualization.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    date: "Mar 21, 2026",
    tag: "Technology",
    slug: "3d-garment-animation-guide",
    isTopPick: true,
  },
  {
    id: 3,
    title: "Digital-First Design: Why the Smartest Fashion Brands Ditched the Paper Pattern",
    excerpt:
      "The fashion brands growing fastest in 2026 aren't the ones with the biggest budgets — they're the ones with the shortest design-to-production cycles.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    date: "Mar 14, 2026",
    tag: "Design",
    slug: "digital-first-design-workflow",
    isTopPick: true,
  },
  {
    id: 4,
    title: "The Art of the Tech Pack: How to Communicate Your Design Intent Without Saying a Word",
    excerpt:
      "A tech pack is the most important document in fashion production — and most brands get it wrong. Here's how to build one that factories actually follow.",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    date: "Mar 7, 2026",
    tag: "Production",
    slug: "art-of-the-tech-pack",
    isTopPick: false,
  },
  {
    id: 5,
    title: "Sustainable Fashion Starts in the Design Phase — Not the Factory",
    excerpt:
      "Most sustainability conversations focus on materials and manufacturing. But the biggest environmental gains come from decisions made before a single yard of fabric is cut.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    date: "Feb 28, 2026",
    tag: "Sustainability",
    slug: "sustainable-fashion-starts-with-design",
    isTopPick: false,
  },
  {
    id: 6,
    title: "CLO 3D vs Marvelous Designer vs Browzwear: Which 3D Fashion Tool Is Right for You?",
    excerpt:
      "The three leading 3D fashion design platforms each serve different needs. Here's an honest breakdown of strengths, limitations, and who should use what.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "Feb 20, 2026",
    tag: "Tools",
    slug: "clo3d-vs-marvelous-designer",
    isTopPick: false,
  },
];

const blogTags = [
  "All",
  "Industry",
  "Technology",
  "Design",
  "Production",
  "Sustainability",
  "Tools",
];

gsap.registerPlugin(ScrollTrigger);

function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const heroRef = useRef(null);
  const topPicksRef = useRef(null);
  const blogGridRef = useRef(null);

  const filteredPosts =
    selectedTag === "All"
      ? blogPosts.filter((post) => !post.isTopPick)
      : blogPosts.filter((post) => !post.isTopPick && post.tag === selectedTag);

  const topPicks = blogPosts.filter((post) => post.isTopPick);

  useGSAP(() => {
    SplitText.create(".blog-heading", {
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

    if (topPicksRef.current) {
      gsap.effects.fadeUpOnScroll(topPicksRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (blogGridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(blogGridRef.current, {
        start: "top 85%",
        duration: 0.7,
        stagger: 0.1,
        childSelector: ".blog-card",
        markers: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <main id="main-content" role="main">
        <div className="mx-auto max-w-6xl px-5">
          {/* Hero Section */}
          <section
            ref={heroRef}
            className="hero space-y-4 text-center pt-[116px] pb-[48px] md:pt-[128px] md:pb-[64px] lg:pt-[140px] lg:pb-[80px]"
            role="banner"
            aria-label="Blog introduction"
          >
            <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 mx-auto">
              <p className="text-tag align-middle text-sm">
                <span className="mt-1.5 mr-2 inline-block self-center" aria-hidden="true">
                  ✦
                </span>
                The Veragya Journal
              </p>
            </div>

            <h1 className="blog-heading text-h1 text-text-heading !text-center font-semibold md:mx-auto md:w-2/3">
              Fashion Tech, Design Craft & the Future of Making Clothes
            </h1>

            <p className="text-caption text-label md:mx-auto md:w-2/3">
              Deep dives into CLO 3D, digital fashion design, production workflows, and the
              technology reshaping how garments go from concept to closet.
            </p>
          </section>

          {/* Top Picks Section */}
          <section
            ref={topPicksRef}
            className="mb-16"
            role="region"
            aria-labelledby="top-picks-heading"
          >
            <div className="mb-8">
              <h2 id="top-picks-heading" className="text-h2 text-text-heading font-semibold mb-2">
                Featured Reads
              </h2>
              <div className="h-px bg-border" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topPicks.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer space-y-4 block"
                  role="article"
                  aria-labelledby={`top-pick-title-${post.id}`}
                  aria-describedby={`top-pick-excerpt-${post.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.image}
                      alt={`${post.title} - Featured image`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding={index < 2 ? "sync" : "async"}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3
                      id={`top-pick-title-${post.id}`}
                      className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-label">
                      <time dateTime="2026-03-28" className="font-medium">
                        {post.date}
                      </time>
                      <Badge variant="secondary" className="text-xs">
                        {post.tag}
                      </Badge>
                    </div>

                    <p
                      id={`top-pick-excerpt-${post.id}`}
                      className="text-caption text-label line-clamp-2"
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* All Articles Section */}
          <section
            ref={blogGridRef}
            className="mb-16"
            role="region"
            aria-labelledby="all-articles-heading"
          >
            <div className="mb-8">
              <h2
                id="all-articles-heading"
                className="text-h2 text-text-heading font-semibold mb-6"
              >
                All Articles
              </h2>

              {/* Filter Tags */}
              <div className="mb-8">
                <div
                  className="flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="Blog category filters"
                >
                  {blogTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTag(tag)}
                      className="text-sm"
                      role="tab"
                      aria-selected={selectedTag === tag}
                      aria-controls={`blog-content-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />
            </div>

            {/* Blog Grid */}
            <div
              id={`blog-content-${selectedTag.toLowerCase().replace(/\s+/g, "-")}`}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              role="tabpanel"
              aria-labelledby={`${selectedTag.toLowerCase().replace(/\s+/g, "-")}-tab`}
            >
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="blog-card group cursor-pointer space-y-4 block"
                  role="article"
                  aria-labelledby={`blog-title-${post.id}`}
                  aria-describedby={`blog-excerpt-${post.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.image}
                      alt={`${post.title} - Featured image`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding={index < 3 ? "sync" : "async"}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3
                      id={`blog-title-${post.id}`}
                      className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-label">
                      <time dateTime="2026-02-20" className="font-medium">
                        {post.date}
                      </time>
                      <Badge variant="secondary" className="text-xs">
                        {post.tag}
                      </Badge>
                    </div>

                    <p
                      id={`blog-excerpt-${post.id}`}
                      className="text-caption text-label line-clamp-2"
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* No results message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12" role="status" aria-live="polite">
                <p className="text-label text-lg">No articles found for the selected category.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSelectedTag("All")}
                  aria-label="Clear filter and show all blog posts"
                >
                  Show All Articles
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
