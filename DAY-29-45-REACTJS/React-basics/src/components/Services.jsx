// components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Self-Drive Rentals",
      description: "Drive yourself with our premium cars",
    },
    {
      name: "Airport Transfers",
      description: "Hassle-free airport pickups and drop-offs",
    },
    {
      name: "Corporate Bookings",
      description: "Professional travel solutions for businesses",
    },
    {
      name: "Wedding Car Rentals",
      description: "Luxury cars for your special day",
    },
    {
      name: "Spare Driver Services",
      description: "Professional drivers for your convenience",
    },
    {
      name: "VIP Transport Services",
      description: "Exclusive travel for VIPs",
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
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#45474B]">
                {service.name}
              </h3>
              <p className="text-[#379777]">{service.description}</p>
              <a
                href="/services"
                className="mt-4 inline-block text-[#F4CE14] hover:text-[#379777] transition-colors"
              >
                Know More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
