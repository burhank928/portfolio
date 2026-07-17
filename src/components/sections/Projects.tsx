'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Container from '@/components/ui/Container';
import { projects } from '@/lib/data';

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardHoverVariants: Variants = {
  rest: { scale: 1, borderColor: '#1c1c1c' },
  hover: { scale: 1.01, borderColor: '#2a2a2a', transition: { duration: 0.25, ease: 'easeOut' } },
};

const topBorderVariants: Variants = {
  rest: { width: '0%' },
  hover: { width: '100%', transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-px section-py">
      <Container>
        <SectionLabel>{'// projects'}</SectionLabel>
        <h2 className="mt-2 text-2xl font-medium text-text-primary">Projects</h2>

        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardRevealVariants} className="h-full">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                variants={cardHoverVariants}
                className="relative flex h-full flex-col overflow-hidden rounded-card border bg-surface p-4"
              >
                <motion.span variants={topBorderVariants} className="absolute left-0 top-0 h-[2px] bg-text-primary" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[15px] font-medium text-text-primary">{project.title}</h3>
                    <p className="mt-0.5 font-mono text-[11px] text-text-muted">{project.category}</p>
                  </div>
                  {project.metric && <span className="shrink-0 rounded-pill border border-border-strong bg-surface-elevated px-2 py-1 font-mono text-[10px] text-text-secondary">
                    {project.metric}
                  </span>}
                </div>

                <p className="mt-4 flex-1 text-body text-text-secondary">{project.description}</p>

                <p className="mt-4 font-mono text-[11px] text-text-muted">{project.linkLabel} ↗</p>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
