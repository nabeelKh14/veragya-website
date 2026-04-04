import type { Metadata } from "next";

export const siteConfig = {
  name: "Veragya",
  description:
    "End-to-end CLO 3D fashion design services — garment renders, 2D patterns, 3D animations, and manufacturing-ready files for fashion brands worldwide.",
  url: "https://veragya.com",
  ogImage: "/og-image.png",
  logo: "/logo.png",
  keywords: [
    "CLO 3D design",
    "fashion design services",
    "3D garment rendering",
    "clothing pattern design",
    "manufacturing ready files",
    "fashion tech",
    "3D fashion visualization",
    "CLO3D freelancer",
    "garment animation",
    "fashion illustration",
    "tech pack design",
    "apparel development",
  ],
  authors: [
    {
      name: "Veragya Studio",
      url: "https://veragya.com",
    },
  ],
  creator: "Veragya",
  publisher: "Veragya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veragya.com",
    siteName: "Veragya",
    title: "Veragya — CLO 3D Fashion Design Studio",
    description:
      "End-to-end CLO 3D fashion design services — garment renders, 2D patterns, 3D animations, and manufacturing-ready files for fashion brands worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veragya — CLO 3D Fashion Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veragya — CLO 3D Fashion Design Studio",
    description:
      "End-to-end CLO 3D fashion design services — garment renders, 2D patterns, 3D animations, and manufacturing-ready files.",
    images: ["/og-image.png"],
    creator: "@veragya",
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://veragya.com",
  },
  category: "fashion",
};

export const pageMetadata = {
  home: {
    title: "Veragya — CLO 3D Fashion Design Studio",
    description:
      "From concept to manufacturing-ready files. We create stunning 3D garment renders, precise 2D patterns, and production-ready CLO 3D files for fashion brands.",
    keywords: [
      "CLO 3D design",
      "fashion design services",
      "3D garment rendering",
      "clothing pattern design",
      "manufacturing ready files",
      "fashion tech studio",
    ],
    openGraph: {
      title: "Veragya — CLO 3D Fashion Design Studio",
      description:
        "From concept to manufacturing-ready files. We create stunning 3D garment renders, precise 2D patterns, and production-ready CLO 3D files for fashion brands.",
      url: "https://veragya.com",
      type: "website",
    },
    twitter: {
      title: "Veragya — CLO 3D Fashion Design Studio",
      description:
        "From concept to manufacturing-ready files. We create stunning 3D garment renders, precise 2D patterns, and production-ready CLO 3D files for fashion brands.",
    },
    alternates: {
      canonical: "https://veragya.com",
    },
  },
  about: {
    title: "About Veragya — CLO 3D Fashion Design Studio",
    description:
      "Learn about Veragya's story, our expertise in CLO 3D fashion design, and how we help brands bring their clothing concepts to life with precision and creativity.",
    keywords: [
      "Veragya",
      "CLO 3D studio",
      "fashion design team",
      "3D garment experts",
      "fashion technology",
      "clothing design services",
    ],
    openGraph: {
      title: "About Veragya — CLO 3D Fashion Design Studio",
      description:
        "Learn about Veragya's story, our expertise in CLO 3D fashion design, and how we help brands bring their clothing concepts to life.",
      url: "https://veragya.com/about",
      type: "website",
    },
    twitter: {
      title: "About Veragya — CLO 3D Fashion Design Studio",
      description:
        "Learn about Veragya's story, our expertise in CLO 3D fashion design, and how we help brands bring their clothing concepts to life.",
    },
    alternates: {
      canonical: "https://veragya.com/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Veragya",
      description:
        "End-to-end CLO 3D fashion design services — garment renders, 2D patterns, 3D animations, and manufacturing-ready files.",
      url: "https://veragya.com",
      logo: "https://veragya.com/logo.png",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      sameAs: [],
      knowsAbout: [
        "CLO 3D Design",
        "Fashion Design",
        "3D Garment Rendering",
        "Pattern Making",
        "Manufacturing-Ready Files",
      ],
    },
  },
  blog: {
    title: "Fashion Design Insights — Veragya Blog",
    description:
      "Insights on CLO 3D fashion design, garment development workflows, 3D visualization techniques, and industry trends from the Veragya team.",
    keywords: [
      "CLO 3D blog",
      "fashion design insights",
      "3D garment tips",
      "fashion tech articles",
      "pattern design",
    ],
    openGraph: {
      title: "Fashion Design Insights — Veragya Blog",
      description:
        "Insights on CLO 3D fashion design, garment development workflows, 3D visualization techniques, and industry trends.",
      url: "https://veragya.com/blog",
      type: "website",
    },
    twitter: {
      title: "Fashion Design Insights — Veragya Blog",
      description:
        "Insights on CLO 3D fashion design, garment development workflows, 3D visualization techniques, and industry trends.",
    },
    alternates: {
      canonical: "https://veragya.com/blog",
    },
  },
  cart: {
    title: "Shopping Cart — Veragya",
    description:
      "Review your selected CLO 3D fashion design services. Update quantities and proceed to checkout.",
    keywords: [
      "shopping cart",
      "CLO 3D services cart",
      "fashion design order",
      "3D garment render cart",
      "tech pack order",
    ],
    openGraph: {
      title: "Shopping Cart — Veragya",
      description:
        "Review your selected CLO 3D fashion design services. Update quantities and proceed to checkout.",
      url: "https://veragya.com/cart",
      type: "website",
    },
    twitter: {
      title: "Shopping Cart — Veragya",
      description:
        "Review your selected CLO 3D fashion design services. Update quantities and proceed to checkout.",
    },
    alternates: {
      canonical: "https://veragya.com/cart",
    },
  },
  checkout: {
    title: "Checkout — Veragya",
    description:
      "Complete your order for CLO 3D fashion design services. Review your cart and proceed with secure checkout.",
    keywords: [
      "checkout",
      "order CLO 3D services",
      "fashion design order",
      "3D garment render purchase",
      "tech pack order",
    ],
    openGraph: {
      title: "Checkout — Veragya",
      description:
        "Complete your order for CLO 3D fashion design services. Review your cart and proceed with secure checkout.",
      url: "https://veragya.com/checkout",
      type: "website",
    },
    twitter: {
      title: "Checkout — Veragya",
      description:
        "Complete your order for CLO 3D fashion design services. Review your cart and proceed with secure checkout.",
    },
    alternates: {
      canonical: "https://veragya.com/checkout",
    },
  },
  portfolio: {
    title: "Our Portfolio — Recent Work by Veragya",
    description:
      "Explore Veragya's recent fashion design portfolio including concept art, 3D garment renders, and manufacturing-ready tech packs.",
    keywords: [
      "fashion design portfolio",
      "3D garment renders",
      "clothing tech packs",
      "Veragya projects",
      "CLO 3D examples",
    ],
    openGraph: {
      title: "Our Portfolio — Recent Work by Veragya",
      description:
        "Explore Veragya's recent fashion design portfolio including concept art, 3D garment renders, and manufacturing-ready tech packs.",
      url: "https://veragya.com/portfolio",
      type: "website",
    },
    twitter: {
      title: "Our Portfolio — Recent Work by Veragya",
      description:
        "Explore Veragya's recent fashion design portfolio including concept art, 3D garment renders, and manufacturing-ready tech packs.",
    },
    alternates: {
      canonical: "https://veragya.com/portfolio",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];

  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}

export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://veragya.com/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} — Veragya Blog`,
    description,
    keywords: [...siteConfig.keywords, "fashion blog", "CLO 3D article", "garment design insights"],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} — Veragya Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} — Veragya Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}

export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://veragya.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Veragya Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Veragya",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://veragya.com/blog/${slug}`,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
