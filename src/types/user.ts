
export type UserRole = "producer" | "supplier" | "consumer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
  location?: string;
  description?: string;
  joinedAt: Date;
}

export interface Producer extends User {
  role: "producer";
  farmDetails?: {
    size?: string;
    cropTypes?: string[];
    certifications?: string[];
  };
  products?: string[]; // IDs of products
}

export interface Supplier extends User {
  role: "supplier";
  businessDetails?: {
    companyName: string;
    businessType: string;
    servicesOffered: string[];
  };
  inventory?: string[]; // IDs of inventory items
}

export interface Consumer extends User {
  role: "consumer";
  preferences?: {
    dietaryPreferences?: string[];
    sustainabilityPreferences?: string[];
  };
  purchaseHistory?: string[]; // IDs of past orders
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  attachments?: string[];
}
