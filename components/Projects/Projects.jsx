'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollReveal from '../shared/useScrollReveal';
import { projects } from '../../lib/data';
import styles from './Projects.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* Projects #1–4 and #8 — pinned horizontal scroll (premium showcase) */
const FEATURED_TITLES = [
  'IPDR-Cloud',
  'KAPA v1.0',
  'Zero Trust Digital Twin',
  'SOC Log Analyzer',
  'AutoSchedule-GIK',
];

const FEATURED_BG = {
  'IPDR-Cloud': '/images/projects/ipdr.webp',
  'KAPA v1.0': '/images/projects/kapa.webp',
  'SOC Log Analyzer': '/images/projects/log-analyzer.webp',
  'Zero Trust Digital Twin': '/images/projects/zerotrust.webp',
  'AutoSchedule-GIK': '/images/projects/autoschedule.webp',
};

const featuredProjects = FEATURED_TITLES.map((title) =>
  projects.find((p) => p.title === title)
).filter(Boolean);

const otherProjects = projects.filter(
  (p) => !FEATURED_TITLES.includes(p.title)
);

export default function Projects() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const gridRef = useScrollReveal({ stagger: 0.08 });
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---- Pinned horizontal scroll for featured projects ---- */
  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    if (!pin || !track) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const panels = gsap.utils.toArray('[data-panel]', track);
    if (!panels.length) return;

    if (prefersReducedMotion) {
      gsap.set(track, { clearProps: 'transform' });
      panels.forEach((panel) => {
        const card = panel.querySelector('[data-card]');
        if (card) gsap.set(card, { autoAlpha: 1, scale: 1, y: 0 });
      });
      return;
    }

    const getScrollDistance = () =>
      Math.max(track.scrollWidth - window.innerWidth, 0);

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });

      const firstCard = panels[0]?.querySelector('[data-card]');
      if (firstCard) {
        gsap.set(firstCard, { scale: 1, autoAlpha: 1, y: 0 });
      }

      const scrollTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: (value) => {
              if (panels.length <= 1) return 0;
              const step = 1 / (panels.length - 1);
              return Math.round(value / step) * step;
            },
            duration: { min: 0.2, max: 0.55 },
            ease: 'power2.inOut',
          },
          onUpdate: (self) => {
            if (progressBar) {
              progressBar.style.transform = `scaleX(${self.progress})`;
            }
            const idx = Math.round(self.progress * (panels.length - 1));
            setActiveIndex(idx);
          },
        },
      });

      panels.forEach((panel, i) => {
        const card = panel.querySelector('[data-card]');
        const bg = panel.querySelector('[data-bg]');
        const title = panel.querySelector('[data-slide-title]');

        if (bg) {
          gsap.fromTo(
            bg,
            { xPercent: -18, scale: 1.18 },
            {
              xPercent: 18,
              scale: 1.02,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        }

        if (title) {
          gsap.fromTo(
            title,
            { xPercent: 8, autoAlpha: 0.04 },
            {
              xPercent: -8,
              autoAlpha: 0.12,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        }

        if (card && i > 0) {
          gsap.fromTo(
            card,
            { scale: 0.82, autoAlpha: 0, y: 56, rotateX: 8 },
            {
              scale: 1,
              autoAlpha: 1,
              y: 0,
              rotateX: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: 'left 72%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, pin);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <>
      {/* ═══ PINNED FEATURED PROJECTS ═══ */}
      <section ref={pinRef} id="work" className={styles.pinSection}>
        {/* Fixed header (absolute positioned, always visible) */}
        <div className={styles.pinHeader}>
          <p className={styles.eyebrow}>Featured Work</p>
          <h2 className={styles.heading}>
            Projects &amp; research.
          </h2>
          <p className={styles.pinScrollHint}>Scroll to explore</p>
        </div>

        <div className={styles.pinMeta} aria-live="polite">
          <span className={styles.pinCounter}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className={styles.pinCounterSep}>/</span>
          <span className={styles.pinCounterTotal}>
            {String(featuredProjects.length).padStart(2, '0')}
          </span>
        </div>

        <div className={styles.pinDots} aria-hidden="true">
          {featuredProjects.map((project, i) => (
            <span
              key={project.title}
              className={`${styles.pinDot} ${i === activeIndex ? styles.pinDotActive : ''}`}
            />
          ))}
        </div>

        <div className={styles.pinProgressTrack} aria-hidden="true">
          <div ref={progressRef} className={styles.pinProgressBar} />
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className={styles.track}>
          {featuredProjects.map((project, i) => (
            <div key={project.title} data-panel className={styles.panel}>
              <span className={styles.panelIndex} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 data-slide-title className={styles.slideTitle} aria-hidden="true">
                {project.title}
              </h3>

              {/* Cinematic background image */}
              <div className={styles.panelBg}>
                <div
                  data-bg
                  className={styles.panelBgImg}
                  style={{
                    backgroundImage: FEATURED_BG[project.title]
                      ? `url('${FEATURED_BG[project.title]}')`
                      : undefined,
                  }}
                />
                <div className={styles.panelBgOverlay} />
                <div className={styles.panelBgGradient} />
              </div>

              {/* Content Layout */}
              <div data-card className={styles.panelContent}>
                <div className={styles.panelLeft}>
                  <h3 className={styles.panelTitle}>{project.title}</h3>
                  <p className={styles.panelSubtitle}>{project.subtitle}</p>
                </div>

                <div className={styles.panelRight}>
                  <div className={styles.panelRightHeader}>
                    <span className={styles.panelPeriod}>{project.period}</span>
                    {project.featured && (
                      <span className={styles.featuredBadge}>Featured</span>
                    )}
                  </div>
                  
                  <p className={styles.panelDescription}>{project.description}</p>

                  <div className={styles.panelFooter}>
                    <div className={styles.panelStack}>
                      {project.stack.map((tech) => (
                        <span key={tech} className={styles.panelTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.repo ?? '#'}
                      target={project.repo ? '_blank' : undefined}
                      rel={project.repo ? 'noreferrer noopener' : undefined}
                      className={`${styles.repoLink} ${!project.repo ? styles.disabled : ''}`}
                      aria-label={
                        project.repo
                          ? `View ${project.title} on GitHub`
                          : 'Repository link not yet available'
                      }
                      aria-disabled={!project.repo}
                    >
                      <span className={styles.repoText}>View on GitHub</span>
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REMAINING PROJECTS GRID ═══ */}
      <section ref={gridRef} className={styles.section}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow} data-reveal>
              More Work
            </p>
            <h2 className={styles.heading} data-reveal>
              Other projects.
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className={styles.card}
              data-reveal
              onMouseMove={handleMouseMove}
            >
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardSubtitle}>{project.subtitle}</p>
                </div>
                <span className={styles.cardPeriod}>{project.period}</span>
              </div>

              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo ?? '#'}
                  target={project.repo ? '_blank' : undefined}
                  rel={project.repo ? 'noreferrer noopener' : undefined}
                  className={`${styles.repoLink} ${!project.repo ? styles.disabled : ''}`}
                  aria-label={
                    project.repo
                      ? `View ${project.title} on GitHub`
                      : 'Repository link not yet available'
                  }
                  aria-disabled={!project.repo}
                >
                  <span className={styles.repoText}>View on GitHub</span>
                  <GithubIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.11-3 0 0 .96-.31 3.13 1.16a10.8 10.8 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.61 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.37-2.66 5.33-5.19 5.61.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}
