import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-12 h-12 rounded-xl overflow-hidden"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="50%" stopColor="var(--primary-light)" />
              <stop offset="100%" stopColor="var(--primary-dark)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Ring */}
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Inner AI Symbol */}
          <g transform="translate(12, 12)">
            {/* A */}
            <motion.path
              d="M4 20 L8 8 L12 20 M6 16 L10 16"
              stroke="url(#logoGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* I */}
            <motion.path
              d="M16 8 L20 8 M18 8 L18 20 M16 20 L20 20"
              stroke="url(#logoGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </g>
          
          {/* Navigation Compass Points */}
          <g>
            <motion.circle
              cx="24"
              cy="8"
              r="2"
              fill="var(--primary)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            <motion.circle
              cx="40"
              cy="24"
              r="2"
              fill="var(--primary-light)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
            <motion.circle
              cx="24"
              cy="40"
              r="2"
              fill="var(--primary-dark)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
            <motion.circle
              cx="8"
              cy="24"
              r="2"
              fill="var(--primary)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
          </g>
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1 className="text-2xl font-black font-kusanagi">
          <span className="text-[var(--text-innovai)]">Innov</span>
          <span className="text-[var(--primary)]">AI</span>
        </h1>
        <p className="text-xs text-[var(--text-secondary)] font-kusanagi tracking-wider">
          COMPASS
        </p>
      </motion.div>
    </motion.div>
  );
};