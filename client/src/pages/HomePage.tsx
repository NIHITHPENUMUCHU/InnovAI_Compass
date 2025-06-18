import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { tools } from '../data/mockTools';
import { Tool } from '../types';
import { SearchBar } from '../components/tools/SearchBar';
import { CategoryFilter } from '../components/tools/CategoryFilter';
import { ToolGrid } from '../components/tools/ToolGrid';
import { FloatingCard, MorphingBlob, ParallaxElement, GlassMorphism } from '../components/ui/3DElements';
import { LoadingSpinner, CardSkeleton } from '../components/ui/LoadingSpinner';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';

export const HomePage = () => {
  const [, setLocation] = useLocation();
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
        tool.developer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? tool.category.id === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });

    // Sort tools
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'updated') {
      filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
    } else {
      filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    }

    setFilteredTools(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  const handleExploreTools = () => {
    setLocation('/categories');
  };

  const handleLearnMore = () => {
    setLocation('/about');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const VisibleText = ({ text, useInnovaiColor = false }: { text: string; useInnovaiColor?: boolean }) => (
    <div className="flex flex-wrap justify-center">
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block font-kusanagi"
          style={{ color: useInnovaiColor ? 'var(--text-innovai)' : 'var(--primary)' }}
          whileHover={{
            y: -8,
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <GradientOrb className="w-96 h-96 top-20 left-10" delay={0} />
        <GradientOrb className="w-64 h-64 bottom-20 right-10" delay={2} />
        <GradientOrb className="w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" delay={4} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="text-center py-20 mobile-padding"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FloatingCard delay={0.2}>
            <GlassMorphism className="inline-block px-6 py-3 rounded-full mb-8">
              <span className="text-sm font-medium text-gradient font-kusanagi">
                Discover Next-Generation AI Tools
              </span>
            </GlassMorphism>
          </FloatingCard>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
              <div className="font-kusanagi mb-2">
                <VisibleText text="InnovAI" useInnovaiColor={true} />
              </div>
              <div className="font-kusanagi">
                <VisibleText text="Compass" useInnovaiColor={false} />
              </div>
            </h1>
          </div>

          <FloatingCard delay={0.4}>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-kusanagi font-medium mt-8">
              Navigate the future with precision. Discover cutting-edge AI tools that 
              <span className="text-gradient"> transform ideas into reality</span>.
            </p>
          </FloatingCard>

          <FloatingCard delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button 
                onClick={handleExploreTools}
                className="btn-primary text-lg px-8 py-4 font-kusanagi"
              >
                Explore Tools
              </button>
              <button 
                onClick={handleLearnMore}
                className="gradient-border"
              >
                <div className="gradient-border-inner">
                  <span className="font-kusanagi font-semibold text-[var(--primary)]">
                    Learn More
                  </span>
                </div>
              </button>
            </div>
          </FloatingCard>
        </motion.section>

        {/* Search Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-12">
          <FloatingCard delay={0.8}>
            <GlassMorphism className="p-8 rounded-2xl">
              <div className="search-enhanced">
                <SearchBar onSearch={handleSearch} />
              </div>
            </GlassMorphism>
          </FloatingCard>
        </section>
        
        {/* Filters Section */}
        <section className="max-w-7xl mx-auto mobile-padding mb-12">
          <motion.div 
            className="animate-slide-up"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <GlassMorphism className="p-6 rounded-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
                <div className="gradient-border">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating' | 'updated')}
                    className="gradient-border-inner bg-transparent border-none outline-none font-kusanagi font-medium text-[var(--text-primary)]"
                  >
                    <option value="latest">Latest Release</option>
                    <option value="rating">Highest Rated</option>
                    <option value="updated">Recently Updated</option>
                  </select>
                </div>
              </div>
            </GlassMorphism>
          </motion.div>
        </section>

        {/* Tools Grid Section */}
        <section className="max-w-7xl mx-auto mobile-padding mb-20">
          {loading ? (
            <div className="mobile-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : filteredTools.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="animate-bounce-in">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-kusanagi mb-4">
                  No Tools Found
                </h3>
                <p className="text-[var(--text-secondary)] text-lg font-kusanagi">
                  No AI tools found matching your search criteria.
                </p>
              </div>
            </motion.div>
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
                      className={`px-6 py-3 rounded-xl font-kusanagi font-semibold transition-all duration-300 ${
                        currentPage === i + 1
                          ? 'btn-primary'
                          : 'card-gradient text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};