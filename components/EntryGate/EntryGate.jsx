'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './EntryGate.module.css';

const SESSION_KEY = 'sm_entry_gate_shown';

/**
 * EntryGate
 * A cinematic split-curtain reveal in front of the hero. Clicking "Start"
 * is a genuine user gesture, so the browser allows the very next play()
 * call on the hero video to include audio — this is the only reliable way
 * to get sound playing right at the start of the experience.
 *
 * The curtain splits from the centre seam: the top half slides up, the
 * bottom half slides down, while the hero content beneath fades in and
 * scales up in sync (driven by VideoIntro's own paused entrance timeline,
 * released via onEnter()).
 *
 * Runs once per browser session — sessionStorage remembers that the
 * visitor has already seen it, so navigating within the same tab session
 * won't replay the curtain. A fresh tab/session shows it again.
 */
export default function EntryGate({ onEnter }) {
  const [skip, setSkip] = useState(null); // null = not yet determined
  const [done, setDone] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const alreadyShown =
      typeof window !== 'undefined' &&
      sessionStorage.getItem(SESSION_KEY) === '1';
    setSkip(alreadyShown);

    if (alreadyShown) {
      // Still attempt to start the hero (best-effort autoplay); there's no
      // fresh click gesture on a repeat visit within the same session, so
      // this may land muted, same as any normal autoplay-blocked page.
      // Defer execution by one tick so VideoIntro has time to build its GSAP timeline.
      setTimeout(() => {
        onEnter?.();
      }, 50);
    } else {
      document.body.style.overflow = 'hidden';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleStart() {
    sessionStorage.setItem(SESSION_KEY, '1');

    // Fire immediately, inside the click handler, so the browser still
    // credits this as the user gesture that unlocks audio.
    onEnter?.();

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.to(contentRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        onComplete: finish,
      });
      return;
    }

    gsap
      .timeline({ onComplete: finish })
      .to(
        contentRef.current,
        { autoAlpha: 0, y: -10, duration: 0.4, ease: 'power2.out' },
        0
      )
      .to(
        topRef.current,
        { yPercent: -100, duration: 1.3, ease: 'power4.inOut' },
        0
      )
      .to(
        bottomRef.current,
        { yPercent: 100, duration: 1.3, ease: 'power4.inOut' },
        0
      );
  }

  function finish() {
    document.body.style.overflow = '';
    setDone(true);
  }

  if (skip) return null;

  return (
    <div className={`${styles.gate} ${done ? styles.done : ''}`}>
      <div ref={topRef} className={`${styles.half} ${styles.top}`} />
      <div ref={bottomRef} className={`${styles.half} ${styles.bottom}`} />
      <div className={styles.seamLine} aria-hidden="true" />

      <div ref={contentRef} className={styles.content}>
        <p className={styles.tagline}>Cybersecurity &amp; Applied AI Engineering</p>
        <p className={styles.mark}>
          SM<span>.</span>
        </p>
        <button type="button" className={styles.startBtn} onClick={handleStart}>
          Start
        </button>
        <p className={styles.hint}>Enables sound for the intro</p>
      </div>
    </div>
  );
}
