interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  link: string;
  deliverables: {
    item: string;
  }[];
}

const ProcessSection: React.FC = () => {
  const process: processType[] = [
    {
      title: "Concept & Research",
      tagline: "Understanding Your Vision",
      description:
        "We start by studying your brand identity, target market, and design vision. Through mood boards, reference analysis, and detailed briefs, we define the aesthetic direction, fabric choices, and construction approach for every garment.",
      bg_image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
      link: "/services/concept-research",
      deliverables: [
        { item: "Mood boards & references" },
        { item: "Fabric & trim research" },
        { item: "Design direction brief" },
      ],
    },
    {
      title: "2D Pattern Development",
      tagline: "Precision Engineering on Flat",
      description:
        "Our pattern makers create precise 2D patterns with full grading, seam allowances, notches, and construction marks. Every pattern is built to production standards — compatible with Gerber, Lectra, and Optitex systems.",
      bg_image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
      link: "/services/2d-pattern-development",
      deliverables: [
        { item: "Graded 2D patterns" },
        { item: "DXF/AI production files" },
        { item: "Size spec sheets" },
      ],
    },
    {
      title: "CLO 3D Design & Rendering",
      tagline: "Bringing Fabrics to Life",
      description:
        "Using CLO 3D, we simulate garments with accurate fabric physics, drape, and fit on customizable avatars. You get photorealistic renders from every angle — perfect for buyer presentations, e-commerce, and social media.",
      bg_image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      link: "/services/clo-3d-design-rendering",
      deliverables: [
        { item: "Photorealistic 3D renders" },
        { item: "Virtual fitting sessions" },
        { item: "CLO 3D project files" },
      ],
    },
    {
      title: "Production Handoff",
      tagline: "Factory-Ready Delivery",
      description:
        "We package everything your manufacturer needs: Illustrator tech packs with BOM, construction details, and trim specifications; CLO 3D files for reference; graded patterns in production formats.",
      bg_image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      link: "/services/production-handoff",
      deliverables: [
        { item: "Illustrator tech packs" },
        { item: "Manufacturing-ready files" },
        { item: "3D animation videos" },
      ],
    },
    {
      title: "Styling",
      tagline: "Elevating Your Fashion Vision",
      description:
        "Our expert stylists curate looks that capture your brand essence. From editorial shoots to runway presentations, we ensure every detail aligns with your creative direction and resonates with your target audience.",
      bg_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      link: "/services/styling",
      deliverables: [
        { item: "Editorial styling" },
        { item: "Lookbook curation" },
        { item: "Runway coordination" },
      ],
    },
    {
      title: "Merchandising / Branding",
      tagline: "Building Your Brand Identity",
      description:
        "We create cohesive brand experiences that tell your story. From visual merchandising strategies to complete brand identity systems, we help you establish a distinctive presence in the fashion marketplace.",
      bg_image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      link: "/services/merchandising-branding",
      deliverables: [
        { item: "Brand identity design" },
        { item: "Visual merchandising" },
        { item: "Marketing collateral" },
      ],
    },
    {
      title: "Animation",
      tagline: "Bringing Designs to Life",
      description:
        "Dynamic animations showcasing garment movement, fit, and fabric behavior. Perfect for investor pitches, social media content, and marketing materials.",
      bg_image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      link: "/services/animation",
      deliverables: [
        { item: "Walk cycle animations" },
        { item: "Fabric movement simulation" },
        { item: "Multiple camera angles" },
      ],
    },
    {
      title: "Video Editing",
      tagline: "Professional Video Production",
      description:
        "Expert video editing for fashion campaigns, lookbooks, and social media content. We create compelling visual stories that showcase your collection.",
      bg_image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      link: "/services/video-editing",
      deliverables: [
        { item: "Fashion film editing" },
        { item: "Social media clips" },
        { item: "Color grading" },
      ],
    },
    {
      title: "E-Invite",
      tagline: "Digital Invitations & Cards",
      description:
        "Beautiful digital invitations for fashion events, launches, and celebrations. Custom-designed e-invites that reflect your brand aesthetic.",
      bg_image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=800&q=80",
      link: "/services/e-invite",
      deliverables: [
        { item: "Custom invitation design" },
        { item: "Animated versions" },
        { item: "Print-ready files" },
      ],
    },
    {
      title: "Procreate",
      tagline: "Digital Fashion Illustration",
      description:
        "Custom digital fashion illustrations created in Procreate. From concept sketches to finished artwork for branding and presentations.",
      bg_image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      link: "/services/procreate",
      deliverables: [
        { item: "Fashion illustrations" },
        { item: "Concept sketches" },
        { item: "Source files included" },
      ],
    },
    {
      title: "Learning Software",
      tagline: "Software Training & Tutorials",
      description:
        "Professional training sessions for CLO 3D, Adobe Illustrator, and other fashion design software. Learn industry-standard tools from experts.",
      bg_image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      link: "/services/learning-software",
      deliverables: [
        { item: "Live training sessions" },
        { item: "Video tutorials" },
        { item: "Course materials" },
      ],
    },
    {
      title: "Marketing",
      tagline: "Fashion Brand Marketing",
      description:
        "Strategic marketing solutions for fashion brands. From social media strategy to campaign creation, we help you reach your target audience effectively.",
      bg_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "/services/marketing",
      deliverables: [
        { item: "Social media strategy" },
        { item: "Content calendar" },
        { item: "Campaign management" },
      ],
    },
  ];

  return (
    <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12" id="services">
      <div className="text-center mb-6 md:mb-8">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
        >
          How We Bring Your Designs to Life
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          From initial concept to manufacturing-ready files — a streamlined workflow refined across
          hundreds of fashion projects.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((slide, index) => (
          <a
            key={`slide-main-${index}`}
            href={slide.link}
            className="relative aspect-[3/2] w-full overflow-hidden rounded-lg cursor-pointer group transition-transform hover:scale-[1.02]"
            style={{
              backgroundImage: `url(${slide.bg_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-5">
              <div className="space-y-2 rounded-md bg-white/95 p-4 backdrop-blur-sm">
                <div className="space-y-1">
                  <h3 className="text-h4 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-xs font-normal tracking-wide text-[#323c4d]">
                    <span>✦</span> {slide.tagline}
                  </p>
                </div>

                <p className="text-xs leading-snug text-black/60 line-clamp-2">
                  {slide.description}
                </p>
              </div>

              <div className="absolute top-3 right-3">
                <span
                  className="text-4xl font-extrabold text-white/30"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
