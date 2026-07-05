'use client';

import { useEffect, useState } from 'react';
import { profile, navLinks } from '../../lib/data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#top" className={styles.logo}>
          SM<span>.</span>
        </a>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.resumeUrl}
          download
          className={styles.resumeBtn}
          style={{ display: menuOpen ? 'none' : undefined }}
        >
          Resume
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          download
          className={styles.resumeBtn}
          style={{ width: 'fit-content' }}
          onClick={handleLinkClick}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
