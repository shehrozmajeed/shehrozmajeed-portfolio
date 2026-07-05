'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SmoothScrollProvider
 * Initializes Lenis for buttery inertia scrolling and syncs it with GSAP's
 * ticker + ScrollTrigger so every pin/parallax/reveal in the site stays
 * perfectly in step with the smoothed scroll position.
 *
 * Skips entirely under prefers-reduced-motion — native scroll behavior is
 * left untouched for anyone who's asked for reduced motion.
 */
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    let lenis;
    let rafCallback;
    let cancelled = false;

    // Loaded dynamically so this never executes server-side and never
    // blocks first paint on the (small) Lenis bundle.
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => lenis?.resize());
      ScrollTrigger.refresh();

      rafCallback = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      cancelled = true;
      if (rafCallback) gsap.ticker.remove(rafCallback);
      lenis?.destroy();
    };
  }, []);

  return children;
}
