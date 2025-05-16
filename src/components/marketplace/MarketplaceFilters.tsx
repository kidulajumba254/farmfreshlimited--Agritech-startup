
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterState } from "@/types/marketplace";

interface MarketplaceFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: string[];
}

const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({ 
  filters, 
  setFilters, 
  categories 
}) => {
  const resetFilters = () => {
    setFilters({
      category: "All Categories",
      searchQuery: "",
      priceRange: [0, 20],
      sortBy: "featured",
      certifications: {
        organic: false,
        nonGmo: false,
        freeRange: false,
      },
      sustainabilityScore: 0,
    });
  };

  return (
    <div className="md:w-1/4 bg-white p-4 rounded-lg shadow-sm border">
      <h2 className="text-lg font-medium mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Category</label>
          <Select
            value={filters.category}
            onValueChange={(value) =>
              setFilters({ ...filters, category: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Price Range</label>
          <div className="space-y-2">
            <Slider
              defaultValue={[0, 20]}
              max={20}
              step={0.5}
              value={filters.priceRange}
              onValueChange={(value) =>
                setFilters({ ...filters, priceRange: value as [number, number] })
              }
            />
            <div className="flex justify-between text-sm">
              <span>KES {filters.priceRange[0]}</span>
              <span>KES {filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Sort By</label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) =>
              setFilters({ ...filters, sortBy: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Certifications</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="organic"
                checked={filters.certifications.organic}
                onCheckedChange={(checked) =>
                  setFilters({
                    ...filters,
                    certifications: {
                      ...filters.certifications,
                      organic: checked === true,
                    },
                  })
                }
              />
              <Label htmlFor="organic" className="ml-2">
                Organic
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="non-gmo"
                checked={filters.certifications.nonGmo}
                onCheckedChange={(checked) =>
                  setFilters({
                    ...filters,
                    certifications: {
                      ...filters.certifications,
                      nonGmo: checked === true,
                    },
                  })
                }
              />
              <Label htmlFor="non-gmo" className="ml-2">
                Non-GMO
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="free-range"
                checked={filters.certifications.freeRange}
                onCheckedChange={(checked) =>
                  setFilters({
                    ...filters,
                    certifications: {
                      ...filters.certifications,
                      freeRange: checked === true,
                    },
                  })
                }
              />
              <Label htmlFor="free-range" className="ml-2">
                Free-Range
              </Label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">
            Minimum Sustainability Score
          </label>
          <div className="space-y-2">
            <Slider
              defaultValue={[0]}
              max={100}
              step={5}
              value={[filters.sustainabilityScore]}
              onValueChange={(value) =>
                setFilters({ ...filters, sustainabilityScore: value[0] })
              }
            />
            <div className="flex justify-between text-sm">
              <span>{filters.sustainabilityScore}</span>
              <span>100</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="outline"
          onClick={resetFilters}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default MarketplaceFilters;
