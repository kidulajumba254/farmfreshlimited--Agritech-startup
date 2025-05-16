
import React from "react";
import { mockProducts, categories } from "@/data/mockProducts";
import { useProductFilters } from "@/hooks/useProductFilters";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import ProductGrid from "@/components/marketplace/ProductGrid";
import SearchBar from "@/components/marketplace/SearchBar";
import ActiveFilters from "@/components/marketplace/ActiveFilters";

const Marketplace = () => {
  const { filters, setFilters, filteredProducts, resetFilters } = useProductFilters(mockProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">Farm Fresh Marketplace</h1>
        <p className="text-gray-600 mt-2">
          Browse our selection of farm-fresh products direct from local producers
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <MarketplaceFilters 
          filters={filters}
          setFilters={setFilters}
          categories={categories}
        />

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <SearchBar 
              filters={filters}
              setFilters={setFilters}
              productsCount={filteredProducts.length}
            />
            
            {/* Active filters */}
            <ActiveFilters filters={filters} setFilters={setFilters} />
          </div>

          <ProductGrid 
            products={filteredProducts} 
            resetFilters={resetFilters} 
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
