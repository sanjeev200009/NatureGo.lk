
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export function TestimonialsSlider() {
  const testimonials = [
    {
      quote: "EcoTrail.lk transformed our family vacation into a profound journey through Sri Lanka's natural wonders. The eco-friendly stays were incredible, and knowing we supported local communities made it even better.",
      author: "Sarah Thompson",
      location: "United Kingdom",
      image: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
      quote: "I've traveled to over 30 countries, and Sri Lanka's eco destinations through EcoTrail were among my most memorable experiences. The dedication to sustainability is evident everywhere.",
      author: "David Chen",
      location: "Singapore",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "As someone passionate about conservation, I was amazed at how EcoTrail.lk balanced luxury with environmental responsibility. The local guides were knowledgeable and the impact scores helped us make better choices.",
      author: "Emily Johansson",
      location: "Sweden",
      image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      quote: "Our wildlife tour in Yala was unforgettable - we spotted leopards and elephants while learning about conservation efforts. EcoTrail.lk makes it easy to travel responsibly in Sri Lanka.",
      author: "Michael Rodriguez",
      location: "Australia",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section className="py-20 bg-eco-blue-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">What Our Travelers Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from eco-conscious travelers who've explored Sri Lanka through EcoTrail.lk
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote size={100} />
          </div>
          
          <div className="relative h-[350px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full flex flex-col items-center justify-center text-center px-4"
              >
                <div className="mb-8">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white/20"
                  />
                </div>
                <p className="text-xl md:text-2xl font-light italic mb-8 max-w-3xl">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonials[current].author}</p>
                  <p className="text-white/70">{testimonials[current].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index ? "bg-white w-8" : "bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
