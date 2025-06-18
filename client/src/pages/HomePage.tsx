import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/tools/SearchBar';
import { CategoryFilter } from '../components/tools/CategoryFilter';
import { ToolGrid } from '../components/tools/ToolGrid';
import { tools } from '../data/mockTools';
import { Tool } from '../types';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'rating' | 'updated'>('latest');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 15;

  useEffect(() => {
    let filtered = tools.filter((tool) => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory = !selectedCategory || tool.category.id === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered = filtered.sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'updated') {
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
      return 0;
    });

    setFilteredTools(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  const HoverableText = ({ text }: { text: string }) => (
    <div className="flex flex-wrap justify-center">
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          whileHover={{
            y: -5,
            color: '#06b6d4',
            transition: { duration: 0.2 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <motion.div 
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <HoverableText text="Navigate the Future with InnovAI Compass" />
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your guide to discovering cutting-edge AI tools that shape tomorrow's innovation.
        </p>
      </motion.div>

      <SearchBar onSearch={setSearchQuery} />
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating' | 'updated')}
          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
        >
          <option value="latest">Latest Release</option>
          <option value="rating">Highest Rated</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No AI tools found matching your search criteria.
          </p>
        </div>
      ) : (
        <>
          <ToolGrid tools={currentTools} />
          
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i + 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === i + 1
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};