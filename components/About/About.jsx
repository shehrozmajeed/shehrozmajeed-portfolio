'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from '../shared/SectionBackground';
import { profile, stats, education, thmPaths } from '../../lib/data';
import styles from './About.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const rootRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Left Column (fly in from far left outside the viewport)
      gsap.fromTo(
        leftRef.current.children,
        { autoAlpha: 0, x: '-100vw' },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
          },
        }
      );

      // Animate Right Column (photo, stat cards, and path badges from far right)
      const rightItems = rightRef.current.querySelectorAll(
        `.${styles.photoWrap}, .${styles.statCard}, .${styles.pathBadge}`
      );
      gsap.fromTo(
        rightItems,
        { autoAlpha: 0, x: '100vw' },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className={styles.section}>
      <SectionBackground src="/images/backgrounds/about.png" overlay={0.3} />
      <div className={styles.inner}>
        <div ref={leftRef}>
          <p className={styles.eyebrow}>About</p>
          <h2 className={styles.heading}>
            Breaking systems <em>to build</em> better ones.
          </h2>
          <div className={styles.summary}>
            {profile.summary.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className={styles.educationCard}>
            <h3>{education.degree}</h3>
            <p>
              {education.school} · {education.period}
            </p>
            <p>{education.focus}</p>
            <span className={styles.badge}>{education.location}</span>
          </div>
        </div>

        <div ref={rightRef}>
          <div className={styles.photoWrap}>
            <img src="/images/profile.png" alt="Shehroz Majeed" className={styles.profilePhoto} />
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.pathsRow}>
            {thmPaths.map((path) => {
              const Content = (
                <>
                  <span className={styles.pathDot} />
                  <div>
                    <div className={styles.pathName}>{path.name}</div>
                    <div className={styles.pathStatus}>{path.status}</div>
                  </div>
                </>
              );

              return path.link ? (
                <a
                  key={path.name}
                  href={path.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.pathBadge}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  {Content}
                </a>
              ) : (
                <div key={path.name} className={styles.pathBadge}>
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
