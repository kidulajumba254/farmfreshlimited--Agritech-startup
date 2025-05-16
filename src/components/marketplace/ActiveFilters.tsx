
import React from "react";
import { Badge } from "@/components/ui/badge";
import { FilterState } from "@/types/marketplace";

interface ActiveFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, setFilters }) => {
  if (
    filters.category === "All Categories" &&
    filters.priceRange[0] === 0 &&
    filters.priceRange[1] === 20 &&
    !filters.certifications.organic &&
    !filters.certifications.nonGmo &&
    !filters.certifications.freeRange &&
    filters.sustainabilityScore === 0
  ) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {filters.category !== "All Categories" && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          {filters.category}
          <button
            onClick={() => setFilters({ ...filters, category: "All Categories" })}
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
      {(filters.priceRange[0] > 0 || filters.priceRange[1] < 20) && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          KES {filters.priceRange[0]} - KES {filters.priceRange[1]}
          <button
            onClick={() => setFilters({ ...filters, priceRange: [0, 20] })}
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
      {filters.certifications.organic && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Organic
          <button
            onClick={() =>
              setFilters({
                ...filters,
                certifications: { ...filters.certifications, organic: false },
              })
            }
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
      {filters.certifications.nonGmo && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Non-GMO
          <button
            onClick={() =>
              setFilters({
                ...filters,
                certifications: { ...filters.certifications, nonGmo: false },
              })
            }
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
      {filters.certifications.freeRange && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Free-Range
          <button
            onClick={() =>
              setFilters({
                ...filters,
                certifications: { ...filters.certifications, freeRange: false },
              })
            }
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
      {filters.sustainabilityScore > 0 && (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Sustainability: {filters.sustainabilityScore}+
          <button
            onClick={() => setFilters({ ...filters, sustainabilityScore: 0 })}
            className="ml-1 focus:outline-none"
          >
            &times;
          </button>
        </Badge>
      )}
    </div>
  );
};

export default ActiveFilters;
