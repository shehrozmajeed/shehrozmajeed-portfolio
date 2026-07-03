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
} from "lucide-react";

const projects = [
  {
    title: "IPDR-Cloud — ML Proactive Disaster Recovery",
    icon: FlaskConical,
    tag: "Research Paper",
    period: "Jan – Apr 2026",
    problem: "Cloud outages cause costly SLA breaches when recovery is reactive rather than predictive.",
    approach:
      "Co-authored an IEEE-style paper on a DQN reinforcement-learning agent trained on the Google Cluster Trace 2019 dataset to proactively trigger disaster recovery.",
    impact: "96.5% SLA compliance with mean RPO cut to 0.5 minutes and zero SLA breaches in evaluation.",
    stack: ["Python", "DQN", "PyTorch", "Reinforcement Learning"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-gold",
  },
  {
    title: "KAPA v1.0 — Autonomous AI Attacker",
    icon: Cpu,
    tag: "Red Team / AI",
    period: "Oct – Dec 2025",
    problem: "Manual red-team exercises are time-intensive and inconsistent across engagements.",
    approach:
      "Built an autonomous AI agent using Python and Scapy that models full kill chains: reconnaissance, exploitation, and persistence.",
    impact: "Reduced red-team effort by ~60% with repeatable, auditable attack simulations.",
    stack: ["Python", "Machine Learning", "Scapy"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-blue",
  },
  {
    title: "Zero Trust Digital Twin",
    icon: Network,
    tag: "Network Architecture",
    period: "Jan – Apr 2026",
    problem: "Legacy flat networks expose lateral-movement paths to attackers.",
    approach:
      "Designed a Cisco enterprise network digital twin implementing micro-segmentation and least-privilege access controls.",
    impact: "Demonstrated zero-trust principles in a realistic enterprise topology.",
    stack: ["Cisco Packet Tracer", "Zero Trust", "Micro-segmentation"],
    github: "https://github.com/shehrozmajeed",
    color: "amber-400",
  },
  {
    title: "SOC Log Analyzer",
    icon: Activity,
    tag: "AI / Blue Team",
    period: "Jan – Apr 2026",
    problem: "SOCs are overwhelmed by false positives and noisy log data.",
    approach:
      "Built an isolation-forest ML pipeline for real-time anomaly detection across system logs.",
    impact: "Delivered high-precision alerts that cut analyst triage overhead.",
    stack: ["Python", "Scikit-learn", "Isolation Forest"],
    github: "https://github.com/shehrozmajeed",
    color: "emerald-400",
  },
  {
    title: "MedSentinel — IoT Rural Clinic Monitor",
    icon: HeartPulse,
    tag: "IoT / Healthcare",
    period: "Oct – Dec 2025",
    problem: "Rural clinics can silently go dark, or 'ghost,' with no automated detection.",
    approach:
      "Built an ESP32 + sensor-fusion system to detect ghost clinics in real time, validated directly with NGO stakeholders.",
    impact: "86% detection accuracy and 95.8% uptime, validated by 8 of 10 NGO stakeholders.",
    stack: ["ESP32", "Python", "Machine Learning"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-purple",
  },
  {
    title: "Web Vulnerability Scanner",
    icon: Globe,
    tag: "Offensive Security",
    period: "Oct – Dec 2024",
    problem: "Manual OWASP Top 10 testing does not scale across multiple targets.",
    approach:
      "Built an automated scanner using Python and BeautifulSoup that detects SQLi, XSS, broken auth, and more.",
    impact: "Delivered comprehensive OWASP Top 10 coverage with structured reporting.",
    stack: ["Python", "BeautifulSoup", "OWASP Top 10"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-blue",
  },
  {
    title: "AlumNet — Secure Alumni–Student Platform",
    icon: ShieldCheck,
    tag: "Secure Web App",
    period: "Jan – Apr 2026",
    problem: "Mentorship platforms need airtight, role-based access control to be trustworthy.",
    approach:
      "Built a role-based Flask web app (Student / Alumni / Admin) backed by a full STRIDE threat model, with bcrypt, RBAC, CSP, and rate-limiting.",
    impact: "Mitigated all OWASP Top 10 risks, verified via an in-house pentest before deployment.",
    stack: ["Flask", "SQLAlchemy", "JavaScript"],
    github: "https://github.com/shehrozmajeed",
    color: "emerald-400",
  },
  {
    title: "AutoSchedule-GIK",
    icon: CalendarClock,
    tag: "Systems / Optimization",
    period: "Jan – Apr 2026",
    problem: "Manual timetabling can't satisfy room, faculty, and course constraints at scale.",
    approach:
      "Built a conflict-free timetable engine for GIKI handling room, faculty, and course constraints simultaneously.",
    impact: "Automated a previously manual, error-prone scheduling process for the department.",
    stack: ["Python"],
    github: "https://github.com/shehrozmajeed",
    color: "amber-400",
  },
  {
    title: "LNTv2.0 — Local Network Toolkit",
    icon: Wrench,
    tag: "Tooling",
    period: "Jun – Jul 2025",
    problem: "Switching between 10+ separate Kali Linux tools slows down pentest setup.",
    approach:
      "Built a GUI-based suite in Python/Tkinter consolidating Nmap, Metasploit, and other core Kali tools into one interface.",
    impact: "Reduced pentest task setup time by 40%.",
    stack: ["Python", "Tkinter", "Nmap", "Metasploit"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-purple",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.015 });

  const colorMap: Record<string, string> = {
    "cyber-blue": "#00f0ff",
    "cyber-purple": "#b829dd",
    "cyber-gold": "#d4b47a",
    "emerald-400": "#34d399",
    "amber-400": "#fbbf24",
  };

  const hexColor = colorMap[project.color] || "#00f0ff";

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="glass glare-card rounded-2xl p-6 md:p-7 hover:border-white/20 transition-all group will-change-transform flex flex-col h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-xl border"
          style={{
            background: `linear-gradient(135deg, ${hexColor}20, transparent)`,
            borderColor: `${hexColor}30`,
          }}
        >
          <project.icon className="w-6 h-6" style={{ color: hexColor }} />
        </div>
        <div className="text-right">
          <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 block mb-1">
            {project.tag}
          </span>
          <span className="text-[11px] font-mono text-slate-600">{project.period}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors font-display">
        {project.title}
      </h3>

      <div className="space-y-3 mb-6 flex-1">
        <div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Problem
          </span>
          <p className="text-sm text-slate-300 mt-1">{project.problem}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Approach
          </span>
          <p className="text-sm text-slate-300 mt-1">{project.approach}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-cyber-blue uppercase tracking-wider">
            Impact
          </span>
          <p className="text-sm text-slate-200 mt-1 font-medium">{project.impact}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-cyber-blue hover:text-white transition-colors mt-auto"
      >
        <Github className="w-4 h-4" />
        View on GitHub
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-cyber-purple">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Nine production-grade security tools and research projects, spanning
          offensive tooling, blue-team automation, and applied ML — each with
          measurable, real-world impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
