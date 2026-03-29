export const caseStudies = [
  {
    main_image_src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    project_title:
      "Full CLO 3D development for a premium resortwear collection — 24 styles from sketch to manufacturing files.",
    logo_src: "/placeholder-logo.svg",
    description:
      "End-to-end CLO 3D design for a luxury resortwear brand. Delivered photorealistic renders, graded patterns, and factory-ready tech packs for 24 styles across 3 colorways each.",
    features: [
      "Designed 24 resortwear styles in CLO 3D with realistic fabric simulation and drape accuracy.",
      "Delivered graded 2D patterns, tech packs, and DXF files ready for production — cutting sampling costs by 60%.",
    ],
    case_study_link: "#",
    name: "Solara Resortwear",
    demo_images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    ],
    test_img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80",
    testimonial: `"Veragya transformed our concepts into production-ready reality. The CLO 3D renders were so accurate that our manufacturers approved samples on the first round."`,
    founder_name: "Priya Mehta",
    position: "Creative Director, Solara",
  },

  {
    main_image_src: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    project_title:
      "CLO 3D files and Illustrator tech packs for a sustainable denim brand's capsule collection.",
    logo_src: "/placeholder-logo.svg",
    description:
      "Delivered complete CLO 3D project files, Adobe Illustrator tech packs, and manufacturing-ready specifications for a 6-piece sustainable denim capsule collection.",
    features: [
      "Created CLO 3D files with accurate denim weight simulation, wash effects, and hardware placement for 6 styles.",
      "Delivered comprehensive Illustrator tech packs with BOM, construction details, trim specifications, and size charts.",
    ],
    case_study_link: "#",
    name: "Earthloom Denim",
    demo_images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    ],
    test_img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80",
    testimonial: `"Veragya's attention to detail in the CLO files meant our factory in Portugal could start production immediately. Zero back-and-forth."`,
    founder_name: "Nisha Rao",
    position: "Co-Founder, Earthloom",
  },
  {
    main_image_src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    project_title: "2D pattern development and CLO fitting sessions for a bridal couture house.",
    logo_src: "/placeholder-logo.svg",
    description:
      "Developed precise 2D patterns and conducted virtual CLO fitting sessions for 8 bridal couture pieces, replacing 3 rounds of physical samples with digital iterations.",
    features: [
      "Virtual CLO fittings eliminated 3 rounds of physical samples, saving 8 weeks and $15,000 in fabric costs.",
      "Delivered production patterns with full grading for sizes XS–3XL and detailed construction sequence documentation.",
    ],
    case_study_link: "#",
    name: "Maison Éclat",
    demo_images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    ],
    test_img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    testimonial: `"Working with Veragya felt like having an in-house CLO team. The virtual fittings were indistinguishable from real ones."`,
    founder_name: "Isabelle Fontaine",
    position: "Head Designer, Maison Éclat",
  },
];

export interface CaseStudyType {
  main_image_src: string;
  project_title: string;
  logo_src: string;
  description: string;
  features: string[];
  case_study_link: string;
  name: string;
  demo_images: string[];
  project_link?: string | null;
  cta_links?: {
    "let's talk": string;
    "read case study": string;
  };
  test_img?: string;
  testimonial?: string;
  founder_name?: string;
  position?: string;
}
