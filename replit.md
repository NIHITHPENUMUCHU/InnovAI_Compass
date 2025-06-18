# AI Tools Directory

## Overview

This project is a comprehensive AI tools discovery and comparison platform built as a full-stack web application. It provides users with a curated directory of AI tools across various categories, featuring detailed information, ratings, and comparison capabilities. The application follows a modern web architecture with a React frontend, Express backend, and PostgreSQL database.

## System Architecture

The application uses a **client-server architecture** with clear separation between frontend and backend concerns:

- **Frontend**: React-based SPA with TypeScript, using Vite for build tooling
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Hosting**: Replit with autoscale deployment target
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite
- **Routing**: React Router for client-side navigation
- **State Management**: React Context for theme management, React hooks for data fetching
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Data Models
The application defines core entities through Drizzle schema:
- **Users**: Basic user authentication and profile management
- **Categories**: Tool categorization system
- **Tools**: Comprehensive tool information including ratings, features, and media

## Data Flow

1. **Client Requests**: React components make HTTP requests to Express API endpoints
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM executes type-safe queries against PostgreSQL
4. **Response Handling**: Server returns JSON responses consumed by frontend components
5. **State Updates**: React components update local state and re-render UI

The application uses a **request-response pattern** with RESTful API design principles.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@radix-ui/react-***: Headless UI component primitives
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for enhanced UX

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production builds

### Third-party Integrations
- **Supabase**: Authentication and real-time features (configured but not actively used)
- **Replit**: Development environment and deployment platform

## Deployment Strategy

The application uses **Replit's autoscale deployment** with the following configuration:

- **Development**: `npm run dev` starts TypeScript server with hot reload
- **Build Process**: Vite builds frontend assets, ESBuild bundles server code
- **Production**: `npm run start` runs the bundled server application
- **Port Configuration**: Server runs on port 5000, exposed as port 80 externally
- **Static Assets**: Frontend builds to `dist/public`, served by Express in production

The deployment strategy prioritizes **developer experience** during development with fast hot reload, while optimizing for **performance** in production with bundled assets.

## Changelog

- June 18, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.