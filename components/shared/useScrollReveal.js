'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useScrollReveal
 * Attach to a section root. Any descendant with [data-reveal] fades/slides
 * up into place, staggered, the first time it crosses ~80% up the viewport.
 * Respects prefers-reduced-motion (renders content statically visible).
 */
export default function useScrollReveal({ stagger = 0.12 } = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { autoAlpha: 0, y: 34 });

      ScrollTrigger.batch(targets, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger,
          }),
      });
    }, root);

    return () => ctx.revert();
  }, [stagger]);

  return rootRef;
}
