"use client";

import SectionWrapper from "../components/SectionWrapper";
import styles from "./Projects.module.css";

/* Inline SVG icons */
const CpuIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const FlaskIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>;
const NetworkIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><path d="M5 16v-4h14v4"/><path d="M12 12V8"/></svg>;
const ActivityIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const GlobeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const ShieldCheckIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
const HeartIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const CalendarIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const WrenchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const GithubIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const ArrowIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;

const projects = [
  {
    title: "KAPA v1.0 — Autonomous AI Attacker",
    icon: CpuIcon,
    tag: "Red Team / AI",
    period: "Oct – Dec 2025",
    status: "Deployed",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Manual red-team exercises are time-intensive and inconsistent across engagements.",
    approach: "Autonomous AI agent using Python and Scapy modeling full kill chains: reconnaissance, exploitation, and persistence.",
    impact: "Reduced red-team effort by ~60% with repeatable, auditable attack simulations.",
    stack: ["Python", "Machine Learning", "Scapy"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "IPDR-Cloud — ML Proactive Disaster Recovery",
    icon: FlaskIcon,
    tag: "Research",
    period: "Jan – Apr 2026",
    status: "Published",
    statusStyle: { background: "var(--accent-blue-dim)", color: "var(--accent-blue)" },
    problem: "Cloud outages cause costly SLA breaches when recovery is reactive rather than predictive.",
    approach: "IEEE-style paper on a DQN RL agent trained on Google Cluster Trace 2019 to proactively trigger disaster recovery.",
    impact: "96.5% SLA compliance. Mean RPO cut to 0.5 min. Zero SLA breaches in evaluation.",
    stack: ["Python", "DQN", "PyTorch", "Reinforcement Learning"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "Zero Trust Digital Twin",
    icon: NetworkIcon,
    tag: "Architecture",
    period: "Jan – Apr 2026",
    status: "Active",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Legacy flat networks expose lateral-movement paths to attackers.",
    approach: "Cisco enterprise network digital twin implementing micro-segmentation and least-privilege access controls.",
    impact: "Demonstrated zero-trust principles in a realistic enterprise topology.",
    stack: ["Cisco Packet Tracer", "Zero Trust", "Micro-segmentation"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "SOC Log Analyzer",
    icon: ActivityIcon,
    tag: "Blue Team / ML",
    period: "Jan – Apr 2026",
    status: "Running",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "SOCs are overwhelmed by false positives and noisy log data.",
    approach: "Isolation-forest ML pipeline for real-time anomaly detection across system logs.",
    impact: "High-precision alerts that cut analyst triage overhead significantly.",
    stack: ["Python", "Scikit-learn", "Isolation Forest"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "Web Vulnerability Scanner",
    icon: GlobeIcon,
    tag: "Offensive",
    period: "Oct – Dec 2024",
    status: "Deployed",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Manual OWASP Top 10 testing does not scale across multiple targets.",
    approach: "Automated scanner using Python and BeautifulSoup detecting SQLi, XSS, broken auth, and more.",
    impact: "Comprehensive OWASP Top 10 coverage with structured reporting.",
    stack: ["Python", "BeautifulSoup", "OWASP Top 10"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "AlumNet — Secure Alumni Platform",
    icon: ShieldCheckIcon,
    tag: "Secure WebApp",
    period: "Jan – Apr 2026",
    status: "Pentested",
    statusStyle: { background: "var(--accent-blue-dim)", color: "var(--accent-blue)" },
    problem: "Mentorship platforms need airtight, role-based access control to be trustworthy.",
    approach: "Role-based Flask web app (Student/Alumni/Admin) with STRIDE threat model, bcrypt, RBAC, CSP, rate-limiting.",
    impact: "Mitigated all OWASP Top 10 risks, verified via in-house pentest before deployment.",
    stack: ["Flask", "SQLAlchemy", "JavaScript"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "MedSentinel — IoT Rural Clinic Monitor",
    icon: HeartIcon,
    tag: "IoT / Healthcare",
    period: "Oct – Dec 2025",
    status: "Active",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Rural clinics can silently go dark with no automated detection.",
    approach: "ESP32 + sensor-fusion system detecting ghost clinics in real time, validated with NGO stakeholders.",
    impact: "86% detection accuracy and 95.8% uptime, validated by NGO stakeholders.",
    stack: ["ESP32", "Python", "Machine Learning"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "AutoSchedule-GIK",
    icon: CalendarIcon,
    tag: "Systems",
    period: "Jan – Apr 2026",
    status: "Stable",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Manual timetabling can't satisfy room, faculty, and course constraints at scale.",
    approach: "Conflict-free timetable engine for GIKI handling room, faculty, and course constraints simultaneously.",
    impact: "Automated a previously manual, error-prone scheduling process for the department.",
    stack: ["Python"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "LNTv2.0 — Local Network Toolkit",
    icon: WrenchIcon,
    tag: "Tooling",
    period: "Jun – Jul 2025",
    status: "Deployed",
    statusStyle: { background: "var(--accent-emerald-dim)", color: "var(--accent-emerald)" },
    problem: "Switching between 10+ separate Kali Linux tools slows down pentest setup.",
    approach: "GUI-based suite in Python/Tkinter consolidating Nmap, Metasploit, and other core Kali tools into one interface.",
    impact: "Reduced pentest task setup time by 40%.",
    stack: ["Python", "Tkinter", "Nmap", "Metasploit"],
    github: "https://github.com/shehrozmajeed",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Featured <span className={styles.titleAccent}>Projects</span>
        </h2>
        <div className={styles.headerLine} />
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <div key={i} className={`glass-panel ${styles.card}`}>
              {/* Top */}
              <div className={styles.cardTop}>
                <div className={styles.cardIconWrap}>
                  <div className={styles.cardIcon}>
                    <Icon />
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTag}>{project.tag}</span>
                    <span className={styles.cardPeriod}>{project.period}</span>
                  </div>
                </div>
                <span className={styles.cardStatus} style={project.statusStyle}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{project.title}</h3>

              {/* Details */}
              <div className={styles.cardDetails}>
                <div className={styles.detailBlock}>
                  <div className={styles.detailLabel}>Problem:</div>
                  <p className={styles.detailText}>{project.problem}</p>
                </div>
                <div className={styles.detailBlock}>
                  <div className={styles.detailLabel}>Approach:</div>
                  <p className={styles.detailText}>{project.approach}</p>
                </div>
                <div className={styles.detailBlock}>
                  <div className={`${styles.detailLabel} ${styles.impact}`}>Impact:</div>
                  <p className={`${styles.detailText} ${styles.impactText}`}>{project.impact}</p>
                </div>
              </div>

              {/* Stack */}
              <div className={styles.stackTags}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>{tech}</span>
                ))}
              </div>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <GithubIcon /> View Source <ArrowIcon />
              </a>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
