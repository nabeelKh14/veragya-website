"use client";

import { useCart } from "@/lib/CartContext";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/#contact" },
];

// Pantone 19-119 TCX (Potting Soil) - Dark brown/burgundy
const NAVBAR_BG = "#533D32";

function VeragyaLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Veragya"
    >
      <text
        x="50%"
        y="45"
        textAnchor="middle"
        fontFamily="var(--font-heading)"
        fontStyle="italic"
        fontSize="42"
        fontWeight="600"
        fill="currentColor"
      >
        Veragya
      </text>
    </svg>
  );
}

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
    if (href.startsWith("/#")) return pathname === "/";
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

      <header className="fixed inset-x-0 top-0 z-50 w-full" aria-label="Main navigation">
        {/* Full-width Pantone 19-119 TCX bar */}
        <div className="w-full" style={{ backgroundColor: NAVBAR_BG }}>
          <div className="mx-auto flex flex-col items-center py-3 px-6 transition-all duration-500 lg:px-8">
            {/* Logo centered */}
            <Link
              href="/"
              className="shrink-0 text-white transition-opacity hover:opacity-70 focus:outline-none"
              aria-label="Veragya - Return to homepage"
            >
              <VeragyaLogo className="h-10 w-auto" />
            </Link>

            {/* Desktop nav links below logo */}
            <nav className="hidden items-center gap-1 mt-2 md:flex" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile controls row */}
            <div className="absolute top-3 right-6 flex items-center gap-2">
              {/* Search toggle */}
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setIsMenuOpen(false);
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none"
                aria-label="Toggle search"
              >
                <Search className="h-4.5 w-4.5 text-white" />
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingCart className="h-4.5 w-4.5 text-white" />
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
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none md:hidden"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
                  <span
                    className={`block h-[2px] w-5 origin-center rounded-full bg-white transition-all duration-300 ${
                      isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-5 origin-center rounded-full bg-white transition-all duration-300 ${
                      isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Inline search bar */}
        {isSearchOpen && (
          <div className="w-full" style={{ backgroundColor: NAVBAR_BG }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <form onSubmit={handleSearch} className="rounded-full px-4 py-2 bg-white/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 w-full rounded-full bg-transparent pl-10 pr-4 text-sm text-white placeholder-white/60 outline-none"
                    aria-label="Search services"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile full-screen menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: NAVBAR_BG }}
            id="mobile-menu"
            aria-label="Mobile navigation menu"
          >
            {/* Close button */}
            <div className="flex h-14 items-center justify-end px-6">
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none"
                aria-label="Close menu"
              >
                <div className="relative h-5 w-5">
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 rounded-full bg-white" />
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 -rotate-45 rounded-full bg-white" />
                </div>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-full rounded-2xl px-6 py-4 text-center text-3xl font-semibold text-white transition-colors hover:bg-white/10"
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
