import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Claude 3',
    description: 'Released on 2024-03-04: Latest AI model from Anthropic with enhanced capabilities and improved reasoning',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Anthropic',
    pricing: { type: 'paid', startingPrice: '$20/month' },
    features: [
      'Advanced reasoning capabilities',
      'Multimodal understanding',
      'Code generation and analysis',
      'Long context window',
      'Enhanced safety measures'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://claude.ai',
    rating: 4.9,
    reviewCount: 1200,
    lastUpdated: '2024-03-04',
    releaseDate: '2024-03-04',
    tutorialSteps: [
      {
        title: 'Sign up',
        description: 'Create an account on Claude.ai',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Start chatting',
        description: 'Begin your conversation with Claude',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      }
    ]
  },
  // Adding 29 more tools with similar structure...
  {
    id: '2',
    name: 'Midjourney V6',
    description: 'Released on 2024-01-20: Latest version of Midjourney with improved image generation capabilities',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Midjourney',
    pricing: { type: 'paid', startingPrice: '$10/month' },
    features: [
      'Enhanced photorealism',
      'Better prompt understanding',
      'Improved composition',
      'Faster generation',
      'Advanced style control'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://www.midjourney.com',
    rating: 4.8,
    reviewCount: 950,
    lastUpdated: '2024-01-20',
    releaseDate: '2024-01-20',
    tutorialSteps: [
      {
        title: 'Join Discord',
        description: 'Access Midjourney through Discord',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Generate images',
        description: 'Use prompts to create images',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  // ... Adding 28 more tools with similar detailed structure
];