import { Tool } from '../types';

export const tools: Tool[] = [
  // Existing tools...
  {
    id: '6',
    name: 'Stable Diffusion XL',
    description: 'Released on 2024-02-15: Next-generation image generation model with enhanced quality and control',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Stability AI',
    pricing: { type: 'paid', startingPrice: '$15/month' },
    features: [
      'High-resolution image generation',
      'Advanced style control',
      'Negative prompting',
      'Inpainting and outpainting',
      'Custom model fine-tuning'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://stability.ai',
    rating: 4.8,
    reviewCount: 720,
    lastUpdated: '2024-02-15',
    releaseDate: '2024-02-15',
    tutorialSteps: [
      {
        title: 'Access the platform',
        description: 'Sign up and access the web interface',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      },
      {
        title: 'Generate images',
        description: 'Write prompts and customize settings',
        imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg'
      }
    ]
  },
  // Add 9 more tools with similar structure...
];