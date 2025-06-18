import React from 'react';
import { motion } from 'framer-motion';

export const FloatingCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`transform-gpu ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileHover={{ 
      y: -10, 
      scale: 1.02,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3 }
    }}
    style={{
      transformStyle: 'preserve-3d',
      perspective: 1000
    }}
  >
    {children}
  </motion.div>
);

export const MorphingBlob: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = 'var(--primary)' }) => (
  <div 
    className={`animate-morph ${className}`}
    style={{
      background: `linear-gradient(45deg, ${color}, ${color}80)`,
      filter: 'blur(40px)',
      opacity: 0.3
    }}
  />
);

export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export const GlassMorphism: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div 
    className={`backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 ${className}`}
    style={{
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)'
    }}
  >
    {children}
  </div>
);

export const HolographicCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={`relative transform-gpu transition-transform duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      {children}
    </div>
  );
};

export const NeonGlow: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}> = ({ children, color = 'var(--primary)', intensity = 20, className = '' }) => (
  <div 
    className={`relative ${className}`}
    style={{
      filter: `drop-shadow(0 0 ${intensity}px ${color})`
    }}
  >
    {children}
  </div>
);

export const Tilt3D: React.FC<{
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}> = ({ children, className = '', maxTilt = 15 }) => {
  const [transform, setTransform] = React.useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / rect.height) * maxTilt;
    const rotateY = ((centerX - e.clientX) / rect.width) * maxTilt;
    
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      className={`transform-gpu transition-transform duration-300 ease-out ${className}`}
      style={{ 
        transform,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};