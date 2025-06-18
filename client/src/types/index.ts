export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  developer: string;
  pricing: {
    type: 'free' | 'freemium' | 'paid';
    startingPrice?: string;
  };
  features: string[];
  screenshots: string[];
  videoUrl?: string;
  websiteUrl: string;
  rating: number;
  reviewCount: number;
  lastUpdated: string;
  releaseDate: string;
  tutorialSteps: {
    title: string;
    description: string;
    imageUrl?: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Review {
  id: string;
  toolId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  userName: string;
  userAvatar: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bookmarks: string[];
}