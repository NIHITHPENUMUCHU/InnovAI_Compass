import React from 'react';
import { categories } from '../data/mockCategories';
import { tools } from '../data/mockTools';
import { ToolGrid } from '../components/tools/ToolGrid';
import { SearchBar } from '../components/tools/SearchBar';

export const CategoryPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Categories</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Browse AI tools by category to find the perfect solution for your needs.
        </p>
      </div>

      <SearchBar onSearch={setSearchQuery} />

      <div className="space-y-12">
        {categories.map((category) => {
          const categoryTools = tools
            .filter((tool) => 
              tool.category.id === category.id &&
              (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );

          if (categoryTools.length === 0) return null;

          return (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h2>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                  {categoryTools.length} tools
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              <ToolGrid tools={categoryTools} />
            </div>
          );
        })}
      </div>
    </div>
  );
};