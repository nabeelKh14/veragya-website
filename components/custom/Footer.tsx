"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/#contact" },
];

const services = [
  { name: "CLO 3D Design", href: "/services" },
  { name: "3D Garment Animation", href: "/services" },
  { name: "2D Pattern Development", href: "/services" },
  { name: "Styling", href: "/services/styling" },
  { name: "Merchandising", href: "/services/merchandising-branding" },
  { name: "Video Editing", href: "/services" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/veragya" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/veragya" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/veragya" },
];

// Pantone 19-119 TCX (Potting Soil)
const FOOTER_BG = "#533D32";
const FOOTER_BG_DARK = "#3D2D26";

function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: FOOTER_BG }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "#D4A574", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#D4A574", filter: "blur(100px)" }}
      />

      {/* Main Footer Content */}
      <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 relative z-10">
        {/* Top CTA Section */}
        <div
          className="mb-16 rounded-3xl p-8 text-center sm:p-12"
          style={{ backgroundColor: FOOTER_BG_DARK }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#D4A574" }}
          >
            Start Your Project
          </p>
          <h2
            className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to bring your vision to life?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Let's create something extraordinary together. From concept to final delivery, we're
            here to transform your ideas into reality.
          </p>
          <a
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#D4A574", color: FOOTER_BG }}
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="inline-block transition-opacity hover:opacity-70"
              itemProp="name"
            >
              <img
                src="/images/logo.png"
                alt="Veragya"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A multidisciplinary creative studio specializing in fashion design, 3D visualization,
              and digital creativity.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-all hover:text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+919999999999"
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{ backgroundColor: "rgba(212, 165, 116, 0.2)" }}
                  >
                    <Phone className="h-3.5 w-3.5" style={{ color: "#D4A574" }} />
                  </div>
                  <span className="mt-1">+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@veragya.com"
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{ backgroundColor: "rgba(212, 165, 116, 0.2)" }}
                  >
                    <Mail className="h-3.5 w-3.5" style={{ color: "#D4A574" }} />
                  </div>
                  <span className="mt-1">hello@veragya.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(212, 165, 116, 0.2)" }}
                  >
                    <MapPin className="h-3.5 w-3.5" style={{ color: "#D4A574" }} />
                  </div>
                  <span className="mt-1">New Delhi, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: FOOTER_BG_DARK }}
      >
        <div className="mx-auto w-full px-5 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Veragya. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="text-xs text-white/50 transition-colors hover:text-white">
                Terms
              </a>
              <a
                href="/privacy"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
