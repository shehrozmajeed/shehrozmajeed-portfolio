"use client";

import SectionWrapper from "../components/SectionWrapper";
import styles from "./About.module.css";

const highlights = [
  {
    label: "Focus Area",
    title: "Offensive Mindset",
    desc: "Trained in ethical hacking, vulnerability assessment, and red-team operations with real-world lab experience.",
    tag: "Core",
    tagStyle: { background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.2)" },
  },
  {
    label: "Innovation",
    title: "AI + Security",
    desc: "Integrating machine learning into security workflows — from autonomous attack simulation to anomaly detection.",
    tag: "Specialty",
    tagStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)", border: "1px solid rgba(16,185,129,0.2)" },
  },
  {
    label: "Efficiency",
    title: "Automation First",
    desc: "Building tools that cut manual effort by 60%. Python-driven pipelines for reconnaissance, scanning, and reporting.",
    tag: "Skill",
    tagStyle: { background: "rgba(161,161,170,0.1)", color: "var(--text-secondary)", border: "1px solid rgba(161,161,170,0.15)" },
  },
  {
    label: "Architecture",
    title: "Zero Trust Design",
    desc: "Architecting micro-segmented networks and least-privilege systems for enterprise-grade resilience.",
    tag: "Concept",
    tagStyle: { background: "rgba(6,182,212,0.1)", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.2)" },
  },
];

/* Inline SVG icons */
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.summaryIcon}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 1 5 2.1A7 7 0 0 1 21 9c0 2-1 4-2 5l-1 7H6l-1-7c-1-1-2-3-2-5a7 7 0 0 1 4-4.9A7 7 0 0 1 12 2z"/></svg>
);
const TermIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const icons = [TargetIcon, BrainIcon, TermIcon, ShieldIcon];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>
          About <span className={styles.titleAccent}>Me</span>
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.grid}>
        {/* Summary panel */}
        <div className={`glass-panel ${styles.summaryPanel}`}>
          <div className={styles.summaryHeader}>
            <UserIcon />
            <span className={styles.summaryLabel}>Professional Summary</span>
          </div>

          <p className={styles.summaryText}>
            I am a Cybersecurity-focused Computer Science student at{" "}
            <span className={styles.summaryHighlight}>GIKI</span>, specializing
            in offensive security, red-team automation, and AI-driven defense. I
            bridge the gap between traditional security operations and
            next-generation automated threat modeling.
          </p>

          <p className={styles.summaryText}>
            My research encompasses IEEE-style publications on ML-based disaster
            recovery and building autonomous AI attack simulators that model full
            kill chains, from reconnaissance to persistence.
          </p>

          <p className={styles.summaryText} style={{ marginBottom: 0 }}>
            Beyond academics, I serve as the President of{" "}
            <span className={styles.summaryHighlight}>NEXUS</span> — leading a
            community of over 100 members through hands-on labs, CTF
            competitions, and industry-focused security workshops.
          </p>

          <div className={styles.statusBar}>
            <span className={styles.statusLabel}>STATUS</span>
            <span className={styles.statusValue}>
              <span className={styles.statusDot} />
              Seeking Opportunities
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className={styles.highlightsGrid}>
          {highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className={`glass-panel ${styles.highlightCard}`}>
                <div className={styles.highlightTop}>
                  <div className={styles.highlightIconWrap}>
                    <Icon />
                  </div>
                  <span className={styles.highlightTag} style={item.tagStyle}>
                    {item.tag}
                  </span>
                </div>
                <div className={styles.highlightLabel}>{item.label}</div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDesc}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
