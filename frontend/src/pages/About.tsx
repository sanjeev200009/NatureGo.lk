
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About EcoTrail.lk</h1>
          <p className="text-lg mb-8">
            This is a placeholder for the About page. In a complete implementation, this page would include information about the EcoTrail.lk platform, its mission, team, and sustainability initiatives.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
