'use client';

import useScrollReveal from '../shared/useScrollReveal';
import SectionBackground from '../shared/SectionBackground';
import { profile } from '../../lib/data';
import styles from './Contact.module.css';

export default function Contact() {
  const rootRef = useScrollReveal();

  return (
    <section id="contact" ref={rootRef} className={styles.section}>
      <SectionBackground src="/images/backgrounds/contact.png" overlay={0.3} />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.panel}>
        <p className={styles.eyebrow} data-reveal>
          Contact
        </p>
        <h2 className={styles.heading} data-reveal>
          Let&apos;s build something secure.
        </h2>
        <p className={styles.subtext} data-reveal>
          Open to internships, research collaborations, and offensive
          security work. Reach out directly or grab the full resume.
        </p>

        <div className={styles.actions} data-reveal>
          <a href={`mailto:${profile.email}`} className={styles.primaryBtn}>
            Say Hello
          </a>
          <a href={profile.resumeUrl} download className={styles.secondaryBtn}>
            Download Resume
          </a>
        </div>

        <div className={styles.socials} data-reveal>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.tryhackme}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.socialLink}
            aria-label="TryHackMe"
          >
            <ShieldIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={styles.socialLink}
            aria-label="Email"
          >
            <MailIcon />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className={styles.socialLink}
            aria-label="Phone"
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.11-3 0 0 .96-.31 3.13 1.16a10.8 10.8 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.61 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.37-2.66 5.33-5.19 5.61.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21h-4V9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 3 4.5 6v6c0 4.5 3.2 7.9 7.5 9 4.3-1.1 7.5-4.5 7.5-9V6L12 3z"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.05-.24c1.15.4 2.4.6 3.65.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.25.2 2.5.6 3.65a1 1 0 0 1-.24 1.05L6.6 10.8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
