import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow} />
      <div className={styles.footerInner}>
        <div className={styles.footerName}>
          Shehroz <span className={styles.footerNameAccent}>Majeed</span>
        </div>
        <p className={styles.footerTech}>
          Next.js · Three.js · GSAP · CSS Modules
        </p>
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
