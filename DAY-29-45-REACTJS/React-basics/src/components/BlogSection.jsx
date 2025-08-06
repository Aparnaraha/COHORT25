// components/BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => (
  <section className="py-16 bg-[#F5F7F8]">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#45474B] text-center mb-8"
      >
        Our Blog
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#45474B] mb-4">
          Stay tuned for travel tips, car rental guides, and more!
        </p>
        <a
          href="/blog"
          className="bg-[#F4CE14] text-[#45474B] px-6 py-3 rounded-full font-semibold hover:bg-[#379777] hover:text-[#FFFFF0] transition-colors"
        >
          Explore Blog
        </a>
      </motion.div>
    </div>
  </section>
);

export default BlogSection;
