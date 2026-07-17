'use client';

import { motion } from 'framer-motion';

export default function PulsingDot({ color = '#22c55e', size = 6 }: { color?: string; size?: number }) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full"
        style={{ backgroundColor: color }}
        animate={{ opacity: [0.6, 0, 0.6], scale: [1, 2.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className="relative inline-flex rounded-full" style={{ width: size, height: size, backgroundColor: color }} />
    </span>
  );
}
