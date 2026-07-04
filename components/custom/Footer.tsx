"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const resourceLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "About", href: "about" },
    { name: "Blog", href: "blog" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/veragya" },
    { name: "LinkedIn", href: "https://linkedin.com/company/veragya" },
    { name: "Behance", href: "https://behance.net/veragya" },
  ];

  return (
    <div className="mt-10 bg-[linear-gradient(to_bottom,_white_0%,_white_20%,_rgb(29_39_54/0.8)_22%,_black_100%)]">
      <div
        className="relative w-full bg-transparent"
        role="img"
        aria-label="Books landscape background decorative banner"
      >
        <img
          ref={imageRef}
          className="h-[36vh] w-full object-cover sm:h-[48vh] md:h-[64vh] lg:h-[70vh]"
          src="https://pbs.twimg.com/media/GxtkGthWsAAPR6-?format=jpg&name=4096x4096"
          alt="Books landscape background"
        />
        <h5
          ref={marqueeRef}
          className="pointer-events-none absolute -bottom-10 z-10 w-full select-none sm:-bottom-16 md:-bottom-24 lg:-bottom-32"
        >
                  <Marquee className="[--duration:5s]">
            {["V", "E", "R", "A", "G", "Y", "A"].map((char, idx) => (
              <span
                key={`veragya-outline-${idx}`}
                className="text-primary-foreground/80 footer-slang font-extrabold uppercase"
              >
                {char}
              </span>
            ))}
          </Marquee>
        </h5>
      </div>

      <footer
        className="relative z-10 rounded-3xl bg-transparent p-2"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="rounded-3xl bg-black/20 px-4 py-8 backdrop-blur-sm sm:px-6 md:py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
            <div className="space-y-8 md:col-span-5 lg:col-span-4">
              <div className="space-y-6">
                <div
                  className="space-y-2 text-white/80"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <p className="text-2xl font-bold" itemProp="name">
                    Veragya Studio
                  </p>
                  <p className="text-sm">Copyrights © All Rights Reserved by Veragya</p>
                  <p className="text-sm">
                    <span className="sr-only">Email:</span>
                    <a href="mailto:hello@veragya.com" itemProp="email" className="hover:underline">
                      hello@veragya.com
                    </a>
                  </p>
                  <p
                    className="text-sm"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="addressLocality">New Delhi</span>,{" "}
                    <span itemProp="addressCountry">India</span>
                  </p>
                </div>

                <div className="flex">
                  <a href="#work-with-us">
                    <Button
                      variant="outline"
                      className="border-primary-foreground/5 bg-white/5 cursor-pointer backdrop-blur-2xl text-white hover:bg-white/10 hover:text-white hover:backdrop-blur-2xl"
                      asChild
                    >
                      <a href="/#contact">
                        Start a Project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:col-span-1 md:block lg:col-span-2"></div>

            <div className="md:col-span-3 lg:col-span-3">
              <h3
                className="mb-6 text-sm font-medium tracking-wider text-gray-400 uppercase"
                id="footer-resources-heading"
              >
                Resources
              </h3>
              <nav className="space-y-4" aria-labelledby="footer-resources-heading">
                {resourceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 transition-colors duration-200 hover:text-white"
                    aria-label={`Resource: ${link.name}`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <h3
                className="mb-6 text-sm font-medium tracking-wider text-gray-400 uppercase"
                id="footer-connect-heading"
              >
                Connect
              </h3>
              <nav className="space-y-4" aria-labelledby="footer-connect-heading">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 transition-colors duration-200 hover:text-white"
                    rel="me noopener"
                    aria-label={`Follow us on ${link.name}`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
