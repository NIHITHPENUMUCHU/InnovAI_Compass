import React from 'react';
import { useLazyImage } from '../../hooks/useIntersectionObserver';
import { SkeletonLoader } from './LoadingSpinner';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder
}) => {
  const [imageRef, imageSrc] = useLazyImage(src);

  return (
    <div 
      ref={imageRef as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!imageSrc ? (
        <SkeletonLoader 
          width="w-full" 
          height="h-full" 
          className="absolute inset-0" 
        />
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.opacity = '1';
          }}
          style={{ opacity: 0 }}
        />
      )}
    </div>
  );
};

export const LazyBackground: React.FC<{
  src: string;
  children: React.ReactNode;
  className?: string;
}> = ({ src, children, className = '' }) => {
  const [imageRef, imageSrc] = useLazyImage(src);

  return (
    <div 
      ref={imageRef as React.RefObject<HTMLDivElement>}
      className={`relative ${className}`}
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {!imageSrc && (
        <div className="absolute inset-0 skeleton" />
      )}
      {children}
    </div>
  );
};