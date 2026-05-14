import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle, centered = false, darkMode }) => (
  <div className={`mb-20 space-y-4 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
    <motion.h4
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs"
    >
      {subtitle}
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-900'}`}
    >
      {title}
    </motion.h2>
  </div>
);
