// components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    "Instant Booking",
    "Door-to-Door Pickup",
    "Premium Cars",
    "24/7 Dedicated Support",
    "Reliable, Safe, On-Time Service",
    "Verified Drivers",
  ];

  return (
    <section
      className="py-16 bg-[#F5F7F8] parallax"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1920x1080?travel')",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#FFFFF0] text-center mb-8"
        >
          Why Choose HelloDrive
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#FFFFF0] p-4 rounded-lg shadow-lg text-center"
            >
              <p className="text-[#45474B] font-semibold">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
