
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ecoStays } from '@/data/ecoStays';
import { Calendar } from '@/components/ui/calendar';
import { format, addDays, differenceInDays } from 'date-fns';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EcoImpactBadge } from '@/components/EcoImpactBadge';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  CalendarIcon, 
  MapPin, 
  Users, 
  Star, 
  Shield, 
  X, 
  Leaf,
  Heart
} from 'lucide-react';

const BookingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Find the stay based on id
  const stay = ecoStays.find(s => s.id === id);

  if (!stay) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">We couldn't find the stay or experience you're looking for.</p>
        <Button onClick={() => navigate('/bookings')}>
          Return to Bookings
        </Button>
      </div>
    );
  }

  // Calculate total price
  const nights = differenceInDays(endDate || new Date(), selectedDate || new Date());
  const totalGuests = adults + children;
  const totalPrice = stay.type === 'stay' 
    ? stay.pricePerNight * Math.max(1, nights)
    : stay.pricePerNight * totalGuests;

  // Function to handle date range selection
  const handleDateSelect = (date: Date | undefined) => {
    if (!selectedDate) {
      setSelectedDate(date);
      setEndDate(addDays(date || new Date(), 1));
    } else if (!endDate || date && date < selectedDate) {
      setSelectedDate(date);
      setEndDate(addDays(date || new Date(), 1));
    } else {
      setEndDate(date);
    }
  };

  // Handle proceed to checkout
  const handleCheckout = () => {
    // In a real app, we would save the booking details to context or state
    navigate('/checkout', {
      state: {
        stayId: stay.id,
        checkIn: selectedDate,
        checkOut: endDate,
        guests: { adults, children },
        totalPrice,
        stayName: stay.name
      }
    });
  };

  // Render review stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">Home</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a href="/bookings" className="hover:text-gray-700">Bookings</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">{stay.name}</li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{stay.name}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-1" />
              <span className="mr-4">{stay.location}</span>
              <div className="flex items-center">
                <div className="mr-1">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < stay.ecoRating ? "text-yellow-500" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <span>{stay.ecoRating}/5 eco-rating</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline" className="flex items-center">
              <Heart size={18} className="mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images and description */}
        <div className="lg:col-span-2">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="col-span-2">
              <img 
                src={stay.images[0]} 
                alt={stay.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <img 
              src={stay.images[1]} 
              alt={`${stay.name} interior`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <img 
              src={stay.images[2]} 
              alt={`${stay.name} view`}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* Badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            <EcoImpactBadge score={stay.ecoImpactScore} size="md" />
            {stay.badges.map((badge, index) => {
              let icon, label;
              
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
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {icon} {label}
                </span>
              );
            })}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About This {stay.type === 'stay' ? 'Stay' : 'Experience'}</h2>
            <p className="text-gray-600 mb-4">{stay.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Eco Features</h3>
                <ul className="space-y-2">
                  {stay.ecoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Leaf size={18} className="text-green-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <ul className="space-y-2">
                  {stay.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Reviews</h2>
            {stay.reviews.map((review, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
                <div className="flex justify-between mb-2">
                  <div className="font-semibold">{review.userName}</div>
                  <div className="text-gray-500 text-sm">
                    {format(new Date(review.date), 'MMM d, yyyy')}
                  </div>
                </div>
                <div className="mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Booking form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>
                <span className="text-2xl font-bold">${stay.pricePerNight}</span>
                <span className="text-gray-500 text-base ml-1">
                  {stay.type === 'stay' ? '/night' : '/person'}
                </span>
              </CardTitle>
              <CardDescription>
                Book your eco-friendly {stay.type === 'stay' ? 'stay' : 'experience'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Date Selection */}
              {stay.type === 'stay' ? (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Dates</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          endDate ? (
                            <>
                              {format(selectedDate, "MMM d, yyyy")} - {format(endDate, "MMM d, yyyy")}
                            </>
                          ) : (
                            format(selectedDate, "MMM d, yyyy")
                          )
                        ) : (
                          <span>Select check-in/check-out dates</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                      <Calendar
                        mode="range"
                        selected={{
                          from: selectedDate,
                          to: endDate
                        }}
                        onSelect={(range) => {
                          setSelectedDate(range?.from);
                          setEndDate(range?.to);
                        }}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          format(selectedDate, "MMM d, yyyy")
                        ) : (
                          <span>Select a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              {/* Guests */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs text-gray-500">Adults</label>
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                      >
                        -
                      </button>
                      <span className="flex-1 text-center">{adults}</span>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setAdults(Math.min(stay.maxGuests - children, adults + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-gray-500">Children</label>
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        -
                      </button>
                      <span className="flex-1 text-center">{children}</span>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setChildren(Math.min(stay.maxGuests - adults, children + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Max {stay.maxGuests} guests
                </p>
              </div>

              {/* Price breakdown */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">
                    {stay.type === 'stay' 
                      ? `$${stay.pricePerNight} × ${Math.max(1, nights)} night${nights !== 1 ? 's' : ''}`
                      : `$${stay.pricePerNight} × ${totalGuests} guest${totalGuests !== 1 ? 's' : ''}`
                    }
                  </span>
                  <span>${totalPrice}</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleCheckout} 
                className="w-full"
                size="lg"
              >
                Reserve
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
