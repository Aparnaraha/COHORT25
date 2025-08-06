// components/FleetShowcase.jsx
import React from "react";
import { motion } from "framer-motion";

const FleetShowcase = () => {
  const cars = [
    {
      name: "Toyota Corolla",
      type: "Sedan",
      seats: 5,
      price12: 50,
      price24: 80,
      image: "https://source.unsplash.com/random/300x200?sedan",
    },
    {
      name: "Honda CR-V",
      type: "SUV",
      seats: 7,
      price12: 70,
      price24: 100,
      image: "https://source.unsplash.com/random/300x200?suv",
    },
    {
      name: "Maruti Ertiga",
      type: "MUV",
      seats: 7,
      price12: 60,
      price24: 90,
      image: "https://source.unsplash.com/random/300x200?muv",
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
          Our Fleet
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F5F7F8] p-4 rounded-lg shadow-lg"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">
                {car.name}
              </h3>
              <p className="text-[#379777]">
                {car.type} - {car.seats} Seats
              </p>
              <p className="text-[#45474B]">
                12hr: ${car.price12} | 24hr: ${car.price24}
              </p>
              <a
                href="/book-now"
                className="mt-4 inline-block bg-[#F4CE14] text-[#45474B] px-4 py-2 rounded-full hover:bg-[#379777] hover:text-[#FFFFF0] transition-colors"
              >
                Rent Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
