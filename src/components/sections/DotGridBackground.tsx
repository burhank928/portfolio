'use client';

import { MotionValue, motion, useMotionTemplate } from 'framer-motion';

export default function DotGridBackground({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const maskImage = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, black, transparent)`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#888888 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
    </div>
  );
}
