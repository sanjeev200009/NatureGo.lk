
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Globe } from 'lucide-react';

export function WhyTravelGreen() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-eco-green" />,
      title: "Preserve Natural Beauty",
      description: "Support conservation efforts that maintain Sri Lanka's pristine landscapes for future generations.",
      stats: "85% of our eco-destinations contribute to local conservation funds"
    },
    {
      icon: <Heart className="h-12 w-12 text-eco-yellow" />,
      title: "Authentic Experiences",
      description: "Connect with local communities and experience genuine Sri Lankan hospitality and traditions.",
      stats: "3,000+ authentic cultural experiences documented"
    },
    {
      icon: <Users className="h-12 w-12 text-eco-blue" />,
      title: "Community Impact",
      description: "Travel that directly benefits local communities through sustainable employment and fair trade.",
      stats: "52 communities supported through our eco-tourism initiatives"
    },
    {
      icon: <Globe className="h-12 w-12 text-eco-earth" />,
      title: "Reduce Carbon Footprint",
      description: "Travel with purpose while minimizing your environmental impact through carbon offset programs.",
      stats: "12 tons of carbon offset per month through our initiatives"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-eco-green"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-eco-blue"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Why Travel Green in Sri Lanka?</h2>
          <p className="text-lg text-gray-600">
            Discover how sustainable tourism creates positive impact for both travelers and local communities
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-xl p-8 h-full shadow-sm border border-gray-100 hover:shadow-md hover:border-eco-green/30 transition-all duration-300">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-eco-green">{feature.stats}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
