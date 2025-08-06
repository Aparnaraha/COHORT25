// components/Compliance.jsx
import React from "react";
import { motion } from "framer-motion";

const Compliance = () => (
  <section className="py-16 bg-[#FFFFF0]">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-[#45474B] text-center mb-8"
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
        >
          <p className="text-[#45474B]">Ministry of Tourism, Govt. of India</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
        >
          <p className="text-[#45474B]">Department of Tourism, Odisha</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
        >
          <p className="text-[#45474B]">ISO Certified</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Compliance;
