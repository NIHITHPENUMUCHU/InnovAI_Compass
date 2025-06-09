import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Tool } from '../types';

export const useTools = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTools = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tools')
        .select(`
          *,
          categories (
            id,
            name,
            icon,
            description
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedTools: Tool[] = (data || []).map((tool: any) => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        category: tool.categories || { id: '', name: 'Unknown', icon: 'help-circle', description: '' },
        developer: tool.developer,
        pricing: {
          type: tool.pricing_type as 'free' | 'freemium' | 'paid',
          startingPrice: tool.pricing_amount ? `$${tool.pricing_amount}/month` : undefined
        },
        features: tool.features || [],
        screenshots: tool.screenshots || [],
        videoUrl: tool.video_url,
        websiteUrl: tool.website_url,
        rating: tool.rating || 0,
        reviewCount: tool.review_count || 0,
        lastUpdated: tool.last_updated || tool.created_at,
        releaseDate: tool.release_date,
        tutorialSteps: [
          {
            title: 'Getting Started',
            description: `Learn how to use ${tool.name}`,
            imageUrl: tool.screenshots?.[0]
          }
        ]
      }));

      setTools(formattedTools);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return { tools, loading, error, refetch: fetchTools };
};