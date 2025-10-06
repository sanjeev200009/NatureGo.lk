
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Array of hero images for the carousel
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Scenic mountains in Sri Lanka surrounded by mist",
    title: "Discover Sri Lanka's Natural Wonders",
    subtitle: "Explore sustainably with EcoTrail.lk"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Tranquil lake surrounded by lush forest",
    title: "Preserve Paradise",
    subtitle: "Travel with purpose, leave only footprints"
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Sunset over tea plantations in Sri Lanka",
    title: "Eco-Friendly Adventures Await",
    subtitle: "Connect with nature while supporting local communities"
  }
];

export function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1 : 1.1
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            scale: { duration: 8 }
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1 
            key={`title-${currentImageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {heroImages[currentImageIndex].title}
          </motion.h1>
          <motion.p 
            key={`subtitle-${currentImageIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            {heroImages[currentImageIndex].subtitle}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-eco-green text-white px-8 py-3 rounded-md font-medium hover:bg-eco-green-dark transition-colors"
            >
              Explore Destinations
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-md font-medium hover:bg-white/30 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white w-10' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
