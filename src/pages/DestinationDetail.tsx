
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Clock, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { EcoImpactBadge } from '@/components/EcoImpactBadge';
import { Button } from '@/components/ui/button';
import { destinations, Destination } from '@/data/destinations';
import { useAuth } from '@/contexts/AuthContext';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, toggleBookmark, isBookmarked } = useAuth();
  
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const bookmarked = user && destination ? isBookmarked(destination.id) : false;

  useEffect(() => {
    // Simulate API call to fetch destination details
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      const found = destinations.find(dest => dest.id === id);
      setDestination(found || null);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleBookmarkClick = () => {
    if (destination) {
      toggleBookmark(destination.id);
    }
  };

  const handleShareClick = () => {
    if (navigator.share && destination) {
      navigator.share({
        title: `EcoTrail.lk - ${destination.name}`,
        text: destination.shortDescription,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h2>
        <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/destinations')}>
          Back to All Destinations
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button and Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Button>
        
        <div className="flex items-center gap-2">
          {user && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookmarkClick}
              className={`flex items-center gap-1 ${
                bookmarked ? 'text-eco-blue border-eco-blue' : ''
              }`}
            >
              <Bookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />
              {bookmarked ? 'Bookmarked' : 'Bookmark'}
            </Button>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleShareClick}
            className="flex items-center gap-1"
          >
            <Share2 size={16} />
            Share
          </Button>
        </div>
      </div>
      
      {/* Destination Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {destination.name}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-1" />
              <span>{destination.location}</span>
            </div>
          </div>
          
          <EcoImpactBadge score={destination.ecoImpactScore} size="lg" />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {destination.category.map((cat) => (
            <span 
              key={cat} 
              className="inline-block bg-eco-green-light/20 text-eco-green-dark text-sm px-3 py-1 rounded-full"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          ))}
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="mb-8">
        <div className="rounded-xl overflow-hidden mb-4">
          <img 
            src={destination.images[activeImage]} 
            alt={`${destination.name}`}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2">
          {destination.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                activeImage === idx 
                  ? 'border-eco-green' 
                  : 'border-transparent hover:border-eco-green/50'
              }`}
            >
              <img 
                src={img} 
                alt={`${destination.name} thumbnail ${idx+1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Destination Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 whitespace-pre-line">
              {destination.description}
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.activities.map((activity, idx) => (
                <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <div className="mr-3 bg-eco-green-light/30 text-eco-green p-2 rounded-lg">
                    <Clock size={18} />
                  </div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Good to Know</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar size={20} className="text-eco-green mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Best Time to Visit</h4>
                <p className="text-gray-600">{destination.bestTimeToVisit}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign size={20} className="text-eco-green mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Price Range</h4>
                <p className="text-gray-600">{destination.priceRange}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin size={20} className="text-eco-green mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">{destination.location}</p>
                <div className="mt-3 bg-gray-200 rounded-lg h-40">
                  {/* In a real app, embed a map here */}
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Map Placeholder ({destination.latitude}, {destination.longitude})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
