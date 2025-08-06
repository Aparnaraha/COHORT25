// components/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <section
      className="py-16 bg-[#F5F7F8] parallax"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1920x1080?contact')",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#FFFFF0] text-center mb-8"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFFFF0] p-4 rounded-lg shadow-lg"
          >
            <p className="text-[#45474B]">
              <strong>Phone:</strong> +91-1234567890
            </p>
            <p className="text-[#45474B]">
              <strong>WhatsApp:</strong> +91-9876543210
            </p>
            <p className="text-[#45474B]">
              <strong>Email:</strong> support@hellodrive.com
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FFFFF0] p-4 rounded-lg shadow-lg"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded"
            />
            <input
              type="text"
              placeholder="WhatsApp Number"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-3 mb-4 border rounded"
            />
            <button className="bg-[#379777] text-[#FFFFF0] px-6 py-3 rounded-full font-semibold hover:bg-[#F4CE14] hover:text-[#45474B] transition-colors">
              Submit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
