import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingForm = () => {
  const [serviceType, setServiceType] = useState('Spare');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('2025-08-05');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const services = ['Self Drive', 'Spare Driver', 'Airport Transfer'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { serviceType, pickup, dropoff, date });
    setServiceType('Spare');
    setPickup('');
    setDropoff('');
    setDate('2025-08-05');
  };

  const handleServiceSelect = (service) => {
    setServiceType(service);
    setIsServiceDropdownOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto p-4 bg-black/60 backdrop-blur-md rounded-md shadow-lg border border-white/20"
    >
      <div className="space-y-4">
        {/* First Row: Custom Service Dropdown */}
        <div className="relative w-full">
          <div
            className="w-full px-4 py-3 rounded-md border border-white bg-white/5 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#39FF14] transition-all cursor-pointer flex items-center justify-between"
            onClick={(e) => {
              // Prevent dropdown from toggling when the link is clicked
              if (e.target.tagName !== 'A') {
                setIsServiceDropdownOpen(!isServiceDropdownOpen);
              }
            }}
          >
            <span className="text-white/80">Choose Service:</span>
            {serviceType === 'Spare Driver' ? (
              <a
                href="/spare-driver" // This is the new link
                className="font-semibold underline text-white"
                onClick={(e) => e.stopPropagation()} // Prevent parent div's onClick
              >
                {serviceType}
              </a>
            ) : (
              <span className="font-semibold">{serviceType}</span>
            )}
            <svg
              className={`w-6 h-6 text-white/50 transform transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <AnimatePresence>
            {isServiceDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-full bg-black/80 rounded-md border border-white/20 shadow-lg z-20"
              >
                {services.map((service) => (
                  <div
                    key={service}
                    className="px-4 py-3 text-white text-base cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Second Row: Pick Up, Drop Off, Date, Button */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Pick Up Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="px-4 py-3 rounded-md border border-white bg-white/5 text-white text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14] transition-all"
            aria-label="Pick Up Location"
          />
          <input
            type="text"
            placeholder="Drop Off Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="px-4 py-3 rounded-md border border-white bg-white/5 text-white text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#39FF14] transition-all"
            aria-label="Drop Off Location"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 rounded-md border border-white bg-white/5 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#39FF14] transition-all"
            aria-label="Pick Up Date"
          />
          <motion.button
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="bg-[#39FF14] text-black px-4 py-3 rounded-md font-semibold text-base transition-all duration-300 border border-white"
            aria-label="Find a Vehicle"
          >
            Find a Vehicle
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const BookingJourney = () => {
  const steps = [
    {
      step: 1,
      title: 'Fill the Required Details',
      description: 'Start your booking journey by providing all the necessary details such as pick-up and drop-off locations, dates, and preferred timings.',
    },
    {
      step: 2,
      title: 'Choose Your Vehicle',
      description: 'Browse through our wide selection of well-maintained cars, from compact hatchbacks to luxury SUVs.',
    },
    {
      step: 3,
      title: 'Confirm Your Booking',
      description: 'Review all your details carefully and proceed to confirm your booking.',
    },
    {
      step: 4,
      title: 'Sit Back & Relax',
      description: 'Now that your booking is confirmed, leave everything else to us! Our dedicated team ensures timely delivery of your chosen vehicle.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      className="mt-12 w-full max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: step.step * 0.2, ease: 'easeOut' }}
            className="bg-white/50 backdrop-blur-md p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow border border-white"
            role="region"
            aria-label={`Step ${step.step}: ${step.title}`}
          >
            <div className="mb-3 flex justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#39FF14] text-white font-bold text-xl">
                {step.step}
              </div>
            </div>
            <h4 className="text-base font-semibold text-white">{step.title}</h4>
            <p className="text-white mt-1 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const HeroSection = () => (
  <section
    className="min-h-screen flex flex-col items-center pt-32 justify-center bg-cover bg-center bg-no-repeat parallax relative"
    style={{
      backgroundImage: "url('https://hellodrive.co.in/assets/Herobg-CQKU2KC2.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-white/5"></div>
    <div className="container mx-auto px-4 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to HelloDrive</h1>
        <p className="text-lg md:text-xl text-white mb-6">Your trusted car rental platform for seamless travel</p>
      </motion.div>
      <BookingForm />
      <BookingJourney />
    </div>
  </section>
);

export default HeroSection;