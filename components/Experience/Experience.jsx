'use client';

import useScrollReveal from '../shared/useScrollReveal';
import SectionBackground from '../shared/SectionBackground';
import { experience } from '../../lib/data';
import styles from './Experience.module.css';

/* Skills/tools per org for the tech tag row */
const ORG_TECH = {
  'NEXUS — Cybersecurity Society, GIK Institute': [
    'CTF', 'Penetration Testing', 'OWASP', 'Workshops', 'Leadership',
  ],
  'CyberSecurity Malaysia': [
    'Burp Suite', 'Nmap', 'OWASP ZAP', 'Pentest Reports', 'CVE Analysis',
  ],
};

export default function Experience() {
  const rootRef = useScrollReveal({ stagger: 0.12 });

  return (
    <section id="experience" ref={rootRef} className={styles.section}>
      <SectionBackground src="/images/backgrounds/experience.png" overlay={0.3} />
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-reveal>
          Work Experience
        </p>
        <h2 className={styles.heading} data-reveal>
          Where the work happened.
        </h2>

        <div className={styles.timeline}>
          {experience.map((job, i) => {
            const tech = ORG_TECH[job.org] || [];

            return (
              <div key={job.org} className={styles.item} data-reveal>
                {/* Numbered circle on the timeline */}
                <span className={styles.dot}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className={styles.card}>
                  {/* Period & location */}
                  <div className={styles.periodRow}>
                    <span className={styles.period}>{job.period}</span>
                    <span className={styles.typeBadge}>
                      {job.period.toLowerCase().includes('present') ? 'Current' : 'Completed'}
                    </span>
                    <span className={styles.locationBadge}>{job.location}</span>
                  </div>

                  {/* Organization & Role */}
                  <h3 className={styles.org}>{job.org}</h3>
                  <p className={styles.role}>{job.role}</p>

                  {job.priorRole && (
                    <p className={styles.priorRole}>
                      Previously: {job.priorRole}
                    </p>
                  )}

                  <ul className={styles.bullets}>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {tech.length > 0 && (
                    <div className={styles.techStack}>
                      {tech.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
