'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'section',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'section' | 'div';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const MotionTag = as === 'section' ? motion.section : motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
