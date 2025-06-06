import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const Logo = () => {
  return (
    <motion.div
      animate={{ 
        rotate: 360
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
      className="relative w-10 h-10"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur opacity-75"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
        <Compass
          size={24}
          className="text-primary-600 dark:text-primary-400"
        />
      </div>
    </motion.div>
  );
};