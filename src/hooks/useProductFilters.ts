
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { FilterState } from "@/types/marketplace";

const initialFilters: FilterState = {
  category: "All Categories",
  searchQuery: "",
  priceRange: [0, 20] as [number, number],
  sortBy: "featured",
  certifications: {
    organic: false,
    nonGmo: false,
    freeRange: false,
  },
  sustainabilityScore: 0,
};

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (filters.category !== "All Categories") {
      result = result.filter((product) => product.category === filters.category);
    }
    
    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by price
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] * 100 && 
        product.price <= filters.priceRange[1] * 100
    );
    
    // Filter by certifications
    if (filters.certifications.organic) {
      result = result.filter((product) =>
        product.certifications?.some((cert) => cert === "Organic")
      );
    }
    
    if (filters.certifications.nonGmo) {
      result = result.filter((product) =>
        product.certifications?.some((cert) => cert === "Non-GMO")
      );
    }
    
    if (filters.certifications.freeRange) {
      result = result.filter((product) =>
        product.certifications?.some((cert) => cert === "Free-Range")
      );
    }
    
    // Filter by sustainability score
    if (filters.sustainabilityScore > 0) {
      result = result.filter(
        (product) => (product.sustainabilityScore || 0) >= filters.sustainabilityScore
      );
    }
    
    // Sort products
    switch (filters.sortBy) {
      case "featured":
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [filters, products]);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return { filters, setFilters, filteredProducts, resetFilters };
};
