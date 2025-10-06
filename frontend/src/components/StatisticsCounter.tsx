
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, Users, Leaf, Award } from 'lucide-react';

export function StatisticsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Initialize counters
  const [counters, setCounters] = useState({
    destinations: 0,
    travelers: 0,
    conservation: 0,
    awards: 0
  });
  
  // Target values
  const targets = {
    destinations: 72,
    travelers: 12500,
    conservation: 15,
    awards: 8
  };
  
  // Counter animation
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        const easeOutQuad = (t: number) => t * (2 - t); // Easing function
        const easedProgress = easeOutQuad(progress);
        
        setCounters({
          destinations: Math.floor(easedProgress * targets.destinations),
          travelers: Math.floor(easedProgress * targets.travelers),
          conservation: Math.floor(easedProgress * targets.conservation),
          awards: Math.floor(easedProgress * targets.awards)
        });
        
        if (frame === totalFrames) {
          clearInterval(timer);
          // Set final values
          setCounters(targets);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);
  
  const stats = [
    { 
      icon: <Map className="h-10 w-10 text-eco-green" />,
      value: counters.destinations,
      suffix: "+",
      label: "Eco Destinations"
    },
    { 
      icon: <Users className="h-10 w-10 text-eco-blue" />,
      value: counters.travelers.toLocaleString(),
      suffix: "+",
      label: "Happy Travelers"
    },
    { 
      icon: <Leaf className="h-10 w-10 text-eco-yellow" />,
      value: counters.conservation,
      suffix: "+",
      label: "Conservation Projects"
    },
    { 
      icon: <Award className="h-10 w-10 text-eco-earth" />,
      value: counters.awards,
      suffix: "",
      label: "Sustainability Awards"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
