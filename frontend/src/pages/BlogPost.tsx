
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Blog Post {id}</h1>
          <p className="text-lg mb-8">
            This is a placeholder for an individual blog post page. In a complete implementation, this page would display the full content of a blog post about eco-tourism in Sri Lanka.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
