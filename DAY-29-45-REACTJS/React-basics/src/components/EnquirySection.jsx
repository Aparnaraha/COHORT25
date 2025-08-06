import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EnquirySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for WhatsApp inquiry (e.g., redirect to WhatsApp)
    const whatsappUrl = `https://wa.me/918926116060?text=Inquiry%20from%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
    window.open(whatsappUrl, '_blank');
    // Reset form
    setName('');
    setEmail('');
    setWhatsapp('');
  };

  return (
    <section className="py-16 bg-[#F5F7F8] parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#FFFFF0] text-center mb-8"
        >
          Reach Out, We're Here!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#FFFFF0] text-center mb-12"
        >
          We're dedicated to serving you across the city. Discover our locations below or send us a quick inquiry!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFF0] p-6 md:p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-[#45474B] mb-6">Locate Us Easily</h3>
            <p className="text-[#45474B] mb-4">We're available throughout your city. Find our nearest hub or office on the map below and reach out to us anytime!</p>
            <div className="space-y-4">
              <div>
                <p className="text-[#45474B] font-semibold">Address 1:</p>
                <p className="text-[#379777]">HIG-C/98, HB Colony, Baramunda, Bhubaneswar, Odisha, India</p>
              </div>
              <div>
                <p className="text-[#45474B] font-semibold">Address 2:</p>
                <p className="text-[#379777]">Plot No. - 440, Swarnapuri Road, Kanan Vihar Phase - 2, Patia, Bhubaneswar, Odisha, Pincode-751024</p>
              </div>
              <div>
                <p className="text-[#45474B] font-semibold">Phone:</p>
                <p className="text-[#379777]">+91 8926116060, +91 9090375666</p>
              </div>
              <div>
                <p className="text-[#45474B] font-semibold">Email:</p>
                <p className="text-[#379777]">hellodrive60@gmail.com</p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#45474B] mb-6">Quick Inquiry</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#379777] bg-[#F5F7F8] text-[#45474B] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] transition-all"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#379777] bg-[#F5F7F8] text-[#45474B] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] transition-all"
              />
              <input
                type="text"
                placeholder="WhatsApp Number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#379777] bg-[#F5F7F8] text-[#45474B] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="w-full bg-[#F4CE14] text-[#45474B] px-6 py-3 rounded-lg font-semibold hover:bg-[#379777] hover:text-[#FFFFF0] transition-all"
              >
                Send Inquiry via WhatsApp
              </motion.button>
            </div>
          </motion.div>
          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFF0] p-6 md:p-8 rounded-2xl shadow-2xl"
          >
            
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1411392954846!2d85.81613831540273!3d20.296059986395947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ1LjgiTiA4NcKwNDknMDQuMSJF!5e0!3m2!1sen!2sin!4v1634567890123"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;