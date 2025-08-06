import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({ backgroundColor: 'rgba(0,0,0,0.8)', boxShadow: '0 4px 20px rgba(57,255,20,0.3)', backdropFilter: 'blur(10px)' });
      } else {
        controls.start({ backgroundColor: 'rgba(0,0,0,0)', boxShadow: '0 0 0 rgba(0,0,0,0)', backdropFilter: 'blur(0px)' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Cars', path: '/cars' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const services = [
    { name: 'Self Drive', path: '/services/self-drive' },
    { name: 'Airport Pickup', path: '/services/airport-pickup' },
    { name: 'Corporate', path: '/services/corporate' },
    { name: 'VIP Booking', path: '/services/vip-booking' },
    { name: 'Wedding', path: '/services/wedding' },
    { name: 'Spare Driver', path: '/services/spare-driver' },
  ];

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
    hover: { color: '#39FF14', scale: 1.1, transition: { duration: 0.3 } },
  };

  const bookNowVariants = {
    rest: { 
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#39FF14',
      scale: 1,
      borderColor: '#39FF14',
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      transition: { duration: 0.3 } 
    },
    hover: { 
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: '#FFFFFF',
      scale: 1.05, 
      borderColor: '#39FF14',
      boxShadow: '0 0 20px rgba(57,255,20,0.6)',
      transition: { duration: 0.3 } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      animate={controls}
      className="fixed w-full top-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://hellodrive.co.in/assets/HelloDriveLogo-DihRt-C-.png"
            alt="HelloDrive Logo"
            className="h-12 filter brightness-200"
          />
        </motion.a>
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.path}
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={linkVariants}
              custom={index}
              className="text-white font-medium text-lg relative transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="relative">
            <motion.button onClick={toggleServices} className="text-white font-medium text-lg relative flex items-center transition-colors duration-300">
              Services
              <FaChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </motion.button>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black/80 backdrop-blur-md text-white rounded-xl shadow-lg w-56 overflow-hidden border border-gray-700"
              >
                {services.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.path}
                    className="flex items-center px-5 py-3 hover:bg-[#39FF14]/20 hover:text-[#39FF14] transition-all text-base font-medium"
                  >
                    {service.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        <motion.a
          href="#booking"
          variants={bookNowVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="hidden md:block px-6 py-2.5 rounded-xl font-bold text-lg border-2 transition-all duration-300"
        >
          Book Now
        </motion.a>
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:hidden bg-black/80 text-white px-6 py-6 backdrop-blur-lg shadow-lg border-t border-gray-700"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="block py-3 font-semibold text-lg hover:text-[#39FF14] transition-colors" onClick={toggleMenu}>
              {link.name}
            </a>
          ))}
          <motion.div>
            <button onClick={toggleServices} className="flex items-center py-3 font-semibold text-lg w-full hover:text-[#39FF14]">
              Services
              <FaChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pl-6 border-l-2 border-[#39FF14]/50"
              >
                {services.map((service) => (
                  <a key={service.name} href={service.path} className="block py-3 text-base hover:text-[#39FF14] transition-colors" onClick={toggleMenu}>
                    {service.name}
                  </a>
                ))}
              </motion.div>
            )}
          </motion.div>
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05, backgroundColor: '#39FF14', color: '#1A1A1A' }}
            whileTap={{ scale: 0.95 }}
            className="block mt-4 px-6 py-3 rounded-xl font-bold text-lg text-white text-center border-2 border-[#39FF14] transition-all"
            onClick={toggleMenu}
          >
            Book Now
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;