
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Eco-Friendly Accommodations in Sri Lanka',
    excerpt: 'Discover sustainable luxury and authentic experiences at these eco-conscious resorts and homestays across the island.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Amali Fernando',
    date: 'May 15, 2023',
    category: 'Eco Stays'
  },
  {
    id: '2',
    title: 'How Sri Lanka is Leading Sustainable Tourism in South Asia',
    excerpt: 'With innovative conservation programs and community-based tourism initiatives, Sri Lanka sets new standards for eco-tourism.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Rajiv Mendis',
    date: 'April 3, 2023',
    category: 'Conservation'
  },
  {
    id: '3',
    title: 'Wildlife Conservation Through Tourism: Sri Lanka\'s Success Story',
    excerpt: 'How strategic eco-tourism is funding vital conservation projects and protecting endangered species across the country.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Sophie Taylor',
    date: 'March 22, 2023',
    category: 'Wildlife'
  }
];

export function BlogPreview() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Eco Travel Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice, local perspectives, and travel guides for sustainable tourism in Sri Lanka
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-eco-green text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-eco-green transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <p className="inline-flex items-center text-eco-blue font-medium group-hover:underline">
                    Read more
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/blog"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors inline-flex items-center font-medium"
          >
            View all articles l
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
