"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/custom/ServiceCard";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { services, serviceCategories, type ServiceCategory } from "@/data/services";
import { Search, X, Sparkles } from "lucide-react";
import type { Metadata } from "next";

// Page metadata would normally be exported from a server component
// For client components, we use a layout.tsx in the services folder
// or define metadata in a separate server component wrapper

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;

      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.category.toLowerCase().includes(searchLower) ||
        service.features.some((feature) =>
          feature.toLowerCase().includes(searchLower)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All";

  return (
    <div className="min-h-screen w-full">
      <main id="main-content" role="main">
        <div className="mx-auto max-w-6xl px-5">
          {/* Hero Section */}
          <section
            className="space-y-4 pt-[116px] pb-[48px] text-center md:pt-[128px] md:pb-[64px] lg:pt-[140px] lg:pb-[80px]"
            role="banner"
            aria-label="Services introduction"
          >
            <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 mx-auto">
              <p className="text-tag align-middle text-sm">
                <span className="mt-1.5 mr-2 inline-block self-center" aria-hidden="true">
                  ✨
                </span>
                Productized Services
              </p>
            </div>

            <h1 className="text-h1 text-text-heading !text-center font-semibold md:mx-auto md:w-2/3">
              Our Services
            </h1>

            <p className="text-caption text-label md:mx-auto md:w-2/3">
              Professional fashion design services tailored for modern brands. From CLO 3D renders to complete brand identity packages — transparent pricing, clear deliverables, and fast turnaround times.
            </p>
          </section>

          {/* Filters Section */}
          <section
            className="mb-8 space-y-4"
            role="search"
            aria-label="Filter services"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11"
                aria-label="Search services"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Service category filters">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                role="tab"
                aria-selected={selectedCategory === "All"}
                className="transition-all"
              >
                All Services
              </Button>
              {serviceCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Active Filters & Results Count */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {hasActiveFilters && (
                <>
                  <span className="text-muted-foreground">
                    {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} found
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <X className="h-3 w-3" />
                    Clear filters
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Services Grid */}
          <section
            className="mb-16"
            role="region"
            aria-labelledby="services-grid-heading"
          >
            <h2 id="services-grid-heading" className="sr-only">
              Available Services
            </h2>

            {filteredServices.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-heading">
                    No services found
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We couldn't find any services matching your criteria. Try adjusting your search or filters.
                  </p>
                </div>
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section
            className="mb-16 rounded-2xl bg-muted/50 p-8 md:p-12 text-center"
            role="region"
            aria-labelledby="custom-service-cta"
          >
            <h2 id="custom-service-cta" className="text-h3 text-heading font-semibold mb-3">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Can't find exactly what you're looking for? We offer custom CLO 3D projects tailored to your specific requirements. Let's discuss your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">View Case Studies</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
