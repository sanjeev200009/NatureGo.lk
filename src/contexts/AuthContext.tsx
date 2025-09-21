
import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { User, AuthStatus } from "@/types";
import { authAPI, RegisterData, LoginData } from "@/services/api";

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, preferences?: any) => Promise<void>;
  logout: () => void;
  toggleBookmark: (destinationId: string) => void;
  isBookmarked: (destinationId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  // Check for existing session on load
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("naturego-token");
      const storedUser = localStorage.getItem("naturego-user");
      
      if (storedToken && storedUser) {
        try {
          // Verify token is still valid by fetching profile
          const response = await authAPI.getProfile();
          setUser(response.data.user);
          setStatus("authenticated");
        } catch (error) {
          // Token invalid, clear storage
          localStorage.removeItem("naturego-token");
          localStorage.removeItem("naturego-user");
          setStatus("unauthenticated");
        }
      } else {
        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setStatus("loading");
    try {
      const loginData: LoginData = { email, password };
      const response = await authAPI.login(loginData);
      
      // Store token and user data
      localStorage.setItem("naturego-token", response.data.token);
      localStorage.setItem("naturego-user", JSON.stringify(response.data.user));
      
      setUser(response.data.user);
      setStatus("authenticated");
    } catch (error) {
      console.error("Login failed:", error);
      setStatus("unauthenticated");
      throw error;
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, preferences?: any) => {
    setStatus("loading");
    try {
      const registerData: RegisterData = {
        name,
        email,
        password,
        preferences: preferences || {
          budget: 'mid-range',
          activities: [],
          ecoFriendly: true
        }
      };
      
      const response = await authAPI.register(registerData);
      
      // Store token and user data
      localStorage.setItem("naturego-token", response.data.token);
      localStorage.setItem("naturego-user", JSON.stringify(response.data.user));
      
      setUser(response.data.user);
      setStatus("authenticated");
    } catch (error) {
      console.error("Registration failed:", error);
      setStatus("unauthenticated");
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      setUser(null);
      setStatus("unauthenticated");
      localStorage.removeItem("naturego-token");
      localStorage.removeItem("naturego-user");
    }
  };

  // Bookmark toggle function
  const toggleBookmark = (destinationId: string) => {
    if (!user) return;

    let updatedBookmarks: string[];
    
    if (user.bookmarks.includes(destinationId)) {
      updatedBookmarks = user.bookmarks.filter(id => id !== destinationId);
    } else {
      updatedBookmarks = [...user.bookmarks, destinationId];
    }
    
    const updatedUser = { ...user, bookmarks: updatedBookmarks };
    setUser(updatedUser);
    localStorage.setItem("naturego-user", JSON.stringify(updatedUser));
  };

  // Check if a destination is bookmarked
  const isBookmarked = (destinationId: string): boolean => {
    return user?.bookmarks.includes(destinationId) || false;
  };

  const value = {
    user,
    status,
    login,
    register,
    logout,
    toggleBookmark,
    isBookmarked,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
