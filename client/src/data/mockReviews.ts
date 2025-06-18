import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    toolId: '1',
    userId: 'user1',
    rating: 5,
    comment: "ChatGPT has revolutionized the way I work. It's incredibly helpful for content creation and brainstorming ideas.",
    createdAt: '2024-03-10T10:00:00Z',
    userName: 'John Doe',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: '2',
    toolId: '1',
    userId: 'user2',
    rating: 4,
    comment: "Very powerful tool, but sometimes needs specific prompting to get the best results.",
    createdAt: '2024-03-09T15:30:00Z',
    userName: 'Jane Smith',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: '3',
    toolId: '1',
    userId: 'user3',
    rating: 5,
    comment: "The most versatile AI assistant I've used. Great for coding, writing, and problem-solving.",
    createdAt: '2024-03-08T09:15:00Z',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  }
];