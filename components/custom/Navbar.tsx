"use client";

import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useCart();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
      closeMenu();
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMenuOpen) closeMenu();
        if (isSearchOpen) setIsSearchOpen(false);
      }
    };

    if (isMenuOpen || isSearchOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isSearchOpen, closeMenu]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50 w-full"
        aria-label="Main navigation"
      >
        {/* Floating glass pill */}
        <div
          className={`glass-nav mx-auto mt-4 flex h-14 w-[min(92%,900px)] items-center gap-3 rounded-full px-5 transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "shadow-[0_8px_32px_rgba(0,0,0,0.10)] ring-1 ring-white/20"
              : "shadow-none ring-0"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 font-[var(--font-heading)] text-xl font-semibold italic tracking-tight text-neutral-900 transition-opacity hover:opacity-70 focus:outline-none"
            style={{ fontFamily: "var(--font-heading)" }}
            aria-label="Veragya - Return to homepage"
          >
            Veragya
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-neutral-900/10 text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-900/5 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search toggle */}
          <button
            type="button"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setIsMenuOpen(false);
            }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-900/8 focus:outline-none"
            aria-label="Toggle search"
          >
            <Search className="h-4.5 w-4.5 text-neutral-700" />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-900/8 focus:outline-none"
            aria-label={`Shopping cart with ${itemCount} items`}
          >
            <ShoppingCart className="h-4.5 w-4.5 text-neutral-700" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsSearchOpen(false);
            }}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-900/8 focus:outline-none md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 origin-center rounded-full bg-neutral-800 transition-all duration-300 ${
                  isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 origin-center rounded-full bg-neutral-800 transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Inline search bar */}
        {isSearchOpen && (
          <div className="mx-auto mt-2 w-[min(92%,900px)]">
            <form onSubmit={handleSearch} className="glass-nav rounded-full px-4 py-2 ring-1 ring-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 w-full rounded-full bg-transparent pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
                  aria-label="Search services"
                />
              </div>
            </form>
          </div>
        )}

        {/* Mobile full-screen menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col backdrop-blur-3xl bg-white/90 md:hidden"
            id="mobile-menu"
            aria-label="Mobile navigation menu"
          >
            {/* Close button */}
            <div className="flex h-14 items-center justify-end px-6">
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-900/8 focus:outline-none"
                aria-label="Close menu"
              >
                <div className="relative h-5 w-5">
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 rounded-full bg-neutral-800" />
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 -rotate-45 rounded-full bg-neutral-800" />
                </div>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-full rounded-2xl px-6 py-4 text-center text-3xl font-semibold text-neutral-900 transition-colors hover:bg-neutral-900/5"
                  style={{
                    animation: `fadeInUp 400ms ${i * 100}ms both cubic-bezier(0.32, 0.72, 0, 1)`,
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                  }}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
