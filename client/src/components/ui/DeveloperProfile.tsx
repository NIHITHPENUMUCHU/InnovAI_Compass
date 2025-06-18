import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export const DeveloperProfile = () => {
  const StylizedNLogo = () => (
    <motion.div
      className="w-24 h-24 relative"
      whileHover={{ scale: 1.1, rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="nGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="var(--primary-light)" />
            <stop offset="100%" stopColor="var(--primary-dark)" />
          </linearGradient>
          <filter id="nGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background Circle */}
        <motion.circle
          cx="48"
          cy="48"
          r="44"
          fill="none"
          stroke="url(#nGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Stylized N */}
        <g transform="translate(24, 20)">
          <motion.path
            d="M8 8 L8 48 M8 8 L40 48 M40 8 L40 48"
            stroke="url(#nGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#nGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </g>
        
        {/* Decorative Elements */}
        <motion.circle
          cx="20"
          cy="20"
          r="3"
          fill="var(--primary)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
        <motion.circle
          cx="76"
          cy="76"
          r="3"
          fill="var(--primary-light)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.8, delay: 1.7 }}
        />
      </svg>
    </motion.div>
  );

  const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary-dark)] rounded-2xl blur-xl opacity-20 animate-pulse" />
      <div className="relative bg-[var(--bg-secondary)] border-2 border-[var(--primary)] rounded-2xl p-8 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  );

  const ContactButton = ({ icon: Icon, label, href, delay }: { 
    icon: any; 
    label: string; 
    href: string; 
    delay: number; 
  }) => (
    <motion.a
      href={href}
      className="flex items-center space-x-3 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors" />
      <span className="font-kusanagi font-semibold text-[var(--text-primary)] group-hover:text-white">
        {label}
      </span>
      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-[var(--primary)] rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--primary-light)] rounded-full opacity-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mobile-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-black text-[var(--text-primary)] font-kusanagi mb-4">
            Meet the Developer
          </h2>
          <p className="text-xl text-[var(--text-secondary)] font-kusanagi">
            Crafted with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <AnimatedCard delay={0.3}>
            <div className="text-center space-y-6">
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
              >
                <StylizedNLogo />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h3 className="text-3xl font-black text-[var(--text-primary)] font-kusanagi mb-2">
                  Nihith Penumuchu
                </h3>
                <p className="text-lg text-[var(--text-secondary)] font-kusanagi mb-4">
                  Full-Stack Developer & AI Enthusiast
                </p>
                <div className="inline-block px-4 py-2 bg-[var(--primary)] text-white rounded-full font-kusanagi font-semibold">
                  Building the Future of AI Discovery
                </div>
              </motion.div>
            </div>
          </AnimatedCard>

          {/* Contact & Skills Card */}
          <AnimatedCard delay={0.6}>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[var(--text-primary)] font-kusanagi mb-4">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <ContactButton
                    icon={Mail}
                    label="nihithepenumuchu07@gmail.com"
                    href="mailto:nihithepenumuchu07@gmail.com"
                    delay={1.2}
                  />
                  <ContactButton
                    icon={Github}
                    label="GitHub Profile"
                    href="https://github.com/nihithpenumuchu"
                    delay={1.4}
                  />
                  <ContactButton
                    icon={Linkedin}
                    label="LinkedIn"
                    href="https://linkedin.com/in/nihithpenumuchu"
                    delay={1.6}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[var(--text-primary)] font-kusanagi mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Framer Motion', 'PostgreSQL', 'Tailwind CSS', 'Vite'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--primary)] rounded-full text-sm font-kusanagi font-medium text-[var(--text-primary)]"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="inline-block p-6 bg-[var(--bg-secondary)] border border-[var(--primary)] rounded-2xl">
            <p className="text-[var(--text-secondary)] font-kusanagi leading-relaxed">
              "InnovAI Compass was born from a passion to democratize AI technology. 
              Every line of code, every animation, and every feature was crafted to create 
              an exceptional user experience that makes AI tools accessible to everyone."
            </p>
            <div className="mt-4 text-[var(--primary)] font-kusanagi font-semibold">
              - Nihith Penumuchu
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};