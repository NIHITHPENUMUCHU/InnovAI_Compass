import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { tools } from '../data/mockTools';
import { categories } from '../data/mockCategories';
import { Tool, Category } from '../types';
import { SearchBar } from '../components/tools/SearchBar';
import { ToolGrid } from '../components/tools/ToolGrid';
import { FloatingCard, GlassMorphism } from '../components/ui/3DElements';
import { LoadingSpinner, CardSkeleton } from '../components/ui/LoadingSpinner';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';

export const CategoryPage = () => {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let filtered = tools;

    if (selectedCategory) {
      filtered = tools.filter(tool => tool.category.id === selectedCategory.id);
    }

    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.developer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const CategoryCard = ({ category }: { category: Category }) => (
    <motion.div
      className={`card-gradient p-6 cursor-pointer transition-all duration-300 ${
        selectedCategory?.id === category.id ? 'ring-2 ring-[var(--primary)]' : ''
      }`}
      onClick={() => handleCategorySelect(category)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-[var(--primary-gradient)] rounded-xl flex items-center justify-center text-white text-2xl font-kusanagi">
          {category.name.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] font-kusanagi">
          {category.name}
        </h3>
        <p className="text-[var(--text-secondary)] font-kusanagi">
          {category.description}
        </p>
        <div className="text-sm text-[var(--primary)] font-kusanagi font-semibold">
          {tools.filter(tool => tool.category.id === category.id).length} tools
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <GradientOrb className="w-80 h-80 top-10 right-10" delay={0} />
        <GradientOrb className="w-60 h-60 bottom-10 left-10" delay={3} />
      </div>

      <div className="relative z-10 py-20">
        {/* Header Section */}
        <motion.section 
          className="text-center mobile-padding mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingCard delay={0.2}>
            <GlassMorphism className="inline-block px-6 py-3 rounded-full mb-8">
              <span className="text-sm font-medium text-gradient font-kusanagi">
                Explore AI Categories
              </span>
            </GlassMorphism>
          </FloatingCard>

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-[var(--text-primary)] font-kusanagi">
            AI Tool Categories
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-kusanagi">
            Discover AI tools organized by categories to find exactly what you need
          </p>
        </motion.section>

        {/* Search Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-12">
          <FloatingCard delay={0.4}>
            <GlassMorphism className="p-8 rounded-2xl">
              <div className="search-enhanced">
                <SearchBar onSearch={handleSearch} />
              </div>
            </GlassMorphism>
          </FloatingCard>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto mobile-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] font-kusanagi mb-8 text-center">
              Browse by Category
            </h2>
            <div className="mobile-grid">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected Category Tools */}
        {selectedCategory && (
          <section className="max-w-7xl mx-auto mobile-padding mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] font-kusanagi">
                  {selectedCategory.name} Tools
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="btn-primary px-6 py-3 font-kusanagi"
                >
                  View All Categories
                </button>
              </div>

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
                      No tools found in this category matching your search.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <ToolGrid tools={filteredTools} />
              )}
            </motion.div>
          </section>
        )}

        {/* All Tools Section */}
        {!selectedCategory && (
          <section className="max-w-7xl mx-auto mobile-padding mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] font-kusanagi mb-8 text-center">
                {searchQuery ? 'Search Results' : 'All AI Tools'}
              </h2>

              {loading ? (
                <div className="mobile-grid">
                  {Array.from({ length: 9 }).map((_, i) => (
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
                <ToolGrid tools={filteredTools} />
              )}
            </motion.div>
          </section>
        )}
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};