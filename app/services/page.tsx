"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/CartContext";
import {
  services,
  serviceCategories,
  type ServiceCategory,
  type Service,
} from "@/data/services";
import {
  ChevronRight,
  ShoppingCart,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const ITEMS_PER_PAGE = 9;

function parsePrice(priceStr: string): number {
  return Number.parseInt(priceStr.replace(/[₹,]/g, ""), 10) || 0;
}

const priceRanges = [
  { label: "Under ₹5,000", min: 0, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "₹10,000 - ₹25,000", min: 10000, max: 25000 },
  { label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
  { label: "Above ₹50,000", min: 50000, max: Number.POSITIVE_INFINITY },
];

type SortOption = "popular" | "price-low" | "price-high";

function generateDiscount(service: Service): number {
  const hash = service.id
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (hash % 30) + 10;
}

function generateOriginalPrice(price: number, discount: number): number {
  return Math.round(price / (1 - discount / 100));
}

export default function ServicesPage() {
  const [selectedCategories, setSelectedCategories] = useState<
    Set<ServiceCategory>
  >(new Set());
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(
    null,
  );
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { addToCart, items } = useCart();

  const filteredServices = useMemo(() => {
    let result = [...services];

    if (selectedCategories.size > 0) {
      result = result.filter((s) => selectedCategories.has(s.category));
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((s) => {
        const price = parsePrice(s.price);
        return price >= range.min && price < range.max;
      });
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-high":
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "popular":
        result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const toggleCategory = (category: ServiceCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories(new Set());
    setSelectedPriceRange(null);
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategories.size > 0 || selectedPriceRange !== null;

  const isInCart = (id: string) => items.some((item) => item.id === id);

  const handleAddToCart = (service: Service) => {
    addToCart({
      id: service.id,
      title: service.title,
      price: parsePrice(service.price),
      image: service.image,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main id="main-content">
        <div className="mx-auto max-w-7xl px-4 pt-[100px] pb-8 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 text-sm">
            <ol className="flex items-center gap-1.5 text-gray-500">
              <li>
                <a href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li>
                <span className="font-medium text-gray-900">Services</span>
              </li>
            </ol>
          </nav>

          <div className="flex gap-6">
            {/* Left Sidebar Filters — Desktop */}
            <aside className="hidden lg:block w-60 shrink-0">
              <div className="sticky top-[100px]">
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </h2>
                    {hasActiveFilters && (
                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-xs font-medium text-[#c2185b] hover:underline"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      Category
                    </h3>
                    <div className="space-y-2.5">
                      {serviceCategories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.has(category)}
                            onChange={() => toggleCategory(category)}
                            className="h-4 w-4 rounded border-gray-300 text-[#c2185b] focus:ring-[#c2185b] accent-[#c2185b]"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {category}
                          </span>
                          <span className="ml-auto text-xs text-gray-400">
                            {
                              services.filter((s) => s.category === category)
                                .length
                            }
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      Price Range
                    </h3>
                    <div className="space-y-2.5">
                      {priceRanges.map((range, index) => (
                        <label
                          key={range.label}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="priceRange"
                            checked={selectedPriceRange === index}
                            onChange={() => {
                              setSelectedPriceRange(
                                selectedPriceRange === index ? null : index,
                              );
                              setCurrentPage(1);
                            }}
                            className="h-4 w-4 border-gray-300 text-[#c2185b] focus:ring-[#c2185b] accent-[#c2185b]"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3">
              <button
                type="button"
                onClick={() => setShowMobileFilters(true)}
                className="w-full flex items-center justify-center gap-2 bg-[#c2185b] text-white py-3 rounded-lg font-medium text-sm"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-1 bg-white text-[#c2185b] text-xs h-5 px-1.5">
                    {selectedCategories.size +
                      (selectedPriceRange !== null ? 1 : 0)}
                  </Badge>
                )}
              </button>
            </div>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <button
                  type="button"
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setShowMobileFilters(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setShowMobileFilters(false);
                  }}
                  aria-label="Close filters"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-base font-semibold text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        onClick={() => setShowMobileFilters(false)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Mobile Category Filter */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Category
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {serviceCategories.map((category) => (
                          <button
                            type="button"
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                              selectedCategories.has(category)
                                ? "bg-[#c2185b] text-white border-[#c2185b]"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Price Range */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Price Range
                      </h3>
                      <div className="space-y-2.5">
                        {priceRanges.map((range, index) => (
                          <label
                            key={range.label}
                            className="flex items-center gap-2.5 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="mobilePriceRange"
                              checked={selectedPriceRange === index}
                              onChange={() => {
                                setSelectedPriceRange(
                                  selectedPriceRange === index ? null : index,
                                );
                                setCurrentPage(1);
                              }}
                              className="h-4 w-4 border-gray-300 text-[#c2185b] accent-[#c2185b]"
                            />
                            <span className="text-sm text-gray-700">
                              {range.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Button>
                      <Button
                        className="flex-1 bg-[#c2185b] hover:bg-[#ad144f]"
                        onClick={() => setShowMobileFilters(false)}
                      >
                        Show {filteredServices.length} Results
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 mb-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {paginatedServices.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredServices.length}
                  </span>{" "}
                  services
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 hidden sm:inline">
                    Sort by:
                  </span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value as SortOption);
                        setCurrentPage(1);
                      }}
                      className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2185b] focus:border-transparent cursor-pointer"
                    >
                      <option value="popular">Popular</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filters Tags */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from(selectedCategories).map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center gap-1 bg-pink-50 text-[#c2185b] text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {cat}
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {selectedPriceRange !== null && (
                    <span className="inline-flex items-center gap-1 bg-pink-50 text-[#c2185b] text-xs font-medium px-2.5 py-1 rounded-full">
                      {priceRanges[selectedPriceRange].label}
                      <button
                        type="button"
                        onClick={() => setSelectedPriceRange(null)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Product Grid */}
              {paginatedServices.length > 0 ? (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {paginatedServices.map((service) => {
                    const price = parsePrice(service.price);
                    const discount = generateDiscount(service);
                    const originalPrice = generateOriginalPrice(
                      price,
                      discount,
                    );
                    const inCart = isInCart(service.id);

                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
                      >
                        {/* Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Badges */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {service.popular && (
                              <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                                Popular
                              </span>
                            )}
                            <span className="bg-[#c2185b] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                              {discount}% OFF
                            </span>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-3.5">
                          <p className="text-[11px] font-medium text-[#c2185b] uppercase tracking-wide mb-1">
                            {service.category}
                          </p>
                          <h3 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug line-clamp-2 min-h-[2.5rem]">
                            {service.title}
                          </h3>

                          {/* Price */}
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-base font-bold text-gray-900">
                              ₹{price.toLocaleString("en-IN")}
                            </span>
                            <span className="text-xs text-gray-400 line-through">
                              ₹{originalPrice.toLocaleString("en-IN")}
                            </span>
                            <span className="text-xs font-semibold text-green-600">
                              {discount}% off
                            </span>
                          </div>

                          {/* Delivery */}
                          <p className="text-xs text-gray-500 mb-3">
                            Delivery: {service.deliveryTime}
                          </p>

                          {/* Add to Cart */}
                          <button
                            type="button"
                            onClick={() => handleAddToCart(service)}
                            disabled={inCart}
                            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors ${
                              inCart
                                ? "bg-green-50 text-green-700 border border-green-200 cursor-default"
                                : "bg-[#c2185b] text-white hover:bg-[#ad144f]"
                            }`}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            {inCart ? "Added to Cart" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 text-center py-16 px-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <SlidersHorizontal className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No services found
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 max-w-sm mx-auto">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                    className="text-sm"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        type="button"
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                          currentPage === page
                            ? "bg-[#c2185b] text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
