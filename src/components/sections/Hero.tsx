'use client';

import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import DotGridBackground from './DotGridBackground';
import AnimatedName from './AnimatedName';
import PulsingDot from '@/components/ui/PulsingDot';
import Button from '@/components/ui/Button';
import { socials } from '@/lib/data';
import { withBasePath } from '@/lib/utils';

export default function Hero() {
  const [nameDone, setNameDone] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(-400);
        mouseY.set(-400);
      }}
      className="relative flex min-h-screen items-center justify-center section-px"
    >
      <DotGridBackground x={springX} y={springY} />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-badge border border-border bg-surface px-3 py-1.5"
        >
          <PulsingDot color="#22c55e" size={6} />
          <span className="font-mono text-[11px] tracking-wide text-text-secondary">
            Open to remote roles worldwide
          </span>
        </motion.div>

        <AnimatedName text="Burhan Ahmad Khan" onComplete={() => setNameDone(true)} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: nameDone ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-3 font-mono text-sm text-[#444444]"
        >
          Senior Full Stack Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={nameDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 max-w-lg text-body text-text-secondary"
        >
          4+ years building production web and mobile apps across fintech, SaaS, healthcare, and clean energy.
          <br />
          React · Angular · NestJS · LLM Integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={nameDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" variant="filled">
            View my work
          </Button>
          <Button href={withBasePath(socials.resume)} variant="ghost" external>
            Download resume ↓
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
