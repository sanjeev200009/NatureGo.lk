
export interface User {
  id: string;
  email: string;
  name: string;
  bookmarks: string[];
  recentSearches?: string[]; // Add recent searches for users
  bookings?: Booking[]; // Add bookings for users
}

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

export interface FilterOptions {
  category?: string;
  ecoImpact?: 'high' | 'medium' | 'low';
  search?: string;
  priceRange?: 'all' | '$' | '$$' | '$$$';
}

export interface Booking {
  id: string;
  userId: string;
  stayId: string;
  checkIn: Date;
  checkOut: Date;
  guests: {
    adults: number;
    children: number;
  };
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'canceled' | 'completed';
  paymentMethod: 'stripe' | 'cash';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: Date;
  updatedAt: Date;
  referenceNumber: string;
}

export interface EcoStay {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  images: string[];
  pricePerNight: number;
  maxGuests: number;
  amenities: string[];
  type: 'stay' | 'experience' | 'hike' | 'tour';
  ecoRating: 1 | 2 | 3 | 4 | 5;
  ecoImpactScore: 'high' | 'medium' | 'low';
  ecoFeatures: string[];
  availability: {
    startDate: Date;
    endDate: Date;
    unavailableDates: Date[];
  };
  reviews: {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: Date;
  }[];
  badges: ('eco-certified' | 'nature-stay' | 'carbon-neutral')[];
}

