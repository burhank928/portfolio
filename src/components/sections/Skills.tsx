'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Container from '@/components/ui/Container';
import Pill from '@/components/ui/Pill';
import { skills, highlightedSkills } from '@/lib/data';

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const labelVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const pillGroupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-px section-py">
      <Container>
        <SectionLabel>{'// skills'}</SectionLabel>
        <h2 className="mt-2 text-2xl font-medium text-text-primary">Skills</h2>

        <div ref={ref} className="mt-12 flex flex-col gap-8">
          {skills.map((row) => (
            <motion.div
              key={row.category}
              variants={rowVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8"
            >
              <motion.p variants={labelVariants} className="w-36 shrink-0 font-mono text-[11px] uppercase tracking-wide text-text-muted">
                {row.category}
              </motion.p>
              <motion.div variants={pillGroupVariants} className="flex flex-wrap gap-2">
                {row.skills.map((skill) => (
                  <motion.span key={skill} variants={pillVariants}>
                    <Pill highlighted={highlightedSkills.has(skill)}>{skill}</Pill>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
