
import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SearchDestination() {
  const [expanded, setExpanded] = useState(false);
  const [location, setLocation] = useState('');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden relative -mt-16 z-30"
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Search input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </div>
            <Input 
              type="text" 
              placeholder="Search destinations..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onClick={() => setExpanded(true)}
              className="pl-10 py-6 text-lg w-full border-gray-200 focus:border-eco-green focus:ring-eco-green"
            />
            {location && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button 
                  onClick={() => setLocation('')}
                  className="text-gray-400 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
          
          {!expanded ? (
            <Button 
              className="bg-eco-green hover:bg-eco-green-dark py-6 px-6 h-auto flex gap-2 text-lg"
              onClick={() => setExpanded(true)}
            >
              <Search size={20} />
              Find Eco Stays
            </Button>
          ) : (
            <>
              {/* Location dropdown */}
              <div className="flex-1 lg:border-l lg:border-gray-200 lg:pl-5">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <select className="w-full bg-transparent border-0 text-gray-800 focus:ring-0 p-2 cursor-pointer">
                  <option value="">Anywhere in Sri Lanka</option>
                  <option value="central">Central Highlands</option>
                  <option value="south">Southern Coast</option>
                  <option value="north">Northern Regions</option>
                  <option value="east">Eastern Beaches</option>
                </select>
              </div>
              
              {/* Dates dropdown */}
              <div className="flex-1 lg:border-l lg:border-gray-200 lg:pl-5">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">When</span>
                </div>
                <select className="w-full bg-transparent border-0 text-gray-800 focus:ring-0 p-2 cursor-pointer">
                  <option value="">Any dates</option>
                  <option value="weekend">This weekend</option>
                  <option value="week">Next week</option>
                  <option value="month">Next month</option>
                </select>
              </div>
              
              {/* Guests dropdown */}
              <div className="flex-1 lg:border-l lg:border-gray-200 lg:pl-5">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Users size={18} />
                  <span className="text-sm font-medium">Guests</span>
                </div>
                <select className="w-full bg-transparent border-0 text-gray-800 focus:ring-0 p-2 cursor-pointer">
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4+ guests</option>
                </select>
              </div>
              
              <Button 
                className="bg-eco-green hover:bg-eco-green-dark py-6 px-8 h-auto flex gap-2 text-lg"
              >
                <Search size={20} />
                Search
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
