'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Container from '@/components/ui/Container';
import Pill from '@/components/ui/Pill';
import PulsingDot from '@/components/ui/PulsingDot';
import { experience } from '@/lib/data';

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: { scale: [0, 1.4, 1], transition: { duration: 0.4, ease: 'easeOut' } },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-px section-py">
      <Container>
        <SectionLabel>{'// experience'}</SectionLabel>
        <h2 className="mt-2 text-2xl font-medium text-text-primary">Experience</h2>

        <motion.ol
          ref={ref}
          variants={listVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12"
        >
          {experience.map((role, i) => {
            const isLast = i === experience.length - 1;
            return (
              <motion.li key={`${role.company}-${role.role}`} variants={rowVariants} className="relative flex gap-6">
                <div className="flex w-4 flex-col items-center">
                  <motion.span
                    variants={dotVariants}
                    className="relative z-10 mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: role.nodeColor,
                      border: role.nodeBorder ? `1px solid ${role.nodeBorder}` : undefined,
                    }}
                  >
                    {role.current && <PulsingDot color={role.nodeColor} size={12} />}
                  </motion.span>
                  {!isLast && (
                    <motion.span
                      variants={lineVariants}
                      style={{ transformOrigin: 'top' }}
                      className="mt-1 w-px flex-1 bg-border-strong"
                    />
                  )}
                </div>

                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-12'}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[15px] font-medium text-text-primary">
                      {role.role}
                      {role.current && (
                        <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-wide text-accent-green">
                          current
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-[11px] text-text-muted">{role.period}</span>
                  </div>
                  <p className="mt-0.5 font-mono text-[11px] text-text-secondary">{role.company}</p>
                  <p className="mt-3 max-w-xl text-body text-text-secondary">{role.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
