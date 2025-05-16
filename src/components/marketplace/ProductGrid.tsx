
import React from "react";
import ProductCard from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  resetFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, resetFilters }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">No products found matching your filters.</p>
        <Button
          className="mt-4 bg-green-600 hover:bg-green-700"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
