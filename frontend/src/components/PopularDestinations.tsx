
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkPlus, Star } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { EcoImpactBadge } from '@/components/EcoImpactBadge';
import { Link } from 'react-router-dom';

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('destBookmarks') || '[]');
  });

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      let next;
      if (prev.includes(id)) {
        next = prev.filter(x => x !== id);
      } else {
        next = [...prev, id];
      }
      localStorage.setItem('destBookmarks', JSON.stringify(next));
      return next;
    });
  };

  return { bookmarks, toggleBookmark };
}

export function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { bookmarks, toggleBookmark } = useBookmarks();

  // Filter popular destinations (first 8 for demo)
  const popularDestinations = destinations.slice(0, 8);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Popular Eco Destinations</h2>
            <p className="text-gray-600 mt-2">Discover the most loved eco-friendly spots across Sri Lanka</p>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {popularDestinations.map((destination) => (
            <motion.div 
              key={destination.id}
              className="flex-shrink-0 w-[280px] snap-start group/card"
              variants={itemVariants}
            >
              <Link to={`/destination/${destination.id}`} className="block group relative">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img 
                    src={destination.images[0]} 
                    alt={destination.name}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-semibold text-lg line-clamp-1">{destination.name}</h3>
                    <p className="text-white/90 text-sm line-clamp-1">{destination.location}</p>
                  </div>
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 items-end">
                    <EcoImpactBadge score={destination.ecoImpactScore} />
                    <button
                      onClick={e => {
                        e.preventDefault();
                        toggleBookmark(destination.id);
                      }}
                      className="p-1 rounded-full bg-white/90 shadow hover:bg-eco-blue/20 transition group/bookmark"
                      title={bookmarks.includes(destination.id) ? "Unbookmark" : "Bookmark"}
                    >
                      {bookmarks.includes(destination.id) ? (
                        <Bookmark data-testid="bookmarked" fill="#16a34a" className="text-eco-blue" size={22} />
                      ) : (
                        <BookmarkPlus data-testid="bookmark-plus" className="text-eco-blue" size={22} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Destination</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star size={18} className="text-yellow-500 mr-1" />
                    <span className="text-gray-700">
                      {/* Demo: Use a fallback if no rating. */}
                      {(destination as any).ecoRating ? ((destination as any).ecoRating).toFixed?.(1) || (destination as any).ecoRating : "New"}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-between mt-2">
                <span className="font-semibold text-eco-blue">
                  {typeof (destination as any).pricePerNight === 'number'
                    ? `Rs. ${(destination as any).pricePerNight.toLocaleString()}`
                    : 'Price N/A'}
                </span>
                <Link
                  to={`/book/${destination.id}`}
                  className="text-xs px-3 py-1 rounded-full bg-eco-blue/10 text-eco-blue border border-eco-blue/20 hover:bg-eco-blue/20 font-semibold"
                >
                  Book →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <Link 
            to="/destinations"
            className="inline-flex items-center text-eco-blue font-medium hover:underline"
          >
            View all destinations
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
