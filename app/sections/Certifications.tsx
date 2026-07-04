"use client";

import SectionWrapper from "../components/SectionWrapper";
import styles from "./Certifications.module.css";

const TrophyIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 22V8h4v14"/><path d="M6 2h12v7a6 6 0 0 1-12 0V2z"/></svg>;
const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const CloudIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
const BugIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>;
const AwardIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const ExternalIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;

const certs = [
  {
    name: "Machine Learning",
    detail: "Udemy / Code Warriors",
    icon: CloudIcon,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    rank: "Certified",
    link: "https://www.udemy.com/certificate/UC-e84efbc6-21c5-49ee-9fd1-ab529e1f9499/",
  },
  {
    name: "Foundations of Cybersecurity",
    detail: "Google / Coursera",
    icon: ShieldIcon,
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    rank: "Certified",
    link: "https://www.coursera.org/account/accomplishments/verify/6S7Y81IOORYO",
  },
  {
    name: "Python and Flask",
    detail: "Horizon Tech Services",
    icon: AwardIcon,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    rank: "Certified",
    link: "https://www.udemy.com/certificate/UC-48b6cc7f-ea5a-4b04-9e5d-c6a8b0cc1feb/",
  },
  {
    name: "Bug Hunting",
    detail: "Practical Web Security",
    icon: BugIcon,
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)",
    rank: "Hunter",
    link: "https://www.udemy.com/certificate/UC-0600a0b1-0a6b-4a9f-827f-7dac2bff546e/",
  },
  {
    name: "AWS Cloud Clubs",
    detail: "Generative AI Camper",
    icon: CloudIcon,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    rank: "Certified",
    link: "https://www.credly.com/badges/5ff01b0c-5a2d-45a6-b55f-dbdfa90d3961/linked_in_profile",
  },
  {
    name: "Claude Code",
    detail: "Anthropic",
    icon: AwardIcon,
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    rank: "Certified",
    link: "https://verify.skilljar.com/c/owak62amrd8r",
  },
  {
    name: "Intro to MCP",
    detail: "Anthropic",
    icon: TrophyIcon,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    rank: "Elite",
    link: "https://verify.skilljar.com/c/eg9oqrvgmxmh",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Certifications & <span className={styles.titleAccent}>Rankings</span>
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.grid}>
        {certs.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel ${styles.certCard}`}
            >
              <div
                className={styles.certIconWrap}
                style={{ background: cert.bg }}
              >
                <Icon />
              </div>
              <span
                className={styles.certRank}
                style={{ background: cert.bg, color: cert.color }}
              >
                ✓ {cert.rank}
              </span>
              <h3 className={styles.certName}>{cert.name}</h3>
              <p className={styles.certDetail}>{cert.detail}</p>
              <div className={styles.certVerify}>
                Verify Credential <ExternalIcon />
              </div>
            </a>
          );
        })}
      </div>

      {/* TryHackMe Banner */}
      <a
        href="https://tryhackme.com/p/shehrozmajeed"
        target="_blank"
        rel="noopener noreferrer"
        className={`glass-panel ${styles.thmBanner}`}
      >
        <div className={styles.thmGlow} />
        <div className={styles.thmIconWrap}>
          <TrophyIcon />
        </div>
        <div className={styles.thmContent}>
          <div className={styles.thmLabel}>Global Platform Ranking</div>
          <h3 className={styles.thmTitle}>
            TryHackMe <span className={styles.thmHighlight}>| Top 5% Globally</span>
            <span className={styles.thmBadge}>View Profile</span>
          </h3>
          <p className={styles.thmDesc}>
            Completed intensive learning paths including{" "}
            <span className={styles.thmDescHighlight}>Jr Pentester</span> and{" "}
            <span className={styles.thmDescHighlight}>AI Security</span>.
            Demonstrated hands-on skills in penetration testing, privilege
            escalation, web exploitation, and network security. Accumulated
            over 8000+ points.
          </p>
        </div>
      </a>
    </SectionWrapper>
  );
}
