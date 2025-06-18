import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/tools/SearchBar';
import { CategoryFilter } from '../components/tools/CategoryFilter';
import { ToolGrid } from '../components/tools/ToolGrid';
import { tools } from '../data/mockTools';
import { Tool } from '../types';
import { motion } from 'framer-motion';
import { FloatingCard, MorphingBlob, ParallaxElement, GlassMorphism } from '../components/ui/3DElements';
import { LoadingSpinner, CardSkeleton } from '../components/ui/LoadingSpinner';
import { useAnimateOnVisible } from '../hooks/useIntersectionObserver';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'rating' | 'updated'>('latest');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
          className="inline-block font-['KUSANAGI']"
          whileHover={{
            y: -8,
            scale: 1.1,
            color: 'var(--primary)',
            textShadow: '0 0 20px rgba(var(--primary-rgb), 0.5)',
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={-0.3} className="absolute top-20 left-10">
          <MorphingBlob 
            className="w-64 h-64" 
            color="var(--primary)" 
          />
        </ParallaxElement>
        <ParallaxElement speed={0.2} className="absolute bottom-20 right-10">
          <MorphingBlob 
            className="w-48 h-48" 
            color="var(--primary-light)" 
          />
        </ParallaxElement>
      </div>

      <div className="relative z-10 space-y-12 pt-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FloatingCard delay={0.2}>
            <GlassMorphism className="inline-block px-6 py-3 rounded-full mb-6">
              <span className="text-sm font-medium text-gradient font-['KUSANAGI']">
                Discover Next-Generation AI Tools
              </span>
            </GlassMorphism>
          </FloatingCard>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-gradient font-['KUSANAGI']">
              <HoverableText text="InnovAI" />
            </span>
            <span className="block text-[var(--text-primary)] font-['KUSANAGI'] mt-2">
              <HoverableText text="Compass" />
            </span>
          </h1>

          <FloatingCard delay={0.4}>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-['KUSANAGI'] font-medium">
              Navigate the future with precision. Discover cutting-edge AI tools that 
              <span className="text-gradient"> transform ideas into reality</span>.
            </p>
          </FloatingCard>

          <FloatingCard delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="btn-primary text-lg px-8 py-4 font-['KUSANAGI']">
                Explore Tools
              </button>
              <button className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all duration-300 font-['KUSANAGI'] font-semibold">
                Learn More
              </button>
            </div>
          </FloatingCard>
        </motion.div>

        {/* Search Section */}
        <FloatingCard delay={0.8} className="max-w-4xl mx-auto px-4">
          <GlassMorphism className="p-8 rounded-2xl">
            <SearchBar onSearch={setSearchQuery} />
          </GlassMorphism>
        </FloatingCard>
        
        {/* Filters Section */}
        <div className="max-w-7xl mx-auto px-4">
          <GlassMorphism className="p-6 rounded-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating' | 'updated')}
                className="px-4 py-3 rounded-xl bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] text-[var(--text-primary)] font-['KUSANAGI'] font-medium focus:border-[var(--primary)] focus:outline-none transition-colors duration-300"
              >
                <option value="latest">Latest Release</option>
                <option value="rating">Highest Rated</option>
                <option value="updated">Recently Updated</option>
              </select>
            </div>
          </GlassMorphism>
        </div>

        {/* Tools Grid Section */}
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <div className="animate-bounce-in">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-['KUSANAGI'] mb-4">
                  No Tools Found
                </h3>
                <p className="text-[var(--text-secondary)] text-lg font-['KUSANAGI']">
                  No AI tools found matching your search criteria.
                </p>
              </div>
            </div>
          ) : (
            <>
              <ToolGrid tools={currentTools} />
              
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <motion.button
                      key={i + 1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-6 py-3 rounded-xl font-['KUSANAGI'] font-semibold transition-all duration-300 ${
                        currentPage === i + 1
                          ? 'bg-[var(--primary)] text-white shadow-lg'
                          : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white'
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
      </div>
    </div>
  );
};