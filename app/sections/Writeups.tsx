"use client";

import SectionWrapper from "../components/SectionWrapper";
import styles from "./Writeups.module.css";

const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const CpuIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const BookIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
const ExternalIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;

const writeups = [
  {
    title: "Jr Penetration Tester Path",
    icon: ShieldIcon,
    tag: "OFFENSIVE SECURITY",
    completed: "100%",
    description:
      "Comprehensive walkthroughs focusing on penetration testing fundamentals and core methodologies. Covers active and passive reconnaissance, vulnerability exploitation, and reporting.",
    topics: [
      "Penetration Testing Foundations",
      "Network Reconnaissance & Nmap",
      "Burp Suite",
      "Web App Vulnerabilities",
      "OWASP Top 10 (2025)",
      "Metasploit & Exploitation",
      "Pentesting Methodologies",
    ],
    github:
      "https://github.com/shehrozmajeed/ctf-writeups/tree/main/tryhackme/Jr%20Penetration%20Tester",
  },
  {
    title: "AI Security Path",
    icon: CpuIcon,
    tag: "AI SECURITY",
    completed: "100%",
    description:
      "Detailed notes and lab solutions focusing on the intersection of artificial intelligence and cybersecurity. Exploring threats, vulnerabilities, and defenses in AI systems.",
    topics: [
      "AI Fundamentals",
      "Secure AI Systems",
      "Threat Modeling for AI",
      "AI Vulnerability Analysis",
    ],
    github:
      "https://github.com/shehrozmajeed/ctf-writeups/tree/main/tryhackme/Ai%20Security",
  },
];

export default function Writeups() {
  return (
    <SectionWrapper id="writeups">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Technical Writing</span>
        <h2 className={styles.sectionTitle}>Writeups & Walkthroughs</h2>
        <p className={styles.sectionDesc}>
          Documented solutions and methodologies for{" "}
          <span className={styles.sectionDescHighlight}>100+</span> TryHackMe
          rooms, focusing on offensive security and AI systems.
        </p>
      </div>

      <div className={styles.grid}>
        {writeups.map((writeup, i) => {
          const Icon = writeup.icon;
          return (
            <div key={i} className={`glass-panel ${styles.writeupCard}`}>
              <div className={styles.writeupTop}>
                <div className={styles.writeupIconRow}>
                  <div className={styles.writeupIconWrap}>
                    <Icon />
                  </div>
                  <span className={styles.writeupTag}>{writeup.tag}</span>
                </div>
                <span className={styles.writeupComplete}>
                  COMPLETED: {writeup.completed}
                </span>
              </div>

              <h3 className={styles.writeupTitle}>{writeup.title}</h3>
              <p className={styles.writeupDesc}>{writeup.description}</p>

              <span className={styles.topicsLabel}>Key Topics Covered</span>
              <div className={styles.topicsList}>
                {writeup.topics.map((topic) => (
                  <span key={topic} className={styles.topicTag}>
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href={writeup.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.writeupLink}
              >
                <BookIcon /> View Walkthroughs <ExternalIcon />
              </a>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
