import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const services = ['Self Drive', 'Airport', 'Corporate', 'Marriage', 'VIP', 'Spare Driver'];
  const quickLinks = ['Home', 'About', 'Cars', 'Contact', 'FAQ', 'Blog'];

  return (
    <footer className="bg-[#45474B] text-[#FFFFF0] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">HelloDrive</h3>
            <p className="text-[#F5F7F8]">
              Hello Drive is a top-rated self-drive car rental service provider in Odisha. Our goal is to offer well-maintained cars at reasonable prices and provide hassle-free services to our customers. Contact us for a comfortable and memorable ride.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                    className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#F5F7F8] font-semibold">Address:</p>
                <p className="text-[#379777]">
                  HIG-C/98, HB Colony, Baramunda, Bhubaneswar, Odisha, India
                </p>
                <p className="text-[#379777]">
                  Plot No. - 440, Swarnapuri Road, Kanan Vihar Phase - 2, Patia, Bhubaneswar, Odisha, Pincode-751024
                </p>
              </div>
              <div>
                <p className="text-[#F5F7F8] font-semibold">Phone:</p>
                <p className="text-[#379777]">+91 8926116060</p>
                <p className="text-[#379777]">+91 9090375666</p>
              </div>
              <div>
                <p className="text-[#F5F7F8] font-semibold">Email:</p>
                <p className="text-[#379777]">
                  <a href="mailto:hellodrive60@gmail.com" className="hover:text-[#F4CE14] transition-colors">
                    hellodrive60@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Network and Blogs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 border-t border-[#F5F7F8]/20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Social Network</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.41 3.58 8.04 8 8.86v-6.27H7.5v-2.59H10v-1.98c0-2.48 1.49-3.84 3.75-3.84 1.07 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.86h2.72l-.43 2.59h-2.29v6.27c4.42-.82 8-4.45 8-8.86 0-5.5-4.5-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-7h-2.4v-2.8h2.4v-2.1c0-2.38 1.42-3.7 3.6-3.7 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.73-1.52 1.48v1.84h2.7l-.43 2.8h-2.27v7c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15.5c-.83 1.15-2.18 2-3.67 2.33a7.94 7.94 0 01-8.66-2.33c-.68-.95-1.17-2.05-1.37-3.25h2.24c.14.75.43 1.45.85 2.05 1.12 1.6 3.05 2.7 5.43 2.7s4.31-1.1 5.43-2.7c.42-.6.71-1.3.85-2.05h2.24c-.2 1.2-.69 2.3-1.37 3.25zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Latest Blogs</h3>
            <p className="text-[#F5F7F8]">
              Stay tuned for travel tips, car rental guides, and more!
            </p>
            <a
              href="/blog"
              className="mt-2 inline-block text-[#F4CE14] hover:text-[#379777] transition-colors"
            >
              Explore Blog
            </a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 border-t border-[#F5F7F8]/20 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-[#F5F7F8]">
              Approved by{' '}
              <span className="text-[#379777]">
                Ministry of Tourism, Govt. of India
              </span>{' '}
              &{' '}
              <span className="text-[#379777]">
                Department of Tourism, Govt. of Odisha (India)
              </span>
            </p>
            <a href="#" className="text-[#F4CE14] hover:text-[#379777] transition-colors">
              Tourism India
            </a>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/help" className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors">
              Help & Support
            </a>
            <span className="text-[#F5F7F8]">|</span>
            <a href="/faq" className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors">
              FAQs
            </a>
          </div>
          <p className="mt-4 text-[#F5F7F8]">
            Copyright © 2025 - Hello Drive
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;