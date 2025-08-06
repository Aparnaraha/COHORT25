// components/BookingForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const BookingForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");

  return (
    <section className="py-16 bg-[#F5F7F8]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#45474B] text-center mb-8"
        >
          Book Your Ride
        </motion.h2>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFF0] p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          >
            <option value="">Select Service</option>
            <option value="self-drive">Self Drive</option>
            <option value="spare-driver">Spare Driver</option>
            <option value="airport-transfer">Airport Transfer</option>
          </select>
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Drop-off Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <a
            href="/choose-vehicle"
            className="bg-[#379777] text-[#FFFFF0] px-6 py-3 rounded-full font-semibold hover:bg-[#F4CE14] hover:text-[#45474B] transition-colors"
          >
            Choose Vehicle
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
