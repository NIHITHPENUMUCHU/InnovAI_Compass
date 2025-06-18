import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <motion.div 
        className="relative search-enhanced"
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] w-5 h-5 z-10" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search AI tools, categories, or developers..."
          className="w-full pl-12 pr-4 py-4 text-lg bg-transparent border-none outline-none font-kusanagi text-[var(--text-primary)] placeholder-[var(--text-secondary)] relative z-10"
        />
        
        {/* Typing Animation Effect */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ background: 'transparent' }}
            animate={{
              background: [
                'transparent',
                'linear-gradient(90deg, transparent 0%, rgba(196, 108, 69, 0.05) 50%, transparent 100%)',
                'transparent'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    </form>
  );
};