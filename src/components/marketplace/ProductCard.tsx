
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    // In a real application, this would call a function to update the cart state
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative pt-[56.25%]">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="absolute top-0 h-full w-full object-cover"
        />
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-green-600">
            Featured
          </Badge>
        )}
        {product.stock <= 5 && (
          <Badge className="absolute top-2 right-2 bg-amber-500">
            Low Stock
          </Badge>
        )}
      </div>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg truncate">{product.name}</h3>
          <span className="font-medium text-green-700">
            KES {product.price.toFixed(2)}/{product.unit}
          </span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span className="truncate">{product.category}</span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
        
        <div className="mt-3 flex items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-500">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {product.sustainabilityScore !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-green-700">Sustainability</span>
              <span className="text-xs text-gray-500">{product.sustainabilityScore}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: `${product.sustainabilityScore}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link to={`/marketplace/${product.id}`}>View Details</Link>
        </Button>
        <Button 
          className="bg-green-600 hover:bg-green-700 w-full sm:w-auto flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
