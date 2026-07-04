"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

/* Inline icons for menu toggle */
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
    >
      <div className={styles.navInner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>
            S<span className={styles.logoAccent}>M</span>
          </span>
          <span className={styles.logoDivider}>|</span>
          <span className={styles.logoSub}>Portfolio</span>
        </a>

        {/* Desktop links */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.navLink}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className={styles.navActions}>
          <a
            href="/Shehroz_Majeed_Resume.pdf"
            download
            className={styles.navCta}
          >
            Resume
          </a>
          <a
            href="#contact"
            className={`${styles.navCta} ${styles.navCtaPrimary}`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/Shehroz_Majeed_Resume.pdf"
          download
          className={styles.mobileLink}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
