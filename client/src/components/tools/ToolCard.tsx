import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/tool/${tool.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden card-hover shadow-lg">
          <div className="relative">
            <img 
              src={tool.screenshots[0]} 
              alt={tool.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {tool.name}
              </h3>
              <span className="flex items-center text-yellow-500">
                <Star size={16} className="fill-current" />
                <span className="ml-1 text-sm">{tool.rating}</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {tool.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                {tool.pricing.type === 'free' ? 'Free' : `From ${tool.pricing.startingPrice}`}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {tool.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};