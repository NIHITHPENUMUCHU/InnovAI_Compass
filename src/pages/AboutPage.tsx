import React from 'react';
import { Mail, MessageSquare, Users } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About AI Tools Directory</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your trusted source for discovering and comparing the latest AI tools and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
          <MessageSquare className="mx-auto mb-4 text-blue-600" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Curated Content</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Carefully selected and reviewed AI tools to ensure quality and relevance.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Powered by user reviews and feedback to help you make informed decisions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
          <Mail className="mx-auto mb-4 text-blue-600" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Regular updates on new AI tools and industry developments.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We believe in the transformative power of artificial intelligence and its ability to enhance human capabilities. 
          Our mission is to make AI tools more accessible by providing comprehensive, unbiased information and practical 
          guidance for users at all skill levels.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};