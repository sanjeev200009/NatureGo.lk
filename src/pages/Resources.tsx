import { useParams } from 'react-router-dom';
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

const ResourceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [resource, setResource] = useState<Resource | undefined>(undefined);

    useEffect(() => {
        const found = resourcesData.find((item) => item.id === id);
        setResource(found);
    }, [id]);

    if (!resource) {
        return (
            <div className="py-16 text-center text-gray-500">
                <p>Loading resource...</p>
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

export default ResourceDetail;
