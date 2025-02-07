'use client';

import { motion } from 'framer-motion';

export function BackgroundAnimation({ className = '' }) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* 光晕效果 */}
      <motion.div
        className="absolute -inset-[10px]"
        style={{
          background: "radial-gradient(circle at center, var(--primary-500) 0%, transparent 70%)",
          opacity: 0.03,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.03, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 网格装饰 */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--primary-500) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary-500) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.02,
        }}
      />
    </div>
  );
}

export function FloatingElements({ className = '' }) {
  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${className}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
} 