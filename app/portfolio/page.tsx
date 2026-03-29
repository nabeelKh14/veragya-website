import { SectionHeading } from "@/components/custom/SectionHeading";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("portfolio");

const portfolioItems = [
  {
    id: 1,
    title: "Cropped Sweatshirt",
    category: "Tech Pack",
    image: "/images/portfolio/item2.jpg",
  },
  {
    id: 2,
    title: "Conceptual Menswear",
    category: "Concept Art",
    image: "/images/portfolio/item3.png",
  },
  {
    id: 3,
    title: "Geometric Elegance",
    category: "3D Render",
    image: "/images/portfolio/item4.png",
  },
  {
    id: 4,
    title: "Performance Pants",
    category: "Tech Pack",
    image: "/images/portfolio/item1.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Portfolio"
          heading="Featured Projects"
          description="Explore our recent work, from conceptual sketches and breathtaking 3D renders to manufacturing-ready technical design packs."
          size="lg"
          align="center"
          className="mb-12 md:mb-16"
        />

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-neutral-100 shadow-sm transition-all duration-500 hover:shadow-xl sm:mb-6 lg:mb-8"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6 md:p-8">
                <span className="mb-3 inline-block rounded-full bg-white/20 border border-white/30 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase shadow-sm backdrop-blur-md">
                  {item.category}
                </span>
                <h3 
                  className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
