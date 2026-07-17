'use client';

import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const char: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function AnimatedName({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const letters = text.split('');

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}
      className="text-hero-name text-text-primary"
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={char} aria-hidden="true">
          {letter === ' ' ? ' ' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
