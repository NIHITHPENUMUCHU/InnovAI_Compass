import React from 'react';
import { useRoute } from 'wouter';
import { RatingStars } from '../components/tools/RatingStars';
import { tools } from '../data/mockTools';
import { ExternalLink, Calendar } from 'lucide-react';

export const ToolDetailsPage = () => {
  const [match, params] = useRoute('/tool/:id');
  const tool = tools.find((t) => t.id === params?.id);

  if (!tool) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tool not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{tool.name}</h1>
            <div className="flex items-center space-x-4">
              <RatingStars rating={tool.rating} size={20} />
              <span className="text-gray-600 dark:text-gray-300">({tool.reviewCount} reviews)</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              Visit Website
            </a>
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              <Calendar size={16} className="mr-2" />
              Last updated: {new Date(tool.lastUpdated).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Features</h2>
          <ul className="space-y-2">
            {tool.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pricing</h2>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Type:</span> {tool.pricing.type}
            </p>
            {tool.pricing.startingPrice && (
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Starting from:</span> {tool.pricing.startingPrice}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Use</h2>
        <div className="space-y-8">
          {tool.tutorialSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              {step.imageUrl && (
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full md:w-1/2 rounded-lg object-cover"
                />
              )}
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tool.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`${tool.name} screenshot ${index + 1}`}
              className="rounded-lg w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};