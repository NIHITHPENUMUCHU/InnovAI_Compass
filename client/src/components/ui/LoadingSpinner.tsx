import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`loading-spinner ${sizeClasses[size]} ${className}`} />
  );
};

export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`loading-dots ${className}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export const SkeletonLoader: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string;
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '' 
}) => (
  <div className={`skeleton ${width} ${height} ${className}`} />
);

export const PageLoader: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div className="text-center">
      <div className="loading-spinner w-16 h-16 mx-auto mb-4" />
      <p className="text-lg font-medium text-gray-600 dark:text-gray-300 font-['KUSANAGI']">
        Loading...
      </p>
    </div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4">
    <SkeletonLoader height="h-6" width="w-3/4" />
    <SkeletonLoader height="h-4" width="w-full" />
    <SkeletonLoader height="h-4" width="w-2/3" />
    <div className="flex space-x-2">
      <SkeletonLoader height="h-8" width="w-20" />
      <SkeletonLoader height="h-8" width="w-24" />
    </div>
  </div>
);