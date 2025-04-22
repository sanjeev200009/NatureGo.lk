
import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { User, AuthStatus } from "@/types";

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleBookmark: (destinationId: string) => void;
  isBookmarked: (destinationId: string) => boolean;
}

// Create a mock user for demo purposes
const mockUser: User = {
  id: "user1",
  email: "demo@ecotrail.lk",
  name: "Demo User",
  bookmarks: ["1", "4"],
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem("ecotrail-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    // In a real app, this would call your authentication API
    setStatus("loading");
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Demo validation (in real app, this would be server-side)
      if (email === "demo@ecotrail.lk" && password === "password") {
        setUser(mockUser);
        localStorage.setItem("ecotrail-user", JSON.stringify(mockUser));
        setStatus("authenticated");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setStatus("unauthenticated");
      throw error;
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would call your registration API
    setStatus("loading");
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: `user${Date.now()}`,
        email,
        name,
        bookmarks: [],
      };
      
      setUser(newUser);
      localStorage.setItem("ecotrail-user", JSON.stringify(newUser));
      setStatus("authenticated");
    } catch (error) {
      console.error("Registration failed:", error);
      setStatus("unauthenticated");
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("ecotrail-user");
    setStatus("unauthenticated");
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
    localStorage.setItem("ecotrail-user", JSON.stringify(updatedUser));
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
