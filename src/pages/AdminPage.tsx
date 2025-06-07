import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface AdminFormData {
  email: string;
  password: string;
}

interface Category {
  id: string;
  name: string;
}

export const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AdminFormData>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email === 'nihithpenumuchu07@gmail.com') {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  const onSubmit = async (data: AdminFormData) => {
    setLoading(true);
    setError(null);
    
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (signInError) throw signInError;

      // Verify admin email
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email !== 'nihithpenumuchu07@gmail.com') {
        await supabase.auth.signOut();
        throw new Error('Unauthorized access');
      }

      setIsLoggedIn(true);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('id, name')
          .order('name');
        
        if (error) throw error;
        
        setCategories(data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setCategoryError('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const toolData = {
        name: data.name,
        description: data.description,
        category_id: data.category_id,
        developer: data.developer,
        pricing_type: data.pricing_type,
        pricing_amount: data.pricing_amount ? parseFloat(data.pricing_amount) : null,
        features: data.features.split('\n').filter((f: string) => f.trim() !== ''),
        screenshots: data.screenshots.split('\n').filter((s: string) => s.trim() !== ''),
        video_url: data.video_url || null,
        website_url: data.website_url,
        release_date: data.release_date
      };

      const { error } = await supabase.from('tools').insert([toolData]);

      if (error) throw error;

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error('Error adding tool:', err);
      alert('Error adding tool: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Add New AI Tool</h2>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.developer.message as string}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.description.message as string}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-red-500 text-sm mt-1">{errors.category_id.message as string}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.release_date.message as string}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-red-500 text-sm mt-1">{errors.pricing_type.message as string}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.features.message as string}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.screenshots.message as string}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="text-red-500 text-sm mt-1">{errors.website_url.message as string}</p>
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
    </div>
  );
};