// components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing service, on-time and reliable!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Loved the premium cars and support.",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFFF0]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#45474B] text-center mb-8"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
            >
              <p className="text-[#45474B]">{review.comment}</p>
              <p className="text-[#379777] mt-2">
                {review.name} - {review.rating} Stars
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
