import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { apiClient } from '../lib/supabase';

interface AdminFormData {
  email: string;
  password: string;
}

interface Category {
  id: string;
  name: string;
}

interface ToolFormData {
  name: string;
  description: string;
  category_id: string;
  developer: string;
  pricing_type: string;
  pricing_amount?: number;
  features: string;
  screenshots: string;
  video_url?: string;
  website_url: string;
  release_date: string;
  rating?: number;
  review_count?: number;
}

export const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AdminFormData>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (isAuthenticated) {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = async (data: AdminFormData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simple admin authentication - in production this should use proper authentication
      if (data.email === 'nihithpenumuchu07@gmail.com' && data.password === 'admin123') {
        localStorage.setItem('adminAuthenticated', 'true');
        setIsLoggedIn(true);
        setError(null);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('adminAuthenticated');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <ToolManagement onLogout={handleLogout} />;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter admin email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

interface ToolManagementProps {
  onLogout: () => void;
}

const ToolManagement: React.FC<ToolManagementProps> = ({ onLogout }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ToolFormData>();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiClient.get('/categories');
        setCategories(data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setCategoryError('Failed to load categories');
      }
    };

    const fetchTools = async () => {
      try {
        const data = await apiClient.get('/tools');
        setTools(data || []);
      } catch (err) {
        console.error('Error fetching tools:', err);
      }
    };

    fetchCategories();
    fetchTools();
  }, []);

  const onSubmit = async (data: ToolFormData) => {
    setLoading(true);
    try {
      const toolData = {
        name: data.name,
        description: data.description,
        categoryId: data.category_id,
        developer: data.developer,
        pricingType: data.pricing_type,
        pricingAmount: data.pricing_amount ? data.pricing_amount.toString() : null,
        features: data.features.split('\n').filter((f: string) => f.trim() !== ''),
        screenshots: data.screenshots.split('\n').filter((s: string) => s.trim() !== ''),
        videoUrl: data.video_url || null,
        websiteUrl: data.website_url,
        releaseDate: data.release_date,
        rating: data.rating ? data.rating.toString() : "0",
        reviewCount: data.review_count || 0
      };

      await apiClient.post('/tools', toolData);

      setSuccess(true);
      reset();
      
      // Refresh tools list
      const newTools = await apiClient.get('/tools');
      setTools(newTools || []);
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error('Error adding tool:', err);
      alert('Error adding tool: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Add New AI Tool</h2>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Tool Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tool Details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tool Name *
                </label>
                <input
                  {...register('name', { required: 'Tool name is required' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., ChatGPT"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Developer *
                </label>
                <input
                  {...register('developer', { required: 'Developer is required' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., OpenAI"
                />
                {errors.developer && (
                  <p className="text-red-500 text-sm mt-1">{errors.developer.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description *
              </label>
              <textarea
                {...register('description', { required: 'Description is required' })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Include release date and detailed description..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category *
                </label>
                {categoryError ? (
                  <p className="text-red-500 text-sm">{categoryError}</p>
                ) : (
                  <select
                    {...register('category_id', { required: 'Category is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                )}
                {errors.category_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.category_id.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Release Date *
                </label>
                <input
                  type="date"
                  {...register('release_date', { required: 'Release date is required' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.release_date && (
                  <p className="text-red-500 text-sm mt-1">{errors.release_date.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Pricing Type *
                </label>
                <select
                  {...register('pricing_type', { required: 'Pricing type is required' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select pricing type</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="paid">Paid</option>
                </select>
                {errors.pricing_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.pricing_type.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Pricing Amount (optional)
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register('pricing_amount')}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., 20.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  {...register('rating')}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., 4.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Review Count
                </label>
                <input
                  type="number"
                  {...register('review_count')}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., 1500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Features (one per line) *
              </label>
              <textarea
                {...register('features', { required: 'Features are required' })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              />
              {errors.features && (
                <p className="text-red-500 text-sm mt-1">{errors.features.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Screenshots URLs (one per line) *
              </label>
              <textarea
                {...register('screenshots', { required: 'Screenshots are required' })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
              />
              {errors.screenshots && (
                <p className="text-red-500 text-sm mt-1">{errors.screenshots.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Video URL (optional)
                </label>
                <input
                  {...register('video_url')}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Website URL *
                </label>
                <input
                  {...register('website_url', { required: 'Website URL is required' })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://example.com"
                />
                {errors.website_url && (
                  <p className="text-red-500 text-sm mt-1">{errors.website_url.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding Tool...' : 'Add Tool'}
            </button>

            {success && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-600 dark:text-green-400 text-center font-medium">
                  Tool added successfully! 🎉
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Tools List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Tools</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {tools.map((tool) => (
              <div key={tool.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Developer: {tool.developer}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Category: {tool.categories?.name || 'N/A'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Rating: {tool.rating}/5 ({tool.review_count} reviews)
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Added: {new Date(tool.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};