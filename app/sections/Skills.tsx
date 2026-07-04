"use client";

import { useRef, useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Offensive Security",
    color: "#ef4444",
    glow: "0 0 10px rgba(239,68,68,0.5)",
    skills: [
      { name: "Web App Pen Testing (OWASP)", level: 95 },
      { name: "Network Security & Recon", level: 90 },
      { name: "API Security (JWT, IDOR)", level: 85 },
      { name: "Threat Modeling (STRIDE/DREAD)", level: 88 },
      { name: "Vulnerability Assessment", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "#3b82f6",
    glow: "0 0 10px rgba(59,130,246,0.5)",
    skills: [
      { name: "Burp Suite Pro", level: 95 },
      { name: "Metasploit Framework", level: 90 },
      { name: "Nmap / Wireshark", level: 92 },
      { name: "Gobuster / ffuf / Hydra", level: 88 },
      { name: "OSINT (Shodan, etc.)", level: 85 },
    ],
  },
  {
    title: "Programming",
    color: "#10b981",
    glow: "0 0 10px rgba(16,185,129,0.5)",
    skills: [
      { name: "Python", level: 95 },
      { name: "Bash Scripting", level: 88 },
      { name: "SQL Injection & Database", level: 85 },
      { name: "JavaScript / TypeScript", level: 78 },
      { name: "C / C++", level: 80 },
    ],
  },
  {
    title: "AI / ML in Security",
    color: "#a855f7",
    glow: "0 0 10px rgba(168,85,247,0.5)",
    skills: [
      { name: "Anomaly Detection", level: 90 },
      { name: "PyTorch / Scikit-learn", level: 85 },
      { name: "Reinforcement Learning (DQN)", level: 82 },
      { name: "Log Analysis / SIEM", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, glow }: { name: string; level: number; color: string; glow: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={`${styles.skillFill} ${visible ? styles.visible : ""}`}
          style={{
            width: visible ? `${level}%` : "0%",
            background: color,
            boxShadow: glow,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Technical <span className={styles.titleAccent}>Arsenal</span>
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => (
          <div key={i} className={`glass-panel ${styles.categoryCard}`}>
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryDot}
                style={{ background: cat.color, boxShadow: cat.glow }}
              />
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
            </div>
            {cat.skills.map((skill, si) => (
              <SkillBar
                key={si}
                name={skill.name}
                level={skill.level}
                color={cat.color}
                glow={cat.glow}
              />
            ))}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
