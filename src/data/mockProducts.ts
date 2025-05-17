import { Product } from "@/types/product";

// Mock products for demo purposes
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Apples",
    description: "Fresh, organic apples grown using sustainable farming practices. Perfect for eating fresh or for cooking.",
    price: 299, // KES 299 per kg
    category: "Fruits",
    producerId: "producer-1",
    images: ["https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=1170&auto=format&fit=crop"],
    stock: 50,
    unit: "kg",
    certifications: ["Organic", "Non-GMO"],
    harvestDate: new Date("2025-05-01"),
    expiryDate: new Date("2025-05-15"),
    sustainabilityScore: 92,
    reviews: [
      {
        id: "review-1",
        userId: "user-1",
        userName: "Jane Smith",
        rating: 5,
        comment: "These apples are amazing! So fresh and delicious.",
        createdAt: new Date("2025-05-05"),
      },
      {
        id: "review-2",
        userId: "user-2",
        userName: "John Doe",
        rating: 4,
        comment: "Great quality apples, will buy again.",
        createdAt: new Date("2025-05-03"),
      },
    ],
    rating: 4.5,
    tags: ["organic", "fruit", "local"],
    featured: true,
    createdAt: new Date("2025-04-28"),
    updatedAt: new Date("2025-04-28"),
    nutritionalInfo: {
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      vitamins: {
        vitaminC: 14,
        vitaminA: 2
      }
    }
  },
  {
    id: "2",
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from happy chickens. Rich in flavor and perfect for all your cooking needs.",
    price: 450, // KES 450 per dozen
    category: "Dairy & Eggs",
    producerId: "producer-2",
    images: ["https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1169&auto=format&fit=crop"],
    stock: 24,
    unit: "dozen",
    certifications: ["Free-Range", "Hormone-Free"],
    harvestDate: new Date("2025-05-10"),
    expiryDate: new Date("2025-05-25"),
    sustainabilityScore: 85,
    reviews: [
      {
        id: "review-3",
        userId: "user-3",
        userName: "Michael Johnson",
        rating: 5,
        comment: "Best eggs I've ever had!",
        createdAt: new Date("2025-05-11"),
      },
    ],
    rating: 5,
    tags: ["eggs", "free-range", "protein"],
    featured: false,
    createdAt: new Date("2025-05-10"),
    updatedAt: new Date("2025-05-10"),
    nutritionalInfo: {
      calories: 70,
      protein: 6,
      carbs: 0.6,
      fat: 5,
      vitamins: {
        vitaminD: 10,
        vitaminB12: 15
      }
    }
  },
  {
    id: "3",
    name: "Organic Spinach",
    description: "Nutrient-rich organic spinach, perfect for salads or cooking. Locally grown and harvested at peak freshness.",
    price: 325,
    category: "Vegetables",
    producerId: "producer-3",
    images: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1160&auto=format&fit=crop"],
    stock: 30,
    unit: "bunch",
    certifications: ["Organic", "Pesticide-Free"],
    harvestDate: new Date("2025-05-12"),
    expiryDate: new Date("2025-05-19"),
    sustainabilityScore: 90,
    reviews: [],
    rating: 0,
    tags: ["organic", "leafy greens", "vegetables"],
    featured: false,
    createdAt: new Date("2025-05-12"),
    updatedAt: new Date("2025-05-12"),
  },
  {
    id: "4",
    name: "Raw Honey",
    description: "Pure, unfiltered honey collected from local wildflower fields. Rich in flavor and natural goodness.",
    price: 899,
    category: "Specialty",
    producerId: "producer-4",
    images: ["https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=987&auto=format&fit=crop"],
    stock: 15,
    unit: "jar",
    certifications: ["Raw", "Unfiltered"],
    harvestDate: new Date("2025-04-15"),
    expiryDate: new Date("2026-04-15"),
    sustainabilityScore: 95,
    reviews: [
      {
        id: "review-4",
        userId: "user-4",
        userName: "Sarah Williams",
        rating: 5,
        comment: "This honey is incredible! So much flavor.",
        createdAt: new Date("2025-05-02"),
      },
      {
        id: "review-5",
        userId: "user-5",
        userName: "Robert Brown",
        rating: 5,
        comment: "Best honey I've ever tasted!",
        createdAt: new Date("2025-05-07"),
      },
    ],
    rating: 5,
    tags: ["honey", "raw", "natural"],
    featured: true,
    createdAt: new Date("2025-04-20"),
    updatedAt: new Date("2025-04-20"),
  },
  {
    id: "5",
    name: "Grass-Fed Ground Beef",
    description: "Ethically raised, grass-fed beef from local farms. Higher in nutrients and better for the environment.",
    price: 799,
    category: "Meat",
    producerId: "producer-5",
    images: ["https://images.unsplash.com/photo-1551446591-142875a901a1?q=80&w=1160&auto=format&fit=crop"],
    stock: 10,
    unit: "lb",
    certifications: ["Grass-Fed", "Hormone-Free"],
    harvestDate: new Date("2025-05-08"),
    expiryDate: new Date("2025-05-14"),
    sustainabilityScore: 82,
    reviews: [
      {
        id: "review-6",
        userId: "user-6",
        userName: "David Miller",
        rating: 4,
        comment: "Great quality beef, very lean.",
        createdAt: new Date("2025-05-10"),
      },
    ],
    rating: 4,
    tags: ["beef", "grass-fed", "protein"],
    featured: false,
    createdAt: new Date("2025-05-08"),
    updatedAt: new Date("2025-05-08"),
  },
  {
    id: "6",
    name: "Artisanal Goat Cheese",
    description: "Handcrafted goat cheese made with traditional methods. Creamy with a mild tanginess.",
    price: 650,
    category: "Dairy & Eggs",
    producerId: "producer-6",
    images: ["https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1173&auto=format&fit=crop"],
    stock: 8,
    unit: "package",
    certifications: ["Artisanal", "No Additives"],
    harvestDate: new Date("2025-05-07"),
    expiryDate: new Date("2025-05-21"),
    sustainabilityScore: 88,
    reviews: [],
    rating: 0,
    tags: ["cheese", "goat", "artisanal"],
    featured: true,
    createdAt: new Date("2025-05-07"),
    updatedAt: new Date("2025-05-07"),
  },
  {
    id: "7",
    name: "Fresh Sukuma Wiki",
    description: "Locally grown leafy greens, rich in nutrients and perfect for daily meals.",
    price: 40, // KES 40 per bunch
    category: "Vegetables",
    producerId: "producer-7",
    images: ["https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1384&auto=format&fit=crop"],
    stock: 100,
    unit: "bunch",
    certifications: ["Pesticide-Free", "Local"],
    harvestDate: new Date("2025-05-16"),
    expiryDate: new Date("2025-05-20"),
    sustainabilityScore: 95,
    reviews: [],
    rating: 0,
    tags: ["vegetables", "local", "staple"],
    featured: true,
    createdAt: new Date("2025-05-16"),
    updatedAt: new Date("2025-05-16"),
    nutritionalInfo: {
      calories: 28,
      protein: 1.9,
      carbs: 5.8,
      fat: 0.4,
      vitamins: {
        vitaminA: 50,
        vitaminC: 35
      }
    }
  },
  {
    id: "8",
    name: "Kenyan Avocados",
    description: "Creamy, ripe avocados grown in the highlands of Kenya. Perfect for guacamole or eating fresh.",
    price: 120, // KES 120 per kg
    category: "Fruits",
    producerId: "producer-8",
    images: ["https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=1615&auto=format&fit=crop"],
    stock: 45,
    unit: "kg",
    certifications: ["Organic"],
    harvestDate: new Date("2025-05-12"),
    expiryDate: new Date("2025-05-20"),
    sustainabilityScore: 88,
    reviews: [
      {
        id: "review-7",
        userId: "user-6",
        userName: "Grace Wambui",
        rating: 5,
        comment: "Best avocados in the market!",
        createdAt: new Date("2025-05-15"),
      }
    ],
    rating: 5,
    tags: ["fruit", "healthy", "local"],
    featured: true,
    createdAt: new Date("2025-05-12"),
    updatedAt: new Date("2025-05-12"),
    nutritionalInfo: {
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 14.7,
      vitamins: {
        vitaminE: 10,
        potassium: 14
      }
    }
  },
  {
    id: "9",
    name: "Maziwa Mala",
    description: "Traditional fermented milk rich in probiotics. Great for digestion and overall health.",
    price: 90, // KES 90 per liter
    category: "Dairy & Eggs",
    producerId: "producer-2",
    images: ["https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1160&auto=format&fit=crop"],
    stock: 30,
    unit: "liter",
    certifications: ["Traditional", "No Additives"],
    harvestDate: new Date("2025-05-17"),
    expiryDate: new Date("2025-05-24"),
    sustainabilityScore: 90,
    reviews: [],
    rating: 0,
    tags: ["dairy", "probiotic", "traditional"],
    featured: false,
    createdAt: new Date("2025-05-17"),
    updatedAt: new Date("2025-05-17"),
    nutritionalInfo: {
      calories: 110,
      protein: 8,
      carbs: 12,
      fat: 2.5,
      vitamins: {
        calcium: 30,
        vitaminD: 25
      }
    }
  },
  {
    id: "10",
    name: "Fresh Tilapia",
    description: "Farm-raised tilapia from Lake Victoria. Clean, fresh, and ready for cooking.",
    price: 350, // KES 350 per kg
    category: "Specialty",
    producerId: "producer-10",
    images: ["https://images.unsplash.com/photo-1598646506899-ac6be1000c2f?q=80&w=1374&auto=format&fit=crop"],
    stock: 25,
    unit: "kg",
    certifications: ["Fresh", "Sustainable Fishing"],
    harvestDate: new Date("2025-05-17"),
    expiryDate: new Date("2025-05-19"),
    sustainabilityScore: 82,
    reviews: [],
    rating: 0,
    tags: ["fish", "protein", "fresh"],
    featured: false,
    createdAt: new Date("2025-05-17"),
    updatedAt: new Date("2025-05-17"),
    nutritionalInfo: {
      calories: 128,
      protein: 26,
      carbs: 0,
      fat: 2.7,
      vitamins: {
        omega3: 15,
        vitaminB12: 20
      }
    }
  },
  {
    id: "11",
    name: "Unga wa Wimbi",
    description: "High-quality millet flour for traditional porridge. Packed with nutrients and flavor.",
    price: 180, // KES 180 per kg
    category: "Grains",
    producerId: "producer-4",
    images: ["https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&w=1470&auto=format&fit=crop"],
    stock: 60,
    unit: "kg",
    certifications: ["Whole Grain", "No Additives"],
    harvestDate: new Date("2025-04-20"),
    expiryDate: new Date("2025-08-20"),
    sustainabilityScore: 95,
    reviews: [],
    rating: 0,
    tags: ["grains", "traditional", "nutritious"],
    featured: false,
    createdAt: new Date("2025-04-20"),
    updatedAt: new Date("2025-04-20"),
    nutritionalInfo: {
      calories: 378,
      protein: 11,
      carbs: 73,
      fat: 4.2,
      vitamins: {
        iron: 20,
        magnesium: 25
      }
    }
  },
  {
    id: "12",
    name: "Red Onions",
    description: "Fresh red onions sourced directly from farmers in Kitale. A staple in Kenyan cuisine.",
    price: 140, // KES 140 per kg
    category: "Vegetables",
    producerId: "producer-3",
    images: ["https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=1470&auto=format&fit=crop"],
    stock: 80,
    unit: "kg",
    certifications: ["Locally Grown"],
    harvestDate: new Date("2025-05-10"),
    expiryDate: new Date("2025-06-10"),
    sustainabilityScore: 88,
    reviews: [],
    rating: 0,
    tags: ["vegetables", "cooking", "staple"],
    featured: false,
    createdAt: new Date("2025-05-10"),
    updatedAt: new Date("2025-05-10"),
    nutritionalInfo: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fat: 0.1,
      vitamins: {
        vitaminC: 7,
        folate: 5
      }
    }
  }
];

export const categories = [
  "All Categories", 
  "Fruits", 
  "Vegetables", 
  "Meat", 
  "Dairy & Eggs", 
  "Grains", 
  "Specialty"
];
