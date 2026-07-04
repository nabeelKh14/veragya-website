"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useCart } from "@/lib/CartContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { itemCount } = useCart();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      description: "Return to homepage",
    },
    {
      name: "Services",
      href: "/services",
      description: "Explore our CLO 3D design services",
    },
    {
      name: "Portfolio",
      href: "/#portfolio",
      description: "View our recent fashion design projects",
    },
    {
      name: "About",
      href: "/about",
      description: "Learn more about Veragya",
    },
    {
      name: "Blog",
      href: "/blog",
      description: "Fashion design insights and CLO 3D tips",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(-1);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % navLinks.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + navLinks.length) % navLinks.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(navLinks.length - 1);
        break;
      case "Escape":
        closeMenu();
        break;
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLAnchorElement;
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const headerEl = navRef.current;
    if (!headerEl) return;

    let isHidden = false;
    let headerHeight = headerEl.offsetHeight;
    gsap.set(headerEl, { y: 0, willChange: "transform" });

    const onResize = () => {
      headerHeight = headerEl.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll();
        if (isMenuOpen) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (scrolled <= 0) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (self.direction === 1) {
          if (!isHidden) {
            isHidden = true;
            gsap.to(headerEl, {
              y: -headerHeight,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else if (self.direction === -1) {
          if (isHidden) {
            isHidden = false;
            gsap.to(headerEl, { y: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      gsap.set(headerEl, { y: 0 });
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        ref={navRef}
        className="bg-background fixed inset-x-0 top-2 z-40 mx-auto w-full max-w-6xl rounded-lg px-5"
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between py-4"
            role="navigation"
            aria-label="Primary navigation"
          >
            <div className="flex items-center">
              <Link
                href="/"
                className="focus:ring-ring flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label="Veragya - Return to homepage"
                aria-describedby="logo-description"
              >
                <span className="text-xl font-bold tracking-tight">
                  Veragya
                </span>
                <span id="logo-description" className="sr-only">
                  Veragya — CLO 3D Fashion Design Studio
                </span>
              </Link>
            </div>

            <ul
              className="hidden items-center space-x-6 lg:flex"
              role="menubar"
              aria-label="Main navigation menu"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

                return (
                  <li key={link.name} role="none">
                    <Link
                      href={link.href}
                      className={`text-text-heading hover:text-foreground focus:ring-ring rounded-md px-2 py-1 !text-sm font-medium transition-colors focus:ring-0 focus:outline-none ${
                        isActive ? "text-foreground font-normal" : "text-foreground/70"
                      }`}
                      role="menuitem"
                      aria-describedby={`nav-description-${index}`}
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(-1)}
                    >
                      {link.name}
                      <span id={`nav-description-${index}`} className="sr-only">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-accent focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Link>
              <Button
                size={"sm"}
                className="text-sm"
                aria-label="Browse our services"
                asChild
              >
                <a href="/services">Browse Services</a>
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md outline-none focus:ring-0 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-haspopup="true"
              >
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3 rotate-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-5 rotate-0"
                  }`}
                />
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div
              className="lg:hidden"
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="">
                <div className="space-y-2 px-2 py-4">
                  <ul className="space-y-2" role="menu" aria-label="Mobile navigation options">
                    {navLinks.map((link, index) => {
                      const isActive =
                        pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

                      return (
                        <li key={link.name} role="none">
                          <Link
                            href={link.href}
                            className={`hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
                              activeIndex === index || isActive
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/70"
                            }`}
                            role="menuitem"
                            tabIndex={activeIndex === index ? 0 : -1}
                            aria-describedby={`mobile-nav-description-${index}`}
                            onClick={closeMenu}
                            onKeyDown={(e) => handleKeyDown(e)}
                          >
                            {link.name}
                            <span id={`mobile-nav-description-${index}`} className="sr-only">
                              {link.description}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border-t pt-4 space-y-3">
                    <Link
                      href="/cart"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none"
                      onClick={closeMenu}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Cart</span>
                      {itemCount > 0 && (
                        <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
                          {itemCount > 99 ? "99+" : itemCount}
                        </span>
                      )}
                    </Link>
                    <Button
                      className="w-full"
                      aria-label="Browse our services"
                      onClick={closeMenu}
                      asChild
                    >
                      <a href="/services">Browse Services</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
