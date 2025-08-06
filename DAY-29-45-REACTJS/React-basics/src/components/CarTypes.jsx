// components/CarTypes.jsx
import React from "react";
import { motion } from "framer-motion";

const CarTypes = () => {
  const types = [
    {
      name: "SUV",
      description: "Comfort, style, perfect for family travel",
      image: "https://source.unsplash.com/random/300x200?suv",
    },
    {
      name: "Sedan",
      description: "Great mileage and comfort",
      image: "https://source.unsplash.com/random/300x200?sedan",
    },
    {
      name: "Hatchback",
      description: "Compact and economical",
      image: "https://source.unsplash.com/random/300x200?hatchback",
    },
    {
      name: "MUV",
      description: "Ideal for group travel with AC",
      image: "https://source.unsplash.com/random/300x200?muv",
    },
    {
      name: "Wagon",
      description: "Spacious for luggage",
      image: "https://source.unsplash.com/random/300x200?wagon",
    },
  ];

  return (
    <section
      className="py-16 bg-[#F5F7F8] parallax"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1920x1080?road')",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#FFFFF0] text-center mb-8"
        >
          Explore Our Car Types
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#FFFFF0] p-4 rounded-lg shadow-lg"
            >
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">
                {type.name}
              </h3>
              <p className="text-[#379777]">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTypes;
