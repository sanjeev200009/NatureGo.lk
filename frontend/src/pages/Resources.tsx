import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { resourcesData } from '../data/resourcesData';
import { useEffect, useState } from 'react';

interface Resource {
    id: string;
    title: string;
    content: string;
    tags?: string[];
    author?: string;
    date?: string;
}

const Resources = () => {
    const { id } = useParams<{ id: string }>();
    const [resource, setResource] = useState<Resource | undefined>(undefined);

    useEffect(() => {
        if (id) {
            const found = resourcesData.find((item) => item.id === id);
            setResource(found);
        }
    }, [id]);

    // If no ID provided, show resources listing
    if (!id) {
        return (
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
                        <p className="text-lg text-gray-600 text-center mb-12">
                            Discover helpful guides and tips for sustainable travel and eco-tourism.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {resourcesData.map((resource) => (
                                <motion.div
                                    key={resource.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {resource.content.substring(0, 150)}...
                                        </p>
                                        {resource.author && resource.date && (
                                            <p className="text-sm text-gray-400 mb-4">
                                                By {resource.author} • {resource.date}
                                            </p>
                                        )}
                                        {resource.tags && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {resource.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <Link
                                            to={`/resources/${resource.id}`}
                                            className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Show individual resource detail
    if (!resource) {
        return (
            <div className="py-16 text-center text-gray-500">
                <p>Resource not found</p>
                <Link to="/resources" className="text-green-600 hover:text-green-700 underline mt-4 inline-block">
                    ← Back to Resources
                </Link>
            </div>
        );
    }

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <Link to="/resources" className="text-green-600 hover:text-green-700 underline mb-6 inline-block">
                        ← Back to Resources
                    </Link>
                    <h1 className="text-4xl font-bold mb-4 text-center">{resource.title}</h1>
                    {resource.author && resource.date && (
                        <p className="text-sm text-gray-400 text-center mb-6">
                            By {resource.author} • {resource.date}
                        </p>
                    )}
                    <article className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                        {resource.content}
                    </article>
                    {resource.tags && resource.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {resource.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Resources;
