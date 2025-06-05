import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-75 animate-pulse-glow"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                <Compass 
                  size={32} 
                  className="text-primary-600 dark:text-primary-400 animate-float"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-gradient">
                InnovAI Compass
              </span>
            </motion.div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <motion.div 
              className="hidden md:flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/categories" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                About
              </Link>
            </motion.div>
            
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-yellow-300' 
                  : 'bg-gray-100 text-gray-700'
              } hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};