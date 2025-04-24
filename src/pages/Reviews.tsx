import { motion } from 'framer-motion';
import { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        { name: 'Sanjeev', rating: 5, comment: 'Amazing experience! Highly recommend.' },
        { name: 'Ayesha', rating: 4, comment: 'Great service, beautiful destinations.' },
    ]);
    const [form, setForm] = useState({ name: '', rating: '', comment: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.name && form.rating && form.comment) {
            setReviews([...reviews, { ...form, rating: parseInt(form.rating) }]);
            setForm({ name: '', rating: '', comment: '' });
        }
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">User Reviews</h1>

                    {/* Review Submission Form */}
                    <form onSubmit={handleSubmit} className="mb-12 space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating (1–5)"
                            value={form.rating}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            min={1}
                            max={5}
                            required
                        />
                        <textarea
                            name="comment"
                            placeholder="Your review"
                            value={form.comment}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Submit Review
                        </button>
                    </form>

                    {/* Display Reviews */}
                    <div className="space-y-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="border p-4 rounded shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">{review.name}</h3>
                                    <span className="text-yellow-500">⭐ {review.rating}/5</span>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;
