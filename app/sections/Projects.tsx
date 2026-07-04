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
    title: "KAPA v1.0 — Autonomous AI Attacker",
    icon: Cpu,
    tag: "Red Team / AI",
    period: "Oct – Dec 2025",
    status: "Deployed",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
    tag: "Research",
    period: "Jan – Apr 2026",
    status: "Published",
    statusClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
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
    tag: "Architecture",
    period: "Jan – Apr 2026",
    status: "Active",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
    tag: "Blue Team / ML",
    period: "Jan – Apr 2026",
    status: "Running",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
    tag: "Offensive",
    period: "Oct – Dec 2024",
    status: "Deployed",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
    tag: "Secure WebApp",
    period: "Jan – Apr 2026",
    status: "Pentested",
    statusClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
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
    tag: "IoT / Healthcare",
    period: "Oct – Dec 2025",
    status: "Active",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    problem: "Rural clinics can silently go dark with no automated detection.",
    approach:
      "ESP32 + sensor-fusion system detecting ghost clinics in real time, validated with NGO stakeholders.",
    impact: "86% detection accuracy and 95.8% uptime, validated by NGO stakeholders.",
    stack: ["ESP32", "Python", "Machine Learning"],
    github: "https://github.com/shehrozmajeed",
  },
  {
    title: "AutoSchedule-GIK",
    icon: CalendarClock,
    tag: "Systems",
    period: "Jan – Apr 2026",
    status: "Stable",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
    tag: "Tooling",
    period: "Jun – Jul 2025",
    status: "Deployed",
    statusClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
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
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="glass-panel p-6 flex flex-col h-full hover:border-zinc-500/50 transition-colors"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-800/50">
            <project.icon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {project.tag}
            </div>
            <div className="text-[10px] font-mono text-zinc-500">
              {project.period}
            </div>
          </div>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${project.statusClass}`}>
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-white mb-4 tracking-wide">
        {project.title}
      </h3>

      {/* Details */}
      <div className="space-y-4 mb-6 flex-1">
        <div>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
            Problem:
          </span>
          <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
            Approach:
          </span>
          <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
            {project.approach}
          </p>
        </div>
        <div>
          <span className="text-[10px] text-blue-400/80 uppercase tracking-widest font-mono">
            Impact:
          </span>
          <p className="text-sm text-white font-medium mt-1 leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-1 rounded-md font-mono text-zinc-400 border border-zinc-700 bg-zinc-800/50"
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
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors mt-auto group"
      >
        <Github className="w-4 h-4" />
        View Source
        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
