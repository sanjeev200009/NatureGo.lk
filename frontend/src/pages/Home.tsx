
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroCarousel } from '@/components/HeroCarousel';
import { SearchDestination } from '@/components/SearchDestination';
import { StatisticsCounter } from '@/components/StatisticsCounter';
import { PopularDestinations } from '@/components/PopularDestinations';
import { WhyTravelGreen } from '@/components/WhyTravelGreen';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import { BlogPreview } from '@/components/BlogPreview';
import { NewsletterSubscription } from '@/components/NewsletterSubscription';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-eco-green z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Search Bar */}
      <div className="bg-white relative">
        <SearchDestination />
      </div>
      
      {/* Statistics Counter */}
      <StatisticsCounter />
      
      {/* Popular Destinations */}
      <PopularDestinations />
      
      {/* Why Travel Green */}
      <WhyTravelGreen />
      
      {/* Testimonials */}
      <TestimonialsSlider />
      
      {/* Blog Preview */}
      <BlogPreview />
      
      {/* Newsletter */}
      <NewsletterSubscription />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-eco-blue p-10 md:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore Sri Lanka Responsibly?</h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Create an account to save your favorite eco-destinations and start planning your sustainable adventure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/register"
                      className="px-6 py-3 bg-white text-eco-blue font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                    >
                      Sign Up Free
                    </Link>
                    <Link 
                      to="/destinations"
                      className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                      Browse Destinations
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sri Lanka landscape"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
