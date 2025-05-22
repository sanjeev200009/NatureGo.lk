
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bookmark, Calendar, Clock, MapPin, User, Users, Heart, Settings, LogOut } from 'lucide-react';

// Mock booking data for demonstration
const mockBookings = [
  {
    id: 'b1',
    destination: 'Ella Eco Lodge',
    location: 'Ella',
    date: new Date('2025-05-15'),
    guests: 2,
    status: 'confirmed',
    total: 12500,
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'b2',
    destination: 'Sigiriya Treehouse',
    location: 'Sigiriya',
    date: new Date('2025-06-20'),
    guests: 3,
    status: 'pending',
    total: 18750,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  }
];

// Mock bookmarked destinations
const mockBookmarks = [
  {
    id: 'd1',
    name: 'Yala Safari Experience',
    location: 'Yala National Park',
    image: 'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'd2',
    name: 'Unawatuna Beach Resort',
    location: 'Unawatuna',
    image: 'https://images.unsplash.com/photo-1578922147787-a72a06df4fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'd3',
    name: 'Kandy Forest Hideaway',
    location: 'Kandy',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  }
];

const Dashboard = () => {
  const { user, status,logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    if (status === 'unauthenticated') {
      navigate('/login', { state: { from: '/dashboard' } });
      return;
    }

    // Simulate API data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [status, navigate]);

  const handleSignOut = () => {
    if (logout) {
      logout();
      navigate('/');
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back{user?.name ? `, ${user.name}` : ''}! Manage your eco-travels from here.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" onClick={handleSignOut} className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1 px-4 pb-2">
                    <Button 
                      variant={activeTab === "overview" ? "default" : "ghost"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab("overview")}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Overview
                    </Button>
                    <Button 
                      variant={activeTab === "bookings" ? "default" : "ghost"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab("bookings")}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Bookings
                    </Button>
                    <Button 
                      variant={activeTab === "bookmarks" ? "default" : "ghost"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab("bookmarks")}
                    >
                      <Bookmark className="mr-2 h-4 w-4" />
                      Bookmarks
                    </Button>
                    <Button 
                      variant={activeTab === "settings" ? "default" : "ghost"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Membership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-3 rounded-md border border-green-200">
                    <p className="text-sm font-medium text-green-800">Current Plan: Free</p>
                    <p className="text-xs text-green-700 mt-1">Upgrade for premium features</p>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => navigate('/subscribe')}
                    >
                      Upgrade Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Eco-Travel Summary</CardTitle>
                      <CardDescription>Your travel stats and upcoming trips</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-md border border-green-100">
                          <h3 className="text-sm font-medium text-green-800">Upcoming Trips</h3>
                          <p className="text-2xl font-bold">{mockBookings.length}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                          <h3 className="text-sm font-medium text-blue-800">Saved Places</h3>
                          <p className="text-2xl font-bold">{mockBookmarks.length}</p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                          <h3 className="text-sm font-medium text-amber-800">Carbon Saved</h3>
                          <p className="text-2xl font-bold">42 kg</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Bookings Preview */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Recent Bookings</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("bookings")}>
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {mockBookings.length > 0 ? (
                        <div className="space-y-4">
                          {mockBookings.slice(0, 2).map((booking) => (
                            <div key={booking.id} className="flex items-center space-x-4">
                              <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                                <img 
                                  src={booking.image} 
                                  alt={booking.destination} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-medium">{booking.destination}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {formatDate(booking.date)}
                                </div>
                              </div>
                              <div>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  booking.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-amber-100 text-amber-800'
                                }`}>
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-gray-500">No bookings yet</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2"
                            onClick={() => navigate('/bookings')}
                          >
                            Explore Eco-Stays
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Bookmarks Preview */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>Saved Destinations</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("bookmarks")}>
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {mockBookmarks.slice(0, 3).map((bookmark) => (
                          <div 
                            key={bookmark.id} 
                            className="relative rounded-md overflow-hidden group cursor-pointer"
                            onClick={() => navigate(`/destination/${bookmark.id}`)}
                          >
                            <div className="h-36">
                              <img 
                                src={bookmark.image} 
                                alt={bookmark.name} 
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                              <h4 className="text-white font-medium">{bookmark.name}</h4>
                              <div className="flex items-center text-white/80 text-sm">
                                <MapPin className="mr-1 h-3 w-3" />
                                {bookmark.location}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Bookings Tab */}
                <TabsContent value="bookings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Bookings</CardTitle>
                      <CardDescription>Manage your eco-stay and experience reservations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockBookings.length > 0 ? (
                        <div className="space-y-4">
                          {mockBookings.map((booking) => (
                            <div key={booking.id} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                              <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 h-48 md:h-auto">
                                  <img 
                                    src={booking.image} 
                                    alt={booking.destination} 
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="p-4 md:p-6 flex-grow">
                                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                      <h3 className="text-xl font-semibold">{booking.destination}</h3>
                                      <div className="flex items-center text-gray-500 mt-1">
                                        <MapPin className="mr-1 h-4 w-4" />
                                        {booking.location}
                                      </div>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                      <span className={`px-3 py-1 rounded-full text-sm ${
                                        booking.status === 'confirmed' 
                                          ? 'bg-green-100 text-green-800' 
                                          : 'bg-amber-100 text-amber-800'
                                      }`}>
                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div>
                                      <div className="text-sm text-gray-500">Date</div>
                                      <div className="flex items-center mt-1">
                                        <Calendar className="mr-1 h-4 w-4 text-gray-600" />
                                        {formatDate(booking.date)}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Guests</div>
                                      <div className="flex items-center mt-1">
                                        <Users className="mr-1 h-4 w-4 text-gray-600" />
                                        {booking.guests} {booking.guests === 1 ? 'person' : 'people'}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Total</div>
                                      <div className="font-medium text-gray-900 mt-1">
                                        Rs. {booking.total.toLocaleString()}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-2 mt-6">
                                    <Button size="sm">View Details</Button>
                                    <Button size="sm" variant="outline">Download Receipt</Button>
                                    {booking.status === 'pending' && (
                                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                        Cancel
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
                          <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            You haven't made any eco-friendly bookings yet. Explore our sustainable stays and experiences.
                          </p>
                          <Button onClick={() => navigate('/bookings')}>
                            Browse Eco-Stays
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Bookmarks Tab */}
                <TabsContent value="bookmarks" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Destinations</CardTitle>
                      <CardDescription>Your favorite eco-friendly spots across Sri Lanka</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockBookmarks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {mockBookmarks.map((bookmark) => (
                            <div 
                              key={bookmark.id} 
                              className="border rounded-md overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                              onClick={() => navigate(`/destination/${bookmark.id}`)}
                            >
                              <div className="relative h-48">
                                <img 
                                  src={bookmark.image} 
                                  alt={bookmark.name} 
                                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <Button 
                                  size="icon" 
                                  variant="secondary"
                                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    alert('Bookmark removed');
                                  }}
                                >
                                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                                </Button>
                              </div>
                              <div className="p-4">
                                <h3 className="font-medium text-lg">{bookmark.name}</h3>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <MapPin className="mr-1 h-4 w-4" />
                                  {bookmark.location}
                                </div>
                                <Button 
                                  className="w-full mt-4"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/book/${bookmark.id}`);
                                  }}
                                >
                                  Book Now
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Bookmark className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No saved destinations</h3>
                          <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            You haven't saved any destinations yet. Explore eco-friendly stays and experiences across Sri Lanka.
                          </p>
                          <Button onClick={() => navigate('/destinations')}>
                            Explore Destinations
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your profile and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        This is a placeholder for the account settings page. In a complete implementation, this page would allow users to edit their profile, change password, and manage notification preferences.
                      </p>
                      <Button>Edit Profile</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
