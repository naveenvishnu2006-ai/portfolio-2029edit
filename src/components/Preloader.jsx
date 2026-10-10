import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-inverse-surface"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="font-display-hero text-headline-sm md:text-display-sm uppercase font-black tracking-tight flex items-center gap-space-sm"
            >
              <span className="material-symbols-outlined text-[32px] md:text-[48px] animate-pulse">
                terminal
              </span>
              INITIATING SEQUENCE
            </motion.div>
          </div>
          
          <div className="w-64 h-1 bg-surface-container mt-space-lg relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-0 bg-inverse-surface"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-space-sm font-label-sm text-label-sm font-mono tracking-widest text-on-surface-variant"
          >
            [ LOADING VISUAL ASSETS ]
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
