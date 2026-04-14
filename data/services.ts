export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  price: string;
  priceNote?: string;
  image: string;
  features: string[];
  deliveryTime: string;
  popular?: boolean;
}

export type ServiceCategory =
  | "3D Design"
  | "Digital Art"
  | "Marketing"
  | "Development"
  | "Branding"
  | "Animation"
  | "Video"
  | "Events"
  | "Training"
  | "Styling"
  | "Merchandising";

export const serviceCategories: ServiceCategory[] = [
  "3D Design",
  "Digital Art",
  "Marketing",
  "Development",
  "Branding",
  "Animation",
  "Video",
  "Events",
  "Training",
  "Styling",
  "Merchandising",
];

export const services: Service[] = [
  // Process Step Services (linked from homepage)
  {
    id: "concept-research",
    title: "Concept & Research",
    description:
      "We start by studying your brand identity, target market, and design vision. Through mood boards, reference analysis, and detailed briefs, we define the aesthetic direction, fabric choices, and construction approach for every garment.",
    category: "Development",
    price: "₹10,000",
    priceNote: "per project",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    features: [
      "Mood boards & references",
      "Fabric & trim research",
      "Design direction brief",
      "Brand identity analysis",
    ],
    deliveryTime: "3-5 days",
    popular: true,
  },
  {
    id: "2d-pattern-development",
    title: "2D Pattern Development",
    description:
      "Our pattern makers create precise 2D patterns with full grading, seam allowances, notches, and construction marks. Every pattern is built to production standards — compatible with Gerber, Lectra, and Optitex systems.",
    category: "Development",
    price: "₹12,000",
    priceNote: "per style",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
    features: [
      "Graded 2D patterns",
      "DXF/AI production files",
      "Size spec sheets",
      "Construction notches & marks",
    ],
    deliveryTime: "5-7 days",
    popular: true,
  },
  {
    id: "clo-3d-design-rendering",
    title: "CLO 3D Design & Rendering",
    description:
      "Using CLO 3D, we simulate garments with accurate fabric physics, drape, and fit on customizable avatars. You get photorealistic renders from every angle — perfect for buyer presentations, e-commerce, and social media.",
    category: "3D Design",
    price: "₹18,000",
    priceNote: "per garment",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
    features: [
      "Photorealistic 3D renders",
      "Virtual fitting sessions",
      "CLO 3D project files",
      "360° garment views",
    ],
    deliveryTime: "5-7 days",
    popular: true,
  },
  {
    id: "production-handoff",
    title: "Production Handoff",
    description:
      "We package everything your manufacturer needs: Illustrator tech packs with BOM, construction details, and trim specifications; CLO 3D files for reference; graded patterns in production formats.",
    category: "Development",
    price: "₹15,000",
    priceNote: "per style",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    features: [
      "Illustrator tech packs",
      "Manufacturing-ready files",
      "3D animation videos",
      "Complete BOM documentation",
    ],
    deliveryTime: "4-6 days",
    popular: true,
  },
  {
    id: "styling",
    title: "Styling",
    description:
      "Our expert stylists curate looks that capture your brand essence. From editorial shoots to runway presentations, we ensure every detail aligns with your creative direction and resonates with your target audience.",
    category: "Styling",
    price: "₹15,000",
    priceNote: "per shoot",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: [
      "Editorial styling",
      "Lookbook curation",
      "Runway coordination",
      "Wardrobe consultation",
    ],
    deliveryTime: "3-5 days",
    popular: true,
  },
  {
    id: "merchandising-branding",
    title: "Merchandising / Branding",
    description:
      "We create cohesive brand experiences that tell your story. From visual merchandising strategies to complete brand identity systems, we help you establish a distinctive presence in the fashion marketplace.",
    category: "Branding",
    price: "₹35,000",
    priceNote: "per project",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    features: [
      "Brand identity design",
      "Visual merchandising",
      "Marketing collateral",
      "Brand guidelines",
    ],
    deliveryTime: "10-14 days",
    popular: true,
  },
  {
    id: "animation",
    title: "Animation",
    description:
      "Dynamic animations showcasing garment movement, fit, and fabric behavior. Perfect for investor pitches, social media content, and marketing materials.",
    category: "Animation",
    price: "₹25,000",
    priceNote: "per video",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    features: [
      "Walk cycle animations",
      "Fabric movement simulation",
      "Multiple camera angles",
      "Social media optimized",
    ],
    deliveryTime: "7-10 days",
    popular: true,
  },

  // Styling Services
  {
    id: "styling-editorial",
    title: "Editorial Styling",
    description:
      "Professional editorial styling for fashion shoots, magazine features, and brand campaigns. We curate looks that capture your brand essence and resonate with your target audience.",
    category: "Styling",
    price: "₹15,000",
    priceNote: "per shoot",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: [
      "Concept development",
      "Wardrobe curation",
      "On-set styling",
      "Post-shoot coordination",
    ],
    deliveryTime: "3-5 days",
    popular: true,
  },
  {
    id: "styling-lookbook",
    title: "Lookbook Curation",
    description:
      "Complete lookbook styling services for seasonal collections, brand launches, and e-commerce. We create cohesive visual stories that showcase your designs beautifully.",
    category: "Styling",
    price: "₹25,000",
    priceNote: "per lookbook",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    features: [
      "Collection analysis",
      "Outfit coordination",
      "Accessory pairing",
      "Lookbook layout guidance",
    ],
    deliveryTime: "5-7 days",
    popular: true,
  },
  {
    id: "styling-runway",
    title: "Runway Coordination",
    description:
      "Expert runway styling and coordination for fashion shows, presentations, and events. From model fittings to backstage management, we ensure a flawless show.",
    category: "Styling",
    price: "₹45,000",
    priceNote: "per show",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    features: ["Model fittings", "Backstage coordination", "Look finalization", "Show running"],
    deliveryTime: "Event day",
  },
  {
    id: "styling-personal",
    title: "Personal Styling",
    description:
      "One-on-one personal styling services for individuals looking to elevate their wardrobe. We help you discover your unique style and build a versatile, timeless collection.",
    category: "Styling",
    price: "₹8,000",
    priceNote: "per session",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    features: ["Style consultation", "Wardrobe audit", "Shopping guidance", "Outfit planning"],
    deliveryTime: "1-2 days",
  },

  // Merchandising / Branding Services
  {
    id: "brand-identity-fashion",
    title: "Fashion Brand Identity",
    description:
      "Complete brand identity design for fashion labels. From logo creation to comprehensive brand guidelines, we build distinctive brand identities that leave lasting impressions.",
    category: "Merchandising",
    price: "₹45,000",
    priceNote: "starting",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    features: [
      "Logo design",
      "Color palette & typography",
      "Brand guidelines PDF",
      "Visual identity system",
    ],
    deliveryTime: "10-14 days",
    popular: true,
  },
  {
    id: "visual-merchandising",
    title: "Visual Merchandising",
    description:
      "Strategic visual merchandising design for retail spaces, pop-ups, and exhibitions. We create immersive brand experiences that drive engagement and conversions.",
    category: "Merchandising",
    price: "₹35,000",
    priceNote: "per project",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    features: ["Space planning", "Display design", "Window displays", "Implementation guide"],
    deliveryTime: "7-10 days",
  },
  {
    id: "marketing-collateral",
    title: "Marketing Collateral Design",
    description:
      "Professional marketing materials including lookbooks, catalogs, business cards, and promotional materials. Consistent visual identity across all touchpoints.",
    category: "Merchandising",
    price: "₹12,000",
    priceNote: "per package",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",
    features: ["Lookbook design", "Catalog layouts", "Business cards", "Promotional materials"],
    deliveryTime: "5-7 days",
    popular: true,
  },
  {
    id: "packaging-design",
    title: "Packaging Design",
    description:
      "Custom packaging design that reflects your brand aesthetic. From hang tags to garment bags, we create packaging that enhances the unboxing experience.",
    category: "Merchandising",
    price: "₹18,000",
    priceNote: "per design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: ["Hang tag design", "Garment bag design", "Box packaging", "Print-ready files"],
    deliveryTime: "5-7 days",
  },

  // Existing 3D Design Services
  {
    id: "clo-3d-garment-render",
    title: "CLO 3D Garment Rendering",
    description:
      "Photorealistic 3D garment renders for e-commerce, lookbooks, and investor presentations. Includes multiple angles and fabric simulation.",
    category: "3D Design",
    price: "₹8,500",
    priceNote: "per garment",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    features: [
      "Photorealistic rendering",
      "Multiple angle views",
      "Fabric simulation accuracy",
      "E-commerce ready output",
    ],
    deliveryTime: "3-5 days",
    popular: true,
  },
  {
    id: "clo-3d-pattern-development",
    title: "CLO 3D Pattern Development",
    description:
      "Production-ready 2D patterns created in CLO 3D with accurate grading, seam allowances, and manufacturing specifications.",
    category: "3D Design",
    price: "₹12,000",
    priceNote: "per style",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
    features: [
      "Graded patterns (XS-3XL)",
      "Seam allowances included",
      "Gerber/Lectra compatible",
      "Construction documentation",
    ],
    deliveryTime: "5-7 days",
    popular: true,
  },
  {
    id: "garment-animation",
    title: "3D Garment Animation",
    description:
      "Dynamic 3D animations showcasing garment movement, fit, and fabric behavior. Perfect for investor pitches and social media.",
    category: "Animation",
    price: "₹25,000",
    priceNote: "per video",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    features: [
      "Walk cycle animations",
      "Fabric movement simulation",
      "Multiple camera angles",
      "Social media optimized",
    ],
    deliveryTime: "7-10 days",
  },
  {
    id: "tech-pack-design",
    title: "Tech Pack Design",
    description:
      "Comprehensive Adobe Illustrator tech packs with BOM, construction details, trim specs, and size charts for manufacturing.",
    category: "3D Design",
    price: "₹6,500",
    priceNote: "per style",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
    features: [
      "Complete BOM",
      "Construction details",
      "Trim specifications",
      "Size charts included",
    ],
    deliveryTime: "4-6 days",
  },
  {
    id: "fashion-illustration",
    title: "Digital Fashion Illustration",
    description:
      "Stylized digital fashion illustrations for branding, marketing materials, and design presentations.",
    category: "Digital Art",
    price: "₹4,500",
    priceNote: "per illustration",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    features: [
      "Multiple art styles",
      "High-resolution output",
      "Source files included",
      "Revision rounds",
    ],
    deliveryTime: "2-4 days",
    popular: true,
  },
  {
    id: "textile-surface-design",
    title: "Textile Surface Design",
    description:
      "Custom textile patterns and surface designs for fabrics. Seamless repeats, color variations, and print-ready files.",
    category: "Digital Art",
    price: "₹5,500",
    priceNote: "per pattern",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: [
      "Seamless repeat patterns",
      "Colorway variations",
      "Print-ready formats",
      "Scalable vector files",
    ],
    deliveryTime: "3-5 days",
  },
  {
    id: "social-media-graphics",
    title: "Social Media Graphics",
    description:
      "Professionally designed graphics for Instagram, Facebook, and Pinterest. Consistent visual identity across platforms.",
    category: "Marketing",
    price: "₹3,500",
    priceNote: "per set of 10",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    features: [
      "Platform optimized sizes",
      "Brand consistency",
      "Editable templates",
      "Content calendar ready",
    ],
    deliveryTime: "2-3 days",
  },
  {
    id: "ecommerce-product-listing",
    title: "E-commerce Product Listing",
    description:
      "Complete product listing setup including descriptions, images, and SEO optimization for fashion e-commerce platforms.",
    category: "Marketing",
    price: "₹8,000",
    priceNote: "per 20 products",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    features: [
      "SEO-optimized descriptions",
      "Image optimization",
      "Category organization",
      "Meta tags included",
    ],
    deliveryTime: "5-7 days",
  },
  {
    id: "website-design",
    title: "Fashion Website Design",
    description:
      "Modern, responsive website design for fashion brands. E-commerce ready with clean aesthetics and smooth UX.",
    category: "Development",
    price: "₹85,000",
    priceNote: "starting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    features: [
      "Responsive design",
      "E-commerce integration",
      "SEO foundation",
      "Performance optimized",
    ],
    deliveryTime: "21-30 days",
  },
  // New services
  {
    id: "video-editing",
    title: "Fashion Video Editing",
    description:
      "Professional video editing for fashion campaigns, lookbooks, and social media content. We create compelling visual stories.",
    category: "Video",
    price: "₹15,000",
    priceNote: "per video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    features: ["Fashion film editing", "Social media clips", "Color grading", "Motion graphics"],
    deliveryTime: "5-7 days",
  },
  {
    id: "e-invite",
    title: "Digital E-Invites",
    description:
      "Beautiful digital invitations for fashion events, launches, and celebrations. Custom-designed e-invites that reflect your brand.",
    category: "Events",
    price: "₹3,000",
    priceNote: "per design",
    image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=600&q=80",
    features: [
      "Custom invitation design",
      "Animated versions",
      "Print-ready files",
      "Multiple formats",
    ],
    deliveryTime: "2-3 days",
  },
  {
    id: "procreate",
    title: "Procreate Illustrations",
    description:
      "Custom digital fashion illustrations created in Procreate. From concept sketches to finished artwork for branding.",
    category: "Digital Art",
    price: "₹6,000",
    priceNote: "per illustration",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    features: [
      "Fashion illustrations",
      "Concept sketches",
      "Source files included",
      "Revision rounds",
    ],
    deliveryTime: "3-5 days",
  },
  {
    id: "learning-software",
    title: "Software Training",
    description:
      "Professional training sessions for CLO 3D, Adobe Illustrator, and other fashion design software. Learn from industry experts.",
    category: "Training",
    price: "₹8,000",
    priceNote: "per session",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    features: ["Live training sessions", "Video tutorials", "Course materials", "Certification"],
    deliveryTime: "1-2 days",
  },
  {
    id: "marketing",
    title: "Fashion Marketing",
    description:
      "Strategic marketing solutions for fashion brands. From social media strategy to campaign creation for maximum reach.",
    category: "Marketing",
    price: "₹25,000",
    priceNote: "per month",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    features: [
      "Social media strategy",
      "Content calendar",
      "Campaign management",
      "Analytics reporting",
    ],
    deliveryTime: "Ongoing",
  },
];
