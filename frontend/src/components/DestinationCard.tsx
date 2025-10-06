
import { Link } from 'react-router-dom';
import { Bookmark, MapPin } from 'lucide-react';
import { Destination } from '@/data/destinations';
import { EcoImpactBadge } from './EcoImpactBadge';
import { useAuth } from '@/contexts/AuthContext';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const { user, toggleBookmark, isBookmarked } = useAuth();
  const bookmarked = isBookmarked(destination.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(destination.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/destination/${destination.id}`} className="block h-full">
        <div className="relative h-52 overflow-hidden">
          <img
            src={destination.images[0]}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <EcoImpactBadge score={destination.ecoImpactScore} showLabel={false} size="sm" />
            {destination.featured && (
              <span className="bg-eco-blue text-white text-xs py-0.5 px-2 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          {user && (
            <button
              onClick={handleBookmarkClick}
              className={`absolute top-3 right-3 p-1.5 rounded-full ${
                bookmarked 
                  ? 'bg-eco-blue text-white' 
                  : 'bg-white/80 text-gray-700 hover:bg-eco-blue hover:text-white'
              } transition-colors duration-200`}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this destination'}
            >
              <Bookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />
            </button>
          )}
        </div>
        
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              {destination.name}
            </h3>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin size={14} className="mr-1" />
            <span>{destination.location}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {destination.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {destination.category.slice(0, 3).map((cat) => (
              <span 
                key={cat} 
                className="inline-block bg-eco-green-light/20 text-eco-green-dark text-xs px-2 py-0.5 rounded-full"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            ))}
            {destination.category.length > 3 && (
              <span className="inline-block text-xs px-1 text-gray-500">
                +{destination.category.length - 3} more
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-auto">
            <Link
              to={`/book/${destination.id}`}
              className="inline-block bg-eco-blue text-white rounded px-4 py-2 text-center font-medium hover:bg-eco-blue/85 transition"
            >
              Book Now
            </Link>
            <span className="text-sm font-medium text-eco-blue hover:underline inline-block">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
