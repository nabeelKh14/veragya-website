"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

const services = [
  { name: "CLO 3D Design", href: "/services" },
  { name: "3D Garment Animation", href: "/services" },
  { name: "2D Pattern Development", href: "/services" },
  { name: "Interior Design", href: "/services" },
  { name: "Video Editing", href: "/services" },
  { name: "Wedding Invitations", href: "/services" },
];

function Footer() {
  return (
    <footer
      className="mt-10 bg-neutral-950 text-neutral-300"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Collaboration CTA */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Get in touch
          </p>
          <h2
            className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
          >
            Let's Collaborate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Crafting refined visuals for models and fashion brands worldwide.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <a
            href="tel:+919999999999"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-800 p-6 text-center transition-colors hover:border-neutral-600"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors group-hover:bg-neutral-700">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Phone</p>
              <p className="mt-1 text-sm font-medium text-white">+91 99999 99999</p>
            </div>
          </a>

          <a
            href="mailto:hello@veragya.com"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-800 p-6 text-center transition-colors hover:border-neutral-600"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors group-hover:bg-neutral-700">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Email</p>
              <p className="mt-1 text-sm font-medium text-white">hello@veragya.com</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-800 p-6 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Location</p>
              <p className="mt-1 text-sm font-medium text-white">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo */}
            <a
              href="/"
              className="text-lg font-bold tracking-tight text-white"
              itemProp="name"
              style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
            >
              Veragya
            </a>

            {/* Links */}
            <nav
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-neutral-500 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Services */}
            <nav
              className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:flex"
              aria-label="Services navigation"
            >
              {services.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-neutral-500 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Veragya. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/terms"
                className="text-xs text-neutral-500 transition-colors hover:text-white"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="text-xs text-neutral-500 transition-colors hover:text-white"
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
