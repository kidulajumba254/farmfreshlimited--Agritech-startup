
import React from "react";
import { Input } from "@/components/ui/input";
import { FilterState } from "@/types/marketplace";

interface SearchBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  productsCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, setFilters, productsCount }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-grow">
        <Input
          placeholder="Search products..."
          value={filters.searchQuery}
          onChange={(e) =>
            setFilters({ ...filters, searchQuery: e.target.value })
          }
          className="max-w-md"
        />
      </div>
      <div className="text-sm text-gray-500">
        {productsCount} products found
      </div>
    </div>
  );
};

export default SearchBar;
