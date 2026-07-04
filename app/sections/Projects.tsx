"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { useTilt } from "../hooks/useTilt";
import {
  Github,
  ExternalLink,
  Cpu,
  Globe,
  Activity,
  Network,
  HeartPulse,
  ShieldCheck,
  CalendarClock,
  Wrench,
  FlaskConical,
  Terminal,
} from "lucide-react";

const projects = [
  {
    title: "KAPA v1.0 — Autonomous AI Attacker",
    icon: Cpu,
    tag: "RED_TEAM/AI",
    period: "Oct – Dec 2025",
    status: "DEPLOYED",
    statusClass: "threat-critical",
    problem: "Manual red-team exercises are time-intensive and inconsistent across engagements.",
    approach:
      "Autonomous AI agent using Python and Scapy modeling full kill chains: reconnaissance, exploitation, and persistence.",
    impact: "Reduced red-team effort by ~60% with repeatable, auditable attack simulations.",
    stack: ["Python", "Machine Learning", "Scapy"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "IPDR-Cloud — ML Proactive Disaster Recovery",
    icon: FlaskConical,
    tag: "RESEARCH",
    period: "Jan – Apr 2026",
    status: "PUBLISHED",
    statusClass: "threat-medium",
    problem: "Cloud outages cause costly SLA breaches when recovery is reactive rather than predictive.",
    approach:
      "IEEE-style paper on a DQN RL agent trained on Google Cluster Trace 2019 to proactively trigger disaster recovery.",
    impact: "96.5% SLA compliance. Mean RPO cut to 0.5 min. Zero SLA breaches in evaluation.",
    stack: ["Python", "DQN", "PyTorch", "Reinforcement Learning"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "Zero Trust Digital Twin",
    icon: Network,
    tag: "ARCHITECTURE",
    period: "Jan – Apr 2026",
    status: "ACTIVE",
    statusClass: "threat-low",
    problem: "Legacy flat networks expose lateral-movement paths to attackers.",
    approach:
      "Cisco enterprise network digital twin implementing micro-segmentation and least-privilege access controls.",
    impact: "Demonstrated zero-trust principles in a realistic enterprise topology.",
    stack: ["Cisco Packet Tracer", "Zero Trust", "Micro-segmentation"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "SOC Log Analyzer",
    icon: Activity,
    tag: "BLUE_TEAM/ML",
    period: "Jan – Apr 2026",
    status: "RUNNING",
    statusClass: "threat-low",
    problem: "SOCs are overwhelmed by false positives and noisy log data.",
    approach:
      "Isolation-forest ML pipeline for real-time anomaly detection across system logs.",
    impact: "High-precision alerts that cut analyst triage overhead significantly.",
    stack: ["Python", "Scikit-learn", "Isolation Forest"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "Web Vulnerability Scanner",
    icon: Globe,
    tag: "OFFENSIVE",
    period: "Oct – Dec 2024",
    status: "DEPLOYED",
    statusClass: "threat-critical",
    problem: "Manual OWASP Top 10 testing does not scale across multiple targets.",
    approach:
      "Automated scanner using Python and BeautifulSoup detecting SQLi, XSS, broken auth, and more.",
    impact: "Comprehensive OWASP Top 10 coverage with structured reporting.",
    stack: ["Python", "BeautifulSoup", "OWASP Top 10"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "AlumNet — Secure Alumni Platform",
    icon: ShieldCheck,
    tag: "SECURE_WEBAPP",
    period: "Jan – Apr 2026",
    status: "PENTESTED",
    statusClass: "threat-medium",
    problem: "Mentorship platforms need airtight, role-based access control to be trustworthy.",
    approach:
      "Role-based Flask web app (Student/Alumni/Admin) with STRIDE threat model, bcrypt, RBAC, CSP, rate-limiting.",
    impact: "Mitigated all OWASP Top 10 risks, verified via in-house pentest before deployment.",
    stack: ["Flask", "SQLAlchemy", "JavaScript"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "MedSentinel — IoT Rural Clinic Monitor",
    icon: HeartPulse,
    tag: "IOT/HEALTHCARE",
    period: "Oct – Dec 2025",
    status: "ACTIVE",
    statusClass: "threat-low",
    problem: "Rural clinics can silently go dark with no automated detection.",
    approach:
      "ESP32 + sensor-fusion system detecting ghost clinics in real time, validated with NGO stakeholders.",
    impact: "86% detection accuracy and 95.8% uptime, validated by 8/10 NGO stakeholders.",
    stack: ["ESP32", "Python", "Machine Learning"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "AutoSchedule-GIK",
    icon: CalendarClock,
    tag: "SYSTEMS",
    period: "Jan – Apr 2026",
    status: "STABLE",
    statusClass: "threat-low",
    problem: "Manual timetabling can't satisfy room, faculty, and course constraints at scale.",
    approach:
      "Conflict-free timetable engine for GIKI handling room, faculty, and course constraints simultaneously.",
    impact: "Automated a previously manual, error-prone scheduling process for the department.",
    stack: ["Python"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "LNTv2.0 — Local Network Toolkit",
    icon: Wrench,
    tag: "TOOLING",
    period: "Jun – Jul 2025",
    status: "DEPLOYED",
    statusClass: "threat-high",
    problem: "Switching between 10+ separate Kali Linux tools slows down pentest setup.",
    approach:
      "GUI-based suite in Python/Tkinter consolidating Nmap, Metasploit, and other core Kali tools into one interface.",
    impact: "Reduced pentest task setup time by 40%.",
    stack: ["Python", "Tkinter", "Nmap", "Metasploit"],
    github: "https://github.com/shehrozmajeed",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 5, scale: 1.01 });

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="terminal-card rounded-xl p-5 md:p-6 hover:border-hack-green/40 transition-all group will-change-transform flex flex-col h-full border-scan-hover"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <project.icon
            className="w-5 h-5 text-hack-green group-hover:scale-110 transition-transform"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,255,65,0.7))" }}
          />
          <div>
            <div className="text-[9px] font-mono text-hack-green/30 tracking-widest">
              [{project.tag}]
            </div>
            <div className="text-[9px] font-mono text-[#3a5a3a]">
              {project.period}
            </div>
          </div>
        </div>
        <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${project.statusClass}`}>
          ● {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-sm font-bold text-white mb-4 group-hover:text-hack-green transition-colors tracking-wide leading-tight">
        {project.title}
      </h3>

      {/* Details */}
      <div className="space-y-3 mb-5 flex-1 font-mono">
        <div>
          <span className="text-[9px] text-hack-red/60 uppercase tracking-widest">
            PROBLEM:
          </span>
          <p className="text-[11px] text-[#4a7a4a] mt-1 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <span className="text-[9px] text-hack-amber/60 uppercase tracking-widest">
            APPROACH:
          </span>
          <p className="text-[11px] text-[#4a7a4a] mt-1 leading-relaxed">
            {project.approach}
          </p>
        </div>
        <div>
          <span className="text-[9px] text-hack-green/60 uppercase tracking-widest">
            IMPACT:
          </span>
          <p className="text-[11px] text-hack-green/80 mt-1 leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[9px] px-2 py-0.5 rounded font-mono text-hack-green/50 border border-hack-green/15 bg-hack-green/5"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[11px] font-mono text-hack-green/50 hover:text-hack-green transition-colors mt-auto"
      >
        <Terminal className="w-3 h-3" />
        git clone /project
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="matrix-grid">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[003]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">EXPLOIT_DB.SH</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest">
          FEATURED <span className="text-hack-green text-glow">PROJECTS</span>
        </h2>
        <p className="text-[#4a7a4a] max-w-2xl mx-auto font-mono text-xs">
          <span className="text-hack-red/60">root@kali:~/projects# </span>
          find . -name &#34;*.py&#34; -type f | xargs grep &#34;impact=HIGH&#34;
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
