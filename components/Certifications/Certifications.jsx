'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollReveal from '../shared/useScrollReveal';
import SectionBackground from '../shared/SectionBackground';
import { certifications } from '../../lib/data';
import styles from './Certifications.module.css';

const PALETTE = ['#ff9d52', '#7fa8ff', '#ffcf9e', '#9fd6c9', '#f0c26e', '#e8927c'];

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certifications() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const certs = certifications.filter((c) => c.type !== 'badge');
  const badges = certifications.filter((c) => c.type === 'badge');

  // Chunk certifications into groups of 4
  const chunkedCerts = [];
  for (let i = 0; i < certs.length; i += 4) {
    chunkedCerts.push(certs.slice(i, i + 4));
  }

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const panels = gsap.utils.toArray('[data-panel]', track);
    if (!panels.length) return;

    if (prefersReducedMotion) {
      gsap.set(track, { clearProps: 'transform' });
      return;
    }

    const getScrollDistance = () =>
      Math.max(track.scrollWidth - window.innerWidth, 0);

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });

      gsap.to(track, {
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
            const idx = Math.round(self.progress * (panels.length - 1));
            setActiveIndex(idx);
          },
        },
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

  return (
    <>
      <section ref={pinRef} id="certifications" className={styles.pinSection}>
        <SectionBackground src="/images/backgrounds/certifications.png" overlay={0.3} />
        
        <div className={styles.pinHeader}>
          <p className={styles.eyebrow}>Verified Credentials</p>
          <h2 className={styles.heading}>Licenses &amp; certifications.</h2>
          <p className={styles.headerNote}>
            {certifications.length} credentials across AI engineering,
            cybersecurity, and applied development — verifiable where a
            public credential link exists.
          </p>
        </div>

        <div className={styles.pinMeta} aria-live="polite">
          <span className={styles.pinCounter}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className={styles.pinCounterSep}>/</span>
          <span className={styles.pinCounterTotal}>
            {String(chunkedCerts.length).padStart(2, '0')}
          </span>
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className={styles.track}>
          {chunkedCerts.map((chunk, slideIndex) => (
            <div key={slideIndex} data-panel className={styles.panel}>
              <div className={styles.grid}>
                {chunk.map((cert, i) => (
                  <article key={cert.title} className={styles.card}>
                    <div className={styles.cardHead}>
                      <div
                        className={styles.monogram}
                        style={{ background: PALETTE[(slideIndex * 4 + i) % PALETTE.length] }}
                      >
                        {cert.issuer.charAt(0)}
                      </div>
                      <div className={styles.titleBlock}>
                        <h3 className={styles.title}>{cert.title}</h3>
                        <p className={styles.issuer}>{cert.issuer}</p>
                        {cert.credentialId && (
                          <p className={styles.credentialId}>
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>
                      {cert.date && (
                        <span className={styles.date}>
                          {cert.date}
                          {cert.expires && (
                            <>
                              <br />
                              Exp. {cert.expires}
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    {cert.skills.length > 0 && (
                      <div className={styles.skillsRow}>
                        {cert.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={styles.footer}>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={styles.verifyLink}
                        >
                          Verify Credential
                          <ExternalIcon />
                        </a>
                      ) : (
                        <span className={styles.noLink}>
                          <LockIcon />
                          Certificate on file
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badges section sits normally below the pinned section */}
      {badges.length > 0 && (
        <section className={styles.badgesSection}>
          <div className={styles.badgesBlock}>
            <p className={styles.badgesLabel}>TryHackMe Badges</p>
            <div className={styles.badgesRow}>
              {badges.map((badge, i) => (
                <a
                  key={badge.title}
                  href={badge.link ?? '#'}
                  target={badge.link ? '_blank' : undefined}
                  rel={badge.link ? 'noreferrer noopener' : undefined}
                  className={styles.badgeChip}
                  aria-disabled={!badge.link}
                >
                  <span
                    className={styles.badgeIcon}
                    style={{ background: PALETTE[(i + 2) % PALETTE.length] }}
                  >
                    <ShieldIcon />
                  </span>
                  <span className={styles.badgeTitle}>{badge.title}</span>
                  {badge.link && <ExternalIcon />}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 5 10 14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#060504" strokeWidth="2">
      <path
        d="M12 3 4.5 6v6c0 4.5 3.2 7.9 7.5 9 4.3-1.1 7.5-4.5 7.5-9V6L12 3z"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
