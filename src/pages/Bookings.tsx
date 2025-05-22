
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ecoStays } from '@/data/ecoStays';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EcoImpactBadge } from '@/components/EcoImpactBadge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  ListFilter, 
  Grid2X2, 
  List 
} from 'lucide-react';

const Bookings = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedEcoRating, setSelectedEcoRating] = useState<number | 'all'>('all');

  // Filter eco stays based on search and filters
  const filteredStays = ecoStays.filter(stay => {
    const matchesSearch = 
      stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = selectedLocation === 'all' || stay.location === selectedLocation;
    const matchesType = selectedType === 'all' || stay.type === selectedType;
    const matchesEcoRating = selectedEcoRating === 'all' || stay.ecoRating >= selectedEcoRating;
    
    return matchesSearch && matchesLocation && matchesType && matchesEcoRating;
  });

  // Get unique locations for filter dropdown
  const locations = Array.from(new Set(ecoStays.map(stay => stay.location)));
  
  // Handle booking button click
  const handleBookNow = (id: string) => {
    navigate(`/book/${id}`);
  };

  // Function to render badges
  const renderBadges = (badges: string[]) => {
    return badges.map((badge, index) => {
      let icon = '🌿';
      let label = badge;
      
      if (badge === 'eco-certified') {
        icon = '🌿';
        label = 'Eco Certified';
      } else if (badge === 'nature-stay') {
        icon = '🏕️';
        label = 'Nature Stay';
      } else if (badge === 'carbon-neutral') {
        icon = '♻️';
        label = 'Carbon Neutral';
      }
      
      return (
        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
          {icon} {label}
        </span>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Eco-Friendly Stays & Experiences</h1>
        <p className="text-lg text-gray-600">
          Discover sustainable accommodations and unique experiences across Sri Lanka
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search for stays, experiences, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-md border border-gray-300 py-2 px-3 text-sm bg-white"
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-md border border-gray-300 py-2 px-3 text-sm bg-white"
            >
              <option value="all">All Types</option>
              <option value="stay">Stays</option>
              <option value="experience">Experiences</option>
              <option value="hike">Hikes</option>
              <option value="tour">Tours</option>
            </select>
            
            <select
              value={selectedEcoRating}
              onChange={(e) => setSelectedEcoRating(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="rounded-md border border-gray-300 py-2 px-3 text-sm bg-white"
            >
              <option value="all">All Eco Ratings</option>
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆ & up</option>
              <option value="3">★★★☆☆ & up</option>
            </select>
            
            <div className="flex border rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'}`}
                aria-label="Grid view"
              >
                <Grid2X2 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}
                aria-label="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredStays.length} eco-friendly options
        </p>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStays.map(stay => (
            <Card key={stay.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={stay.images[0]} 
                  alt={stay.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <EcoImpactBadge score={stay.ecoImpactScore} size="sm" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{stay.name}</CardTitle>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{stay.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">${stay.pricePerNight}</span>
                    <span className="text-gray-500 text-sm block">
                      {stay.type === 'stay' ? '/night' : '/person'}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="mb-2">{renderBadges(stay.badges)}</div>
                <p className="text-gray-600 line-clamp-2">{stay.shortDescription}</p>
                
                <div className="flex mt-3 text-sm text-gray-500">
                  {stay.type === 'stay' && (
                    <div className="flex items-center mr-4">
                      <Users size={16} className="mr-1" />
                      <span>Up to {stay.maxGuests} guests</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="mr-1">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i}>
                          {i < stay.ecoRating ? '★' : '☆'}
                        </span>
                      ))}
                    </span>
                    <span>{stay.ecoRating}/5 eco-rating</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={() => handleBookNow(stay.id)} 
                  className="w-full"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredStays.map(stay => (
            <Card key={stay.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={stay.images[0]} 
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <EcoImpactBadge score={stay.ecoImpactScore} size="sm" />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{stay.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{stay.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold">${stay.pricePerNight}</span>
                      <span className="text-gray-500 text-sm block">
                        {stay.type === 'stay' ? '/night' : '/person'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-2">{renderBadges(stay.badges)}</div>
                  <p className="text-gray-600 mb-3">{stay.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {stay.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-gray-600 text-sm">
                        • {amenity}
                      </span>
                    ))}
                    {stay.amenities.length > 3 && (
                      <span className="text-gray-600 text-sm">
                        • +{stay.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      {stay.type === 'stay' && (
                        <div className="flex items-center mr-4">
                          <Users size={16} className="mr-1" />
                          <span>Up to {stay.maxGuests} guests</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="mr-1">
                          {Array(5).fill(0).map((_, i) => (
                            <span key={i}>
                              {i < stay.ecoRating ? '★' : '☆'}
                            </span>
                          ))}
                        </span>
                        <span>{stay.ecoRating}/5 eco-rating</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleBookNow(stay.id)} 
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* No results */}
      {filteredStays.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No stays or experiences found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filters to find available options.
          </p>
        </div>
      )}
    </div>
  );
};

export default Bookings;
