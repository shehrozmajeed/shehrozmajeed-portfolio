"use client";

import SectionWrapper from "../components/SectionWrapper";
import styles from "./Experience.module.css";

const UsersIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const BriefcaseIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const CalendarIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;

const experiences = [
  {
    role: "President",
    org: "NEXUS — Cybersecurity Society, GIKI",
    period: "May 2026 – Present",
    type: "Leadership",
    clearance: "Executive",
    clearanceStyle: { background: "var(--accent-blue-dim)", color: "var(--accent-blue)", border: "1px solid rgba(59,130,246,0.2)" },
    icon: UsersIcon,
    points: [
      "Leading 100+ member cybersecurity society as President.",
      "Established industry speaker sessions and hands-on lab programs.",
      "Grew active membership by 30%+ through workshops and CTF competitions.",
      "Previously led the Cybersecurity Division (2024–Apr 2026).",
    ],
  },
  {
    role: "Ethical Hacking Intern",
    org: "CyberSecurity Malaysia",
    period: "Jun 2024 – Jul 2024",
    type: "Internship",
    clearance: "Technical",
    clearanceStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)", border: "1px solid rgba(16,185,129,0.2)" },
    icon: BriefcaseIcon,
    points: [
      "Conducted vulnerability assessments on live web applications.",
      "Used Burp Suite, Nmap, and OWASP ZAP for structured pentesting.",
      "Delivered professional reports with CVEs, risk ratings, and remediation steps.",
      "Applied OWASP Top 10 methodology across multiple assessment targets.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Experience & <span className={styles.titleAccent}>Leadership</span>
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.list}>
        {experiences.map((exp, i) => {
          const Icon = exp.icon;
          return (
            <div key={i} className={`glass-panel ${styles.expCard}`}>
              <div className={styles.expTop}>
                <div className={styles.expLeft}>
                  <div className={styles.expIconWrap}>
                    <Icon />
                  </div>
                  <div>
                    <div className={styles.expMeta}>
                      <span className={styles.expType}>{exp.type}</span>
                      <span className={styles.expClearance} style={exp.clearanceStyle}>
                        {exp.clearance}
                      </span>
                    </div>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expOrg}>{exp.org}</p>
                  </div>
                </div>
                <div className={styles.expPeriod}>
                  <CalendarIcon />
                  {exp.period}
                </div>
              </div>

              <ul className={styles.expPoints}>
                {exp.points.map((point, pi) => (
                  <li key={pi} className={styles.expPoint}>
                    <span className={styles.expDot} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
