'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SectionLabel from '@/components/ui/SectionLabel';
import Container from '@/components/ui/Container';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) => setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <section id="testimonials" className="section-px section-py">
      <Container>
        <SectionLabel>{'// testimonials'}</SectionLabel>
        <h2 className="mt-2 text-2xl font-medium text-text-primary">What people say</h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-12 overflow-hidden rounded-card border border-border bg-surface p-8 md:p-10"
        >
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="text-body text-text-secondary">&ldquo;{current.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-[13px] font-medium text-text-primary">{current.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-text-muted">{current.title}</p>
                  <p className="mt-0.5 font-mono text-[10px] text-text-faint">{current.relationship}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? 'bg-text-primary' : 'bg-border-strong'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(index - 1)}
                className="rounded-button border border-border p-1.5 text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
              >
                <HiChevronLeft size={14} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(index + 1)}
                className="rounded-button border border-border p-1.5 text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
              >
                <HiChevronRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
