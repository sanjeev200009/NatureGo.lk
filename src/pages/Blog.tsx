
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Eco Travel Blog</h1>
          <p className="text-lg mb-8">
            This is a placeholder for the Blog page. In a complete implementation, this page would display a list of blog posts about eco-tourism in Sri Lanka.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
