"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import styles from "./VideoIntro.module.css";

/* ── INLINE SVG ICONS ── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="6,4 20,12 6,20" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <rect x="5" y="4" width="4" height="16" rx="1" />
    <rect x="15" y="4" width="4" height="16" rx="1" />
  </svg>
);
const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);
const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const SoundWaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="8" x2="4" y2="16" />
    <line x1="8" y1="6" x2="8" y2="18" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="16" y1="6" x2="16" y2="18" />
    <line x1="20" y1="8" x2="20" y2="16" />
  </svg>
);

const socials = [
  { icon: GithubIcon, href: "https://github.com/shehrozmajeed", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/shehroz-majeed-a46a012b8", label: "LinkedIn" },
  { icon: TerminalIcon, href: "https://tryhackme.com/p/shehrozmajeed", label: "TryHackMe" },
  { icon: MailIcon, href: "mailto:shehrozmajeed.sec@gmail.com", label: "Email" },
];

export default function VideoIntro() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientRef = useRef<HTMLVideoElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLDivElement>(null);
  const lastNameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const soundHintRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);

  /* ── GSAP ENTRANCE ANIMATION ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Fade in the whole hero
      tl.to(heroRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });

      // Tagline slides up
      tl.to(
        taglineRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // First name slides up
      tl.fromTo(
        firstNameRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
        "-=0.3"
      );

      // Last name slides up
      tl.fromTo(
        lastNameRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
        "-=0.5"
      );

      // Subtitle fades in
      tl.to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      // Social links fade in
      tl.to(
        socialRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

      // Controls fade in
      tl.to(
        controlsRef.current,
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );

      // Scroll indicator fade in
      tl.to(
        scrollRef.current,
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.1"
      );
    });

    return () => ctx.revert();
  }, []);

  /* ── AUTO-HIDE SOUND HINT ── */
  useEffect(() => {
    const timer = setTimeout(() => setShowSoundHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  /* ── VIDEO CONTROLS ── */
  const togglePlay = useCallback(() => {
    if (!videoRef.current || !ambientRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      ambientRef.current.pause();
    } else {
      videoRef.current.play();
      ambientRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current || !ambientRef.current) return;
    videoRef.current.muted = !isMuted;
    ambientRef.current.muted = true; // ambient always muted
    setIsMuted(!isMuted);
    setShowSoundHint(false);
  }, [isMuted]);

  const handleSoundHint = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
    setShowSoundHint(false);
  }, []);

  const handleScroll = useCallback(() => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.heroWrapper} ${styles.heroFadeIn}`}
      id="hero"
    >
      {/* AMBIENT (BLURRED) VIDEO LAYER */}
      <div className={styles.ambientLayer}>
        <video
          ref={ambientRef}
          className={styles.ambientVideo}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      {/* FOREGROUND VIDEO */}
      <div className={styles.foregroundLayer}>
        <video
          ref={videoRef}
          className={styles.foregroundVideo}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* CINEMATIC GRADIENT OVERLAYS */}
      <div className={styles.gradientOverlay} />

      {/* CONTENT: Name, tagline, social links */}
      <div className={styles.contentOverlay}>
        {/* Tagline */}
        <div
          ref={taglineRef}
          className={styles.tagline}
          style={{ transform: "translateY(20px)" }}
        >
          Offensive Security Engineer
        </div>

        {/* Name */}
        <div className={styles.nameBlock}>
          <div ref={firstNameRef} className={styles.firstName}>
            SHEHROZ
          </div>
          <div ref={lastNameRef} className={styles.lastName}>
            MAJEED.
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={styles.subtitle}
          style={{ transform: "translateY(15px)" }}
        >
          Bridging{" "}
          <span className={styles.subtitleHighlight}>Offensive Security</span>{" "}
          and <span className={styles.subtitleHighlight}>AI/ML</span> —
          automated attack simulation, vulnerability research & red team
          automation at{" "}
          <span className={styles.subtitleHighlight}>GIKI</span>.
        </p>

        {/* Social Links */}
        <div
          ref={socialRef}
          className={styles.socialRow}
          style={{ transform: "translateY(10px)" }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={s.label}
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>

      {/* SOUND HINT */}
      <div
        ref={soundHintRef}
        className={`${styles.soundHint} ${!showSoundHint ? styles.hidden : ""}`}
        onClick={handleSoundHint}
      >
        <SoundWaveIcon />
        Tap for sound
      </div>

      {/* VIDEO CONTROLS */}
      <div ref={controlsRef} className={styles.controlsRow}>
        <button
          className={styles.controlBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          className={styles.controlBtn}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        ref={scrollRef}
        className={styles.scrollIndicator}
        onClick={handleScroll}
        aria-label="Scroll to next section"
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </button>
    </section>
  );
}
