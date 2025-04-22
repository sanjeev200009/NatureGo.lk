
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { destinations } from '@/data/destinations';
import { DestinationCard } from '@/components/DestinationCard';

const Bookmarks = () => {
  const { user, status } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarkedDestinations, setBookmarkedDestinations] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is logged in
    if (status === 'unauthenticated') {
      navigate('/login', { state: { from: '/bookmarks' } });
      return;
    }

    setIsLoading(true);
    // Simulate API call to fetch bookmarked destinations
    const timer = setTimeout(() => {
      if (user) {
        const bookmarked = destinations.filter(dest => 
          user.bookmarks.includes(dest.id)
        );
        setBookmarkedDestinations(bookmarked);
      }
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [user, status, navigate]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Bookmarked Destinations</h1>
        <p className="text-gray-600">
          Save your favorite eco-friendly destinations for your next Sri Lankan adventure.
        </p>
      </div>
      
      {isLoading ? (
        // Loading skeleton
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow animate-pulse">
              <div className="h-52 bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : bookmarkedDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedDestinations.map(destination => (
            <div key={destination.id}>
              <DestinationCard destination={destination} />
              <div className="flex justify-end mt-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/book/${destination.id}`)}
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Bookmark size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No bookmarks yet</h3>
          <p className="text-gray-600 mb-6">
            You haven't added any destinations to your bookmarks.
            Explore our destinations and click the bookmark icon to save them here.
          </p>
          <Button asChild>
            <Link to="/destinations">
              Browse Destinations
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
