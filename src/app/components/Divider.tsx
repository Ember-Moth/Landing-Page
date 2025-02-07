'use client';

import { motion } from 'framer-motion';

export default function Divider({ className = '' }) {
  return (
    <div className={`relative h-24 ${className}`}>
      <div className="relative flex justify-center">
        <span className="px-4">
          <motion.div
            className="w-2 h-2 rounded-full bg-primary-500/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </div>
    </div>
  );
} 