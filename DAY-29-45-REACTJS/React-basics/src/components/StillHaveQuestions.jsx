import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const StillHaveQuestions = () => {
  return (
    <section className="py-16 bg-[#FFFFF0]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#45474B] text-center mb-8"
        >
          Still Have Questions?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#45474B] text-center mb-12 space-y-4"
        >
          <p>Our support team is here to help you 24/7. Reach out through any of these channels and we'll get back to you as soon as possible.</p>
          <p><strong>24/7 Support</strong> <strong>Fast Response</strong> <strong>Expert Team</strong> </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F7F8] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            role="region"
            aria-label="Call Us"
          >
            <h3 className="text-xl font-semibold text-[#45474B] mb-2 flex items-center justify-center">
              <FaPhone className="w-5 h-5 mr-2 text-[#379777]" /> Call Us
            </h3>
            <p className="text-[#379777] mb-4">+91 9090375666</p>
            <a
              href="tel:+919090375666"
              className="inline-block bg-[#F4CE14] text-[#45474B] px-4 py-2 rounded-lg font-semibold hover:bg-[#379777] hover:text-[#FFFFF0] transition-all"
              aria-label="Call +91 9090375666"
            >
              Call Now →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F5F7F8] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            role="region"
            aria-label="Email Us"
          >
            <h3 className="text-xl font-semibold text-[#45474B] mb-2 flex items-center justify-center">
              <FaEnvelope className="w-5 h-5 mr-2 text-[#379777]" /> Email Us
            </h3>
            <p className="text-[#379777] mb-4">hellodrive60@gmail.com</p>
            <a
              href="mailto:hellodrive60@gmail.com"
              className="inline-block bg-[#F4CE14] text-[#45474B] px-4 py-2 rounded-lg font-semibold hover:bg-[#379777] hover:text-[#FFFFF0] transition-all"
              aria-label="Email hellodrive60@gmail.com"
            >
              Send Email →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F5F7F8] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            role="region"
            aria-label="WhatsApp"
          >
            <h3 className="text-xl font-semibold text-[#45474B] mb-2 flex items-center justify-center">
              <FaWhatsapp className="w-5 h-5 mr-2 text-[#379777]" /> WhatsApp
            </h3>
            <p className="text-[#379777] mb-4">Available 24/7</p>
            <a
              href="https://wa.me/919090375666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F4CE14] text-[#45474B] px-4 py-2 rounded-lg font-semibold hover:bg-[#379777] hover:text-[#FFFFF0] transition-all"
              aria-label="Start WhatsApp chat"
            >
              Start Chat →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StillHaveQuestions;