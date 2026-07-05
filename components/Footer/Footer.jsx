'use client';

import styles from './Footer.module.css';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Shehroz Majeed. All rights reserved.
      </p>
      <button type="button" className={styles.backToTop} onClick={scrollToTop}>
        Back to top ↑
      </button>
    </footer>
  );
}
