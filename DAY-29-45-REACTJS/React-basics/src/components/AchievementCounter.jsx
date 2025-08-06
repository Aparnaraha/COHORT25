import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaShieldAlt, FaCar } from 'react-icons/fa';

const AchievementCounter = () => {
  const [happyRiders, setHappyRiders] = useState(0);
  const [services, setServices] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };

    animateCounter(setHappyRiders, 5000, 2000);
    animateCounter(setServices, 5, 2000);
  }, []);

  const achievements = [
    {
      title: 'Happy Riders',
      value: `${happyRiders}+`,
      icon: <FaUsers className="w-10 h-10 text-[#F4CE14]" />,
    },
    {
      title: 'Service Availability',
      value: '24/7',
      icon: <FaClock className="w-10 h-10 text-[#F4CE14]" />,
    },
    {
      title: 'Safe & Verified Drivers',
      value: '100%',
      icon: <FaShieldAlt className="w-10 h-10 text-[#F4CE14]" />,
    },
    {
      title: 'Cab Services Offered',
      value: `${services}+`,
      icon: <FaCar className="w-10 h-10 text-[#F4CE14]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#F5F7F8]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#45474B] text-center mb-12"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#FFFFF0] p-6 rounded-2xl shadow-lg text-center counter"
              role="region"
              aria-label={achievement.title}
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-semibold text-[#379777] mb-2">{achievement.value}</h3>
              <p className="text-[#45474B]">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCounter;  