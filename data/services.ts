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
  | "Branding";

export const serviceCategories: ServiceCategory[] = [
  "3D Design",
  "Digital Art",
  "Marketing",
  "Development",
  "Branding",
];

export const services: Service[] = [
  {
    id: "clo-3d-garment-render",
    title: "CLO 3D Garment Rendering",
    description:
      "Photorealistic 3D garment renders for e-commerce, lookbooks, and investor presentations. Includes multiple angles and fabric simulation.",
    category: "3D Design",
    price: "₹8,500",
    priceNote: "per garment",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
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
    category: "3D Design",
    price: "₹25,000",
    priceNote: "per video",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: [
      "Seamless repeat patterns",
      "Colorway variations",
      "Print-ready formats",
      "Scalable vector files",
    ],
    deliveryTime: "3-5 days",
  },
  {
    id: "brand-identity",
    title: "Fashion Brand Identity",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines for fashion labels.",
    category: "Branding",
    price: "₹45,000",
    priceNote: "starting",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    features: [
      "Logo design",
      "Color palette",
      "Typography selection",
      "Brand guidelines PDF",
    ],
    deliveryTime: "10-14 days",
    popular: true,
  },
  {
    id: "social-media-graphics",
    title: "Social Media Graphics",
    description:
      "Professionally designed graphics for Instagram, Facebook, and Pinterest. Consistent visual identity across platforms.",
    category: "Marketing",
    price: "₹3,500",
    priceNote: "per set of 10",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    features: [
      "Responsive design",
      "E-commerce integration",
      "SEO foundation",
      "Performance optimized",
    ],
    deliveryTime: "21-30 days",
  },
];
