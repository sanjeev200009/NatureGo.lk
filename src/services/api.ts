import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('naturego-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('naturego-token');
      localStorage.removeItem('naturego-user');
      window.location.href = '/login';
    }
    
    // Return detailed error message
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    budget: 'budget' | 'mid-range' | 'luxury';
    activities: string[];
    ecoFriendly: boolean;
  };
  bookmarks: string[];
  createdAt?: string;
  lastLogin?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  preferences?: {
    budget?: 'budget' | 'mid-range' | 'luxury';
    activities?: string[];
    ecoFriendly?: boolean;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

// Authentication API
export const authAPI = {
  // Register new user
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  // Login user
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  // Get user profile (requires auth token)
  getProfile: async (): Promise<{ success: boolean; data: { user: User } }> => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  // Logout user (client-side)
  logout: async (): Promise<void> => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Continue with logout even if API call fails
      console.log('Logout API call failed, continuing with client-side logout');
    } finally {
      localStorage.removeItem('naturego-token');
      localStorage.removeItem('naturego-user');
    }
  },
};

// Destinations API
export const destinationsAPI = {
  // Get all destinations
  getAll: async (filters?: {
    page?: number;
    limit?: number;
    category?: string;
    province?: string;
    minRating?: number;
  }) => {
    const params = new URLSearchParams();
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());
    if (filters?.category) params.append('category', filters.category);
    if (filters?.province) params.append('province', filters.province);
    if (filters?.minRating) params.append('minRating', filters.minRating.toString());

    const response = await api.get(`/destinations?${params}`);
    return response.data;
  },

  // Get single destination
  getById: async (id: string) => {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  },

  // Create new destination (requires auth)
  create: async (data: any) => {
    const response = await api.post('/destinations', data);
    return response.data;
  },
};

// Health check
export const healthAPI = {
  check: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};

export default api;