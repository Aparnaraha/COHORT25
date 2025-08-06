// components/WhatsAppButton.jsx
import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed bottom-4 right-4 bg-[#25D366] text-[#FFFFF0] p-4 rounded-full shadow-lg hover:bg-[#F4CE14] transition-colors"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.548 4.104 1.504 5.854L0 24l6.297-1.504A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.44 17.63c-.303.854-1.793 1.637-2.644 1.793-.567.104-1.304.157-3.763-.793-3.156-1.224-5.18-4.327-5.337-4.536-.157-.208-1.304-1.693-1.304-3.229s.803-2.332 1.098-2.645c.295-.313.645-.392.854-.392.208 0 .417.104.6.157.183.052.417.52.625.803.208.287.417.625.495.677.078.052.157.104.26.183-.078.313-.287.677-.573 1.042-.287.365-.47.625-.678.833-.208.208-.417.417-.313.729.104.313.47.938.833 1.563.365.625.803 1.224 1.563 1.772.313.208.625.417.938.417.208 0 .417-.052.625-.157.208-.104.417-.313.73-.625.313-.313.625-.625.938-.625h.208c.313 0 .625.157.833.417.208.26.313.573.417.833.104.26.104.573-.104.833z" />
    </svg>
  </motion.a>
);

export default WhatsAppButton;
