'use client';

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import gsap from 'gsap';
import CinematicLayer from './CinematicLayer';
import { profile } from '../../lib/data';
import styles from './VideoIntro.module.css';

const VIDEO_SRC = '/videos/hero-talking.mp4';
const NEXT_SECTION_ID = 'about';

const VideoIntro = forwardRef(function VideoIntro(_props, ref) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  const taglineRef = useRef(null);
  const nameLine1Ref = useRef(null);
  const nameLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const highlightsRef = useRef(null);
  const controlsRef = useRef(null);
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const introTlRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [showSoundBadge, setShowSoundBadge] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  // ---- called by EntryGate the moment the curtain reveal starts ----
  // that click is a genuine user gesture, so this play() call is allowed
  // to include audio — this is the only reliable way to get sound at
  // the very start of the experience. It also releases the (until-now
  // paused) hero entrance timeline so the name/tagline/etc fade + scale
  // in exactly as the curtain splits apart.
  useImperativeHandle(ref, () => ({
    enter() {
      const vid = videoRef.current;
      if (vid) {
        vid.muted = false;
        vid.currentTime = 0;

        vid.play()
          .then(() => setIsMuted(false))
          .catch(() => {
            vid.muted = true;
            setIsMuted(true);
            setShowSoundBadge(true);
            vid.play().catch(() => {});
          });
        setIsPlaying(true);
      }

      introTlRef.current?.play();
    },
  }));

  // ---- GSAP entrance timeline (starts paused; EntryGate.enter() plays it) ----
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        paused: true,
      });
      introTlRef.current = tl;

      tl.to(rootRef.current, { autoAlpha: 1, duration: 1.1 }, 0)
        .fromTo(
          contentRef.current,
          { autoAlpha: 0, scale: 0.94 },
          { autoAlpha: 1, scale: 1, duration: 1.3, ease: 'power4.out' },
          0
        )
        .fromTo(
          taglineRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          0.35
        )
        .fromTo(
          nameLine1Ref.current,
          { autoAlpha: 0, y: 60, skewY: 2 },
          { autoAlpha: 1, y: 0, skewY: 0, duration: 1.1 },
          0.5
        )
        .fromTo(
          nameLine2Ref.current,
          { autoAlpha: 0, y: 60, skewY: 2 },
          { autoAlpha: 1, y: 0, skewY: 0, duration: 1.1 },
          0.66
        )
        .fromTo(
          subtitleRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          0.95
        )
        .fromTo(
          highlightsRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          1.08
        )
        .fromTo(
          controlsRef.current,
          { autoAlpha: 0, y: -12 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.7
        )
        .fromTo(
          scrollRef.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          1.3
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // ---- auto-hide "tap for sound" badge ----
  useEffect(() => {
    if (!isMuted) {
      setShowSoundBadge(false);
      return;
    }
    const timer = setTimeout(() => setShowSoundBadge(false), 5000);
    return () => clearTimeout(timer);
  }, [isMuted]);

  // ---- video event listeners ----
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleCanPlay = () => setVideoReady(true);
    const handleEnded = () => {
      setIsPlaying(false);
      setHasEnded(true);
    };

    vid.addEventListener('loadeddata', handleCanPlay);
    vid.addEventListener('ended', handleEnded);

    return () => {
      vid.removeEventListener('loadeddata', handleCanPlay);
      vid.removeEventListener('ended', handleEnded);
    };
  }, []);

  function restart() {
    const vid = videoRef.current;
    if (!vid) return;

    vid.currentTime = 0;
    vid.play().catch(() => {});
    setIsPlaying(true);
    setHasEnded(false);
  }

  function togglePlay() {
    const vid = videoRef.current;
    if (!vid) return;

    if (hasEnded) {
      restart();
      return;
    }

    if (isPlaying) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }

  function toggleMute() {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  }

  function scrollToNext() {
    document
      .getElementById(NEXT_SECTION_ID)
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section ref={rootRef} className={styles.hero} style={{ opacity: 0, visibility: 'hidden' }}>
      {/* ---- media ---- */}
      <div className={styles.mediaLayer}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          src={VIDEO_SRC}
          muted={isMuted}
          playsInline
          preload="auto"
        />
      </div>

      {/* ---- cinematic particle layer ---- */}
      <CinematicLayer particleCount={90} />

      {/* ---- color grading + grain ---- */}
      <div className={styles.grade} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      {/* ---- controls ---- */}
      <div ref={controlsRef} className={styles.controls}>
        <button
          type="button"
          className={styles.glassBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type="button"
          className={styles.glassBtn}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <MuteIcon /> : <UnmuteIcon />}
        </button>
      </div>

      <div
        className={`${styles.soundBadge} ${showSoundBadge ? '' : styles.hidden}`}
        aria-hidden={!showSoundBadge}
      >
        <span className={styles.pulseDot} />
        Tap for sound
      </div>

      {/* ---- content ---- */}
      <div ref={contentRef} className={styles.content}>
        <p ref={taglineRef} className={styles.tagline}>
          Cybersecurity &amp; Applied AI Engineering
        </p>

        <div className={styles.nameBlock}>
          <h1 ref={nameLine1Ref} className={styles.nameLine}>
            <span>SHEHROZ</span>
          </h1>
          <h1 ref={nameLine2Ref} className={`${styles.nameLine} ${styles.accent}`}>
            <span>MAJEED</span>
          </h1>
        </div>

        <p ref={subtitleRef} className={styles.subtitle}>
          <strong>Offensive security researcher</strong> and machine-learning
          engineer building autonomous red-team systems, zero-trust
          architectures, and intelligent defense pipelines.
        </p>

        <div ref={highlightsRef} className={styles.highlights}>
          {profile.heroHighlights.map((highlight) => (
            <span key={highlight} className={styles.highlightPill}>
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* ---- replay overlay (shown once playback ends — no loop) ---- */}
      <div className={`${styles.replayOverlay} ${hasEnded ? styles.visible : ''}`}>
        <button
          type="button"
          className={styles.replayBtn}
          onClick={restart}
          aria-label="Replay video"
        >
          <span className={styles.replayCircle}>
            <ReplayIcon />
          </span>
          <span className={styles.replayLabel}>Replay</span>
        </button>
      </div>

      {/* ---- scroll indicator ---- */}
      <button
        ref={scrollRef}
        type="button"
        className={styles.scrollIndicator}
        onClick={scrollToNext}
        aria-label="Scroll to work section"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </button>
    </section>
  );
});

export default VideoIntro;

/* ---------------- inline icons (no external icon lib needed) ---------------- */

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
      <path d="M17 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
      <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="0" />
      <line x1="15.5" y1="4.5" x2="20.5" y2="19.5" strokeLinecap="round" />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M4 12a8 8 0 1 1 2.5 5.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 17v-5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
      <path d="M17 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
      <path d="M19.5 6a9 9 0 0 1 0 12" strokeLinecap="round" />
    </svg>
  );
}
