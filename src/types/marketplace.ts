
export interface FilterState {
  category: string;
  searchQuery: string;
  priceRange: [number, number];
  sortBy: string;
  certifications: {
    organic: boolean;
    nonGmo: boolean;
    freeRange: boolean;
  };
  sustainabilityScore: number;
}
