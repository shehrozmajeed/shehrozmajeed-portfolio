'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SectionBackground.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SectionBackground
 * Drop this as the first child of any `position: relative` section to give
 * it a cinematic, dark, blurred photo backdrop: slow CSS Ken Burns zoom +
 * GSAP scroll parallax + a configurable dark overlay so text stays fully
 * readable. Purely decorative (aria-hidden) and sits at z-index 0 — make
 * sure the section's actual content wrapper has `position: relative` and
 * `z-index: 1` (or higher) so it renders above this layer.
 *
 * overlay: 0–1, how dark the flat overlay on top of the image is
 * (0.7–0.85 recommended so the photo supports rather than competes with
 * the content).
 */
export default function SectionBackground({ src, alt = '', overlay = 0.8 }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const section = wrap.closest('section') ?? wrap.parentElement;

    const ctx = gsap.context(() => {
      gsap.to(wrap, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.bgLayer} aria-hidden="true">
      <div ref={wrapRef} className={styles.bgImgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={styles.bgImg} loading="lazy" />
      </div>
      <div className={styles.overlay} style={{ '--bg-overlay': overlay }} />
      <div className={styles.overlayGradient} />
    </div>
  );
}
