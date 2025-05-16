
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  producerId: string;
  images: string[];
  stock: number;
  unit: string; // kg, piece, bundle, etc.
  certifications?: string[];
  harvestDate?: Date;
  expiryDate?: Date;
  nutritionalInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    vitamins?: Record<string, number>;
  };
  sustainabilityScore?: number; // 0-100
  reviews?: ProductReview[];
  rating?: number; // Average of review ratings
  tags: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  images?: string[];
  createdAt: Date;
}
