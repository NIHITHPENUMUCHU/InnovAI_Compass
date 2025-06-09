import { Tool } from '../types';

export const tools: Tool[] = [
  // Website Making Tools
  {
    id: '1',
    name: 'Wix ADI',
    description: 'Released on 2024-01-15: Artificial Design Intelligence that creates personalized websites automatically based on your answers to simple questions',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Wix',
    pricing: { type: 'freemium', startingPrice: '$14/month' },
    features: [
      'Automatic website design',
      'Personalized layouts',
      'Mobile optimization',
      'SEO optimization',
      'Drag-and-drop editor'
    ],
    screenshots: [
      'https://cdn.prod.website-files.com/64246652f82179d277df81be/6499a7cfa4a9263ca8e2d0ad_blog-47.jpg',
      'https://static.wixstatic.com/media/a77aa0_231b3fa856e74bd39c76a683a9c20e57~mv2.jpg/v1/fill/w_568,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a77aa0_231b3fa856e74bd39c76a683a9c20e57~mv2.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://wix.com',
    rating: 4.5,
    reviewCount: 2500,
    lastUpdated: '2024-01-15',
    releaseDate: '2024-01-15',
    tutorialSteps: [
      {
        title: 'Answer Questions',
        description: 'Tell Wix ADI about your business and preferences',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
      },
      {
        title: 'Get Your Website',
        description: 'ADI creates a personalized website for you',
        imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
      }
    ]
  },
  {
    id: '2',
    name: 'Durable',
    description: 'Released on 2024-02-10: AI website builder that creates a complete business website in 30 seconds with copy, images, and contact forms',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Durable',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      '30-second website creation',
      'AI-generated content',
      'Built-in CRM',
      'Invoicing system',
      'SEO optimization'
    ],
    screenshots: [
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://durable.co',
    rating: 4.6,
    reviewCount: 1800,
    lastUpdated: '2024-02-10',
    releaseDate: '2024-02-10',
    tutorialSteps: [
      {
        title: 'Enter Business Info',
        description: 'Provide basic information about your business',
        imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      },
      {
        title: 'Launch Website',
        description: 'Your complete website is ready in 30 seconds',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },
  {
    id: '3',
    name: 'Bookmark (AiDA)',
    description: 'Released on 2024-01-20: AI Design Assistant that creates websites by learning from millions of data points to deliver unique designs',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Bookmark',
    pricing: { type: 'freemium', startingPrice: '$11.99/month' },
    features: [
      'AI Design Assistant',
      'Machine learning optimization',
      'E-commerce integration',
      'Mobile responsive',
      'Custom domain'
    ],
    screenshots: [
      'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg',
      'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://bookmark.com',
    rating: 4.3,
    reviewCount: 1200,
    lastUpdated: '2024-01-20',
    releaseDate: '2024-01-20',
    tutorialSteps: [
      {
        title: 'Choose Template',
        description: 'Select from AI-generated templates',
        imageUrl: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg'
      },
      {
        title: 'Customize with AiDA',
        description: 'Let AI assistant help you customize',
        imageUrl: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg'
      }
    ]
  },
  {
    id: '4',
    name: 'Zyro',
    description: 'Released on 2024-03-05: AI-powered website builder with content generator, logo maker, and business name generator',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Zyro',
    pricing: { type: 'paid', startingPrice: '$2.90/month' },
    features: [
      'AI content generator',
      'Logo maker',
      'Business name generator',
      'E-commerce tools',
      'SEO tools'
    ],
    screenshots: [
      'https://www.toolpilot.ai/cdn/shop/files/1c4478971ba3d451281922e914e4ce33.png?v=1691070904',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://zyro.com',
    rating: 4.4,
    reviewCount: 950,
    lastUpdated: '2024-03-05',
    releaseDate: '2024-03-05',
    tutorialSteps: [
      {
        title: 'Choose Template',
        description: 'Select from hundreds of templates',
        imageUrl: 'https://blog-cdn.quarkly.io/2023/03/Review-of-Zyro-Comprehensive-Analysis-of-This-All-In-One-Website-Builder.png'
      },
      {
        title: 'Use AI Tools',
        description: 'Generate content and logos with AI',
        imageUrl: 'https://lh6.googleusercontent.com/67SUhWHCkfDmXz5NqYHjqtez6sLFYom4XnoMJUbFWQKj6oS3Sk4qeIyEuV8hfVSNAWmBl9yW3HI4cE-_GPq_hWckMv4qq0fw8ugMXMyb9zh7mgVSU5Y5ckYP18VUi6-zCFXMeKYwods8bCDpCYCKa3o'
      }
    ]
  },
  {
    id: '5',
    name: '10Web',
    description: 'Released on 2024-02-28: AI website builder and hosting platform that recreates any website with AI and provides automated WordPress hosting',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: '10Web',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: [
      'AI website recreation',
      'WordPress hosting',
      'PageSpeed optimization',
      'Automated backups',
      'Security monitoring'
    ],
    screenshots: [
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://10web.io',
    rating: 4.7,
    reviewCount: 1500,
    lastUpdated: '2024-02-28',
    releaseDate: '2024-02-28',
    tutorialSteps: [
      {
        title: 'Enter URL',
        description: 'Provide a website URL to recreate with AI',
        imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      },
      {
        title: 'AI Recreation',
        description: 'AI recreates the website structure and design',
        imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
      }
    ]
  },
  {
    id: '6',
    name: 'Framer AI',
    description: 'Released on June 2023: Framer AI is a tool within Framer, a no-code website builder, that uses artificial intelligence to generate websites and enhance design elements',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Framer',
    pricing: { type: 'freemium', startingPrice: '$5/month' },
    features: [
      'Text-to-website generation',
      'Responsive design',
      'Advanced animations',
      'CMS integration',
      'Custom code support'
    ],
    screenshots: [
      'https://framerusercontent.com/images/taEIqG4IODOLsMpmFmsybWAN6G8.png?scale-down-to=1024',
      'https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49015%2Felements-uxT36v1xzM9B3xlID3iSxVOZYw5H0G&w=3840&q=100',
      'https://framerusercontent.com/images/ypWOno0AGfJ1cu1yYm228sWO6Y.jpg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=LLPFQicKDPA',
    websiteUrl: 'https://framer.com',
    rating: 4.8,
    reviewCount: 200,
    lastUpdated: 'May 28, 2025',
    releaseDate: 'June, 2023',
    tutorialSteps: [
      {
        title: 'Describe Your Site',
        description: 'Tell Framer what kind of website you want',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/knTaMjacC2sUFBhuYkZg3j-1200-80.png'
      },
      {
        title: 'Generate & Customize',
        description: 'AI generates the site, then customize as needed',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*XWWoOmKcvBRS2pNp7Ht98g.png'
      }
    ]
  },
  {
    id: '7',
    name: 'TeleportHQ',
    description: 'Released on 2024-01-30: AI-powered front-end design platform that converts designs to code automatically',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'TeleportHQ',
    pricing: { type: 'freemium', startingPrice: '$15/month' },
    features: [
      'Design to code conversion',
      'Visual development',
      'Component library',
      'Collaboration tools',
      'Export to multiple frameworks'
    ],
    screenshots: [
      'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://teleporthq.io',
    rating: 4.5,
    reviewCount: 800,
    lastUpdated: '2024-01-30',
    releaseDate: '2024-01-30',
    tutorialSteps: [
      {
        title: 'Design Visually',
        description: 'Create your design using visual tools',
        imageUrl: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg'
      },
      {
        title: 'Export Code',
        description: 'AI converts your design to clean code',
        imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg'
      }
    ]
  },

  // Text Generation Tools
  {
    id: '8',
    name: 'ChatGPT',
    description: 'Released on 2022-11-30: Advanced conversational AI that can assist with writing, analysis, coding, and creative tasks',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'OpenAI',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: [
      'Conversational AI',
      'Code generation',
      'Creative writing',
      'Analysis and research',
      'Multiple languages'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://chat.openai.com',
    rating: 4.9,
    reviewCount: 15000,
    lastUpdated: '2024-03-15',
    releaseDate: '2022-11-30',
    tutorialSteps: [
      {
        title: 'Sign Up',
        description: 'Create an account on OpenAI',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      },
      {
        title: 'Start Chatting',
        description: 'Begin your conversation with ChatGPT',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '9',
    name: 'Copy.ai',
    description: 'Released on 2024-02-20: AI copywriting tool that generates marketing copy, blog posts, and social media content',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Copy.ai',
    pricing: { type: 'freemium', startingPrice: '$36/month' },
    features: [
      'Marketing copy generation',
      'Blog post creation',
      'Social media content',
      'Email templates',
      'Brand voice training'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://copy.ai',
    rating: 4.6,
    reviewCount: 3200,
    lastUpdated: '2024-02-20',
    releaseDate: '2024-02-20',
    tutorialSteps: [
      {
        title: 'Choose Template',
        description: 'Select from hundreds of copy templates',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Generate Copy',
        description: 'AI creates multiple variations for you',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      }
    ]
  },
  {
    id: '10',
    name: 'Writesonic',
    description: 'Released on 2024-03-01: AI writing assistant for creating articles, ads, emails, and website copy with SEO optimization',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Writesonic',
    pricing: { type: 'freemium', startingPrice: '$12.67/month' },
    features: [
      'Article writing',
      'Ad copy creation',
      'SEO optimization',
      'Fact-checking',
      'Plagiarism detection'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://writesonic.com',
    rating: 4.5,
    reviewCount: 2800,
    lastUpdated: '2024-03-01',
    releaseDate: '2024-03-01',
    tutorialSteps: [
      {
        title: 'Select Tool',
        description: 'Choose from various writing tools',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      },
      {
        title: 'Generate Content',
        description: 'AI creates optimized content for you',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '11',
    name: 'Jasper',
    description: 'Released on 2024-02-15: Enterprise-grade AI writing platform for teams and businesses with brand voice consistency',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Jasper',
    pricing: { type: 'paid', startingPrice: '$39/month' },
    features: [
      'Brand voice training',
      'Team collaboration',
      'Content templates',
      'SEO mode',
      'Plagiarism checker'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://jasper.ai',
    rating: 4.7,
    reviewCount: 4500,
    lastUpdated: '2024-02-15',
    releaseDate: '2024-02-15',
    tutorialSteps: [
      {
        title: 'Set Up Brand Voice',
        description: 'Train Jasper on your brand voice',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Create Content',
        description: 'Generate on-brand content at scale',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      }
    ]
  },
  {
    id: '12',
    name: 'Sudowrite',
    description: 'Released on 2024-01-25: AI writing partner specifically designed for creative fiction and storytelling',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Sudowrite',
    pricing: { type: 'paid', startingPrice: '$10/month' },
    features: [
      'Creative fiction writing',
      'Story development',
      'Character creation',
      'Plot suggestions',
      'Writing feedback'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://sudowrite.com',
    rating: 4.4,
    reviewCount: 1200,
    lastUpdated: '2024-01-25',
    releaseDate: '2024-01-25',
    tutorialSteps: [
      {
        title: 'Start Writing',
        description: 'Begin your story or upload existing work',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      },
      {
        title: 'Get AI Suggestions',
        description: 'Receive creative suggestions and feedback',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '13',
    name: 'INK for All',
    description: 'Released on 2024-02-05: AI content optimization platform that combines writing assistance with SEO optimization',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'INK',
    pricing: { type: 'freemium', startingPrice: '$39/month' },
    features: [
      'SEO content optimization',
      'Real-time writing assistance',
      'Keyword research',
      'Content scoring',
      'Competitor analysis'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://inkforall.com',
    rating: 4.3,
    reviewCount: 900,
    lastUpdated: '2024-02-05',
    releaseDate: '2024-02-05',
    tutorialSteps: [
      {
        title: 'Enter Keywords',
        description: 'Input your target keywords for optimization',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Write & Optimize',
        description: 'Create SEO-optimized content with AI assistance',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      }
    ]
  },
  {
    id: '14',
    name: 'Notion AI',
    description: 'Released on 2024-03-08: AI writing assistant integrated into Notion workspace for enhanced productivity and content creation',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Notion',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: [
      'Integrated workspace AI',
      'Document generation',
      'Meeting notes',
      'Task automation',
      'Content summarization'
    ],
    screenshots: [
      'https://aview.in/wp-content/uploads/2023/10/Notion-AI.webp',
      'https://i.ytimg.com/vi/3ye-ocvVrKA/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKHESAs6XCz4sxJXaClwsQM-7fXq0BG9KWA&s'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://notion.so',
    rating: 4.6,
    reviewCount: 5200,
    lastUpdated: '2024-03-08',
    releaseDate: '2024-03-08',
    tutorialSteps: [
      {
        title: 'Enable AI',
        description: 'Activate Notion AI in your workspace',
        imageUrl: 'https://thomasjfrank.com/wp-content/uploads/2022/11/image-4.png'
      },
      {
        title: 'Use AI Commands',
        description: 'Type "/" to access AI writing features',
        imageUrl: 'https://www.notion.com/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FRDZ3mY10zY8%2Fmaxresdefault.jpg&w=3840&q=100'
      }
    ]
  },

  // Image Creation Tools
  {
    id: '15',
    name: 'DALL·E 3',
    description: 'Released on 2023-10-04: Latest image generation model from OpenAI with improved prompt understanding and safety features',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'OpenAI',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: [
      'High-quality image generation',
      'Improved prompt understanding',
      'Safety filters',
      'Multiple aspect ratios',
      'Style variations'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://openai.com/dall-e',
    rating: 4.8,
    reviewCount: 8500,
    lastUpdated: '2024-03-10',
    releaseDate: '2023-10-04',
    tutorialSteps: [
      {
        title: 'Access DALL·E',
        description: 'Sign up for ChatGPT Plus or use API',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Generate Images',
        description: 'Describe your image in detail',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  {
    id: '16',
    name: 'Midjourney',
    description: 'Released on 2024-01-20: Advanced AI image generator known for artistic and creative outputs with unique aesthetic styles',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Midjourney',
    pricing: { type: 'paid', startingPrice: '$10/month' },
    features: [
      'Artistic image generation',
      'Style variations',
      'Upscaling options',
      'Community gallery',
      'Advanced parameters'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://midjourney.com',
    rating: 4.9,
    reviewCount: 12000,
    lastUpdated: '2024-01-20',
    releaseDate: '2024-01-20',
    tutorialSteps: [
      {
        title: 'Join Discord',
        description: 'Access Midjourney through Discord server',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Use /imagine',
        description: 'Type /imagine followed by your prompt',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  {
    id: '17',
    name: 'Leonardo AI',
    description: 'Released on 2024-02-12: AI image generator with focus on game assets, concept art, and creative illustrations',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Leonardo AI',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      'Game asset generation',
      'Concept art creation',
      'Multiple art styles',
      'Image editing tools',
      'Community models'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://leonardo.ai',
    rating: 4.7,
    reviewCount: 3500,
    lastUpdated: '2024-02-12',
    releaseDate: '2024-02-12',
    tutorialSteps: [
      {
        title: 'Create Account',
        description: 'Sign up for Leonardo AI platform',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      },
      {
        title: 'Generate Art',
        description: 'Use prompts to create stunning visuals',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      }
    ]
  },
  {
    id: '18',
    name: 'Craiyon',
    description: 'Released on 2024-01-10: Free AI image generator (formerly DALL·E mini) accessible to everyone without restrictions',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Craiyon',
    pricing: { type: 'free' },
    features: [
      'Completely free',
      'No sign-up required',
      'Multiple image variations',
      'Simple interface',
      'Fast generation'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://craiyon.com',
    rating: 4.2,
    reviewCount: 5500,
    lastUpdated: '2024-01-10',
    releaseDate: '2024-01-10',
    tutorialSteps: [
      {
        title: 'Visit Website',
        description: 'Go to Craiyon.com - no signup needed',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Enter Prompt',
        description: 'Type your image description and generate',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  {
    id: '19',
    name: 'Artbreeder',
    description: 'Released on 2024-02-18: Collaborative AI art platform for creating and evolving images through genetic algorithms',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Artbreeder',
    pricing: { type: 'freemium', startingPrice: '$8.99/month' },
    features: [
      'Genetic algorithm art',
      'Collaborative creation',
      'Portrait generation',
      'Landscape creation',
      'Style mixing'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://artbreeder.com',
    rating: 4.4,
    reviewCount: 2200,
    lastUpdated: '2024-02-18',
    releaseDate: '2024-02-18',
    tutorialSteps: [
      {
        title: 'Browse Gallery',
        description: 'Explore existing artworks for inspiration',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      },
      {
        title: 'Breed Images',
        description: 'Combine and evolve images to create new art',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      }
    ]
  },
  {
    id: '20',
    name: 'NightCafe',
    description: 'Released on 2024-03-02: AI art generator with multiple algorithms and styles for creating unique digital artwork',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'NightCafe',
    pricing: { type: 'freemium', startingPrice: '$5.99/month' },
    features: [
      'Multiple AI algorithms',
      'Style transfer',
      'Community challenges',
      'Print services',
      'Bulk generation'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://nightcafe.studio',
    rating: 4.5,
    reviewCount: 4100,
    lastUpdated: '2024-03-02',
    releaseDate: '2024-03-02',
    tutorialSteps: [
      {
        title: 'Choose Algorithm',
        description: 'Select from various AI art algorithms',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Create Art',
        description: 'Generate and customize your artwork',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  {
    id: '21',
    name: 'Runway ML',
    description: 'Released on 2024-02-25: AI-powered creative suite for video editing, image generation, and multimedia content creation',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Runway',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      'AI video editing',
      'Image generation',
      'Background removal',
      'Style transfer',
      'Real-time collaboration'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://runwayml.com',
    rating: 4.6,
    reviewCount: 3800,
    lastUpdated: '2024-02-25',
    releaseDate: '2024-02-25',
    tutorialSteps: [
      {
        title: 'Upload Media',
        description: 'Import your images or videos',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      },
      {
        title: 'Apply AI Effects',
        description: 'Use AI tools to enhance your content',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      }
    ]
  },

  // Code Assistant Tools
  {
    id: '22',
    name: 'GitHub Copilot',
    description: 'Released on 2021-06-29: AI pair programmer that suggests code and entire functions in real-time as you type',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'GitHub',
    pricing: { type: 'paid', startingPrice: '$10/month' },
    features: [
      'Real-time code suggestions',
      'Multi-language support',
      'Context-aware completions',
      'Function generation',
      'Code explanation'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://github.com/features/copilot',
    rating: 4.7,
    reviewCount: 8900,
    lastUpdated: '2024-03-14',
    releaseDate: '2021-06-29',
    tutorialSteps: [
      {
        title: 'Install Extension',
        description: 'Add Copilot to your code editor',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Start Coding',
        description: 'Begin typing and see AI suggestions',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },
  {
    id: '23',
    name: 'Codeium',
    description: 'Released on 2024-01-15: Free AI code completion tool with support for 70+ programming languages',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Codeium',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      '70+ language support',
      'Unlimited completions',
      'Chat interface',
      'Code explanation',
      'Bug detection'
    ],
    screenshots: [
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://codeium.com',
    rating: 4.6,
    reviewCount: 3200,
    lastUpdated: '2024-01-15',
    releaseDate: '2024-01-15',
    tutorialSteps: [
      {
        title: 'Install Plugin',
        description: 'Add Codeium to your IDE',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      },
      {
        title: 'Get Suggestions',
        description: 'Receive intelligent code completions',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '24',
    name: 'Replit Ghostwriter',
    description: 'Released on 2024-02-08: AI coding assistant integrated into Replit IDE for collaborative programming',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Replit',
    pricing: { type: 'freemium', startingPrice: '$7/month' },
    features: [
      'Integrated IDE assistant',
      'Code generation',
      'Debugging help',
      'Collaborative coding',
      'Project templates'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://replit.com',
    rating: 4.4,
    reviewCount: 2100,
    lastUpdated: '2024-02-08',
    releaseDate: '2024-02-08',
    tutorialSteps: [
      {
        title: 'Create Repl',
        description: 'Start a new project in Replit',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Use Ghostwriter',
        description: 'Get AI assistance while coding',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },
  {
    id: '25',
    name: 'Tabnine',
    description: 'Released on 2024-01-22: AI code completion tool that learns from your codebase for personalized suggestions',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Tabnine',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      'Personalized completions',
      'Team training',
      'Privacy-focused',
      'Local processing',
      'Custom models'
    ],
    screenshots: [
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://tabnine.com',
    rating: 4.5,
    reviewCount: 4200,
    lastUpdated: '2024-01-22',
    releaseDate: '2024-01-22',
    tutorialSteps: [
      {
        title: 'Install Extension',
        description: 'Add Tabnine to your editor',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      },
      {
        title: 'Train on Codebase',
        description: 'Let Tabnine learn from your code',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '26',
    name: 'MutableAI',
    description: 'Released on 2024-03-05: AI-powered software development platform for accelerating code creation and refactoring',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Mutable',
    pricing: { type: 'freemium', startingPrice: '$25/month' },
    features: [
      'Code refactoring',
      'Test generation',
      'Documentation creation',
      'Code review',
      'Architecture suggestions'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://mutable.ai',
    rating: 4.3,
    reviewCount: 800,
    lastUpdated: '2024-03-05',
    releaseDate: '2024-03-05',
    tutorialSteps: [
      {
        title: 'Connect Repository',
        description: 'Link your code repository to MutableAI',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'AI Code Analysis',
        description: 'Get AI-powered insights and suggestions',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },

  // Audio & Speech Tools
  {
    id: '27',
    name: 'ElevenLabs',
    description: 'Released on 2024-02-14: Advanced AI voice synthesis platform for creating realistic speech from text',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'ElevenLabs',
    pricing: { type: 'freemium', startingPrice: '$5/month' },
    features: [
      'Realistic voice synthesis',
      'Voice cloning',
      'Multiple languages',
      'Emotion control',
      'API integration'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://elevenlabs.io',
    rating: 4.8,
    reviewCount: 5500,
    lastUpdated: '2024-02-14',
    releaseDate: '2024-02-14',
    tutorialSteps: [
      {
        title: 'Choose Voice',
        description: 'Select from library or clone a voice',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Generate Speech',
        description: 'Convert your text to realistic speech',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },
  {
    id: '28',
    name: 'Descript',
    description: 'Released on 2024-01-18: All-in-one audio and video editing platform with AI-powered transcription and voice synthesis',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Descript',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: [
      'Audio transcription',
      'Text-based editing',
      'Voice cloning',
      'Filler word removal',
      'Collaboration tools'
    ],
    screenshots: [
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://descript.com',
    rating: 4.6,
    reviewCount: 3800,
    lastUpdated: '2024-01-18',
    releaseDate: '2024-01-18',
    tutorialSteps: [
      {
        title: 'Upload Audio',
        description: 'Import your audio or video files',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      },
      {
        title: 'Edit with Text',
        description: 'Edit audio by editing the transcript',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      }
    ]
  },
  {
    id: '29',
    name: 'Murf AI',
    description: 'Released on 2024-02-22: Professional AI voice generator for creating voiceovers, presentations, and audiobooks',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Murf',
    pricing: { type: 'freemium', startingPrice: '$13/month' },
    features: [
      'Professional voiceovers',
      '120+ voices',
      '20+ languages',
      'Voice customization',
      'Background music'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://murf.ai',
    rating: 4.5,
    reviewCount: 2900,
    lastUpdated: '2024-02-22',
    releaseDate: '2024-02-22',
    tutorialSteps: [
      {
        title: 'Enter Script',
        description: 'Type or paste your text content',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Generate Voiceover',
        description: 'Create professional audio with AI voices',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },

  // Additional 5 tools
  {
    id: '30',
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
  {
    id: '31',
    name: 'Perplexity AI',
    description: 'Released on 2024-01-08: AI-powered search engine that provides accurate answers with real-time information and citations',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Perplexity',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: [
      'Real-time search results',
      'Source citations',
      'Follow-up questions',
      'Multiple AI models',
      'Academic mode'
    ],
    screenshots: [
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://perplexity.ai',
    rating: 4.7,
    reviewCount: 3400,
    lastUpdated: '2024-03-16',
    releaseDate: '2024-01-08',
    tutorialSteps: [
      {
        title: 'Ask Questions',
        description: 'Type your question or search query',
        imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
      },
      {
        title: 'Get Cited Answers',
        description: 'Receive answers with source citations',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      }
    ]
  },
  {
    id: '32',
    name: 'Stable Diffusion',
    description: 'Released on 2022-08-22: Open-source AI image generator that creates high-quality images from text descriptions',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Stability AI',
    pricing: { type: 'free' },
    features: [
      'Open-source model',
      'High-quality image generation',
      'Customizable parameters',
      'Local installation',
      'Community extensions'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://stability.ai',
    rating: 4.6,
    reviewCount: 7800,
    lastUpdated: '2024-03-11',
    releaseDate: '2022-08-22',
    tutorialSteps: [
      {
        title: 'Install Software',
        description: 'Download and install Stable Diffusion',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Generate Images',
        description: 'Create images using text prompts',
        imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
      }
    ]
  },
  {
    id: '33',
    name: 'Cursor',
    description: 'Released on 2024-02-14: AI-first code editor built for pair programming with AI, featuring advanced code completion and chat',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Cursor',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: [
      'AI-first code editor',
      'Advanced code completion',
      'AI chat integration',
      'Codebase understanding',
      'Multi-file editing'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://cursor.sh',
    rating: 4.8,
    reviewCount: 2100,
    lastUpdated: '2024-03-13',
    releaseDate: '2024-02-14',
    tutorialSteps: [
      {
        title: 'Download Editor',
        description: 'Install Cursor code editor',
        imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
      },
      {
        title: 'Start Coding',
        description: 'Begin coding with AI assistance',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  },
  {
    id: '34',
    name: 'Speechify',
    description: 'Released on 2024-01-12: AI-powered text-to-speech platform that converts any text into natural-sounding audio',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Speechify',
    pricing: { type: 'freemium', startingPrice: '$11.58/month' },
    features: [
      'Natural text-to-speech',
      'Speed control',
      'Multiple voices',
      'Document scanning',
      'Offline listening'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=example',
    websiteUrl: 'https://speechify.com',
    rating: 4.4,
    reviewCount: 6200,
    lastUpdated: '2024-03-09',
    releaseDate: '2024-01-12',
    tutorialSteps: [
      {
        title: 'Upload Text',
        description: 'Add text or documents to convert',
        imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
      },
      {
        title: 'Listen to Audio',
        description: 'Play back your text as natural speech',
        imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
      }
    ]
  }
];