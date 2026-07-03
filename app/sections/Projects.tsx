"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { useTilt } from "../hooks/useTilt";
import { Github, ExternalLink, Cpu, Globe, Activity, Network } from "lucide-react";

const projects = [
  {
    title: "KAPA v1.0 — Autonomous AI Attacker",
    icon: Cpu,
    tag: "Red Team / AI",
    problem: "Manual red-team exercises are time-intensive and inconsistent.",
    approach:
      "Built an autonomous AI agent using Python + Scapy that models full kill chains: recon → exploit → persist.",
    impact: "Reduced red-team effort by ~60% with repeatable, auditable simulations.",
    stack: ["Python", "ML", "Scapy", "Reinforcement Learning"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-blue",
  },
  {
    title: "Web Vulnerability Scanner",
    icon: Globe,
    tag: "Offensive Security",
    problem: "Manual OWASP Top 10 testing does not scale across multiple targets.",
    approach:
      "Automated scanner using Python + BeautifulSoup detecting SQLi, XSS, broken auth, and more.",
    impact: "Achieved comprehensive OWASP coverage with structured reporting.",
    stack: ["Python", "BeautifulSoup", "OWASP Top 10", "CVE Analysis"],
    github: "https://github.com/shehrozmajeed",
    color: "cyber-purple",
  },
  {
    title: "SOC Log Analyzer",
    icon: Activity,
    tag: "AI / Blue Team",
    problem: "SOCs are overwhelmed by false positives and noisy log data.",
    approach:
      "Isolation Forest ML pipeline for real-time anomaly detection in system logs.",
    impact: "Dramatically reduced analyst triage time with high-precision alerts.",
    stack: ["Python", "Scikit-learn", "Isolation Forest", "SIEM"],
    github: "https://github.com/shehrozmajeed",
    color: "emerald-400",
  },
  {
    title: "Zero Trust Digital Twin",
    icon: Network,
    tag: "Network Architecture",
    problem: "Legacy flat networks expose lateral movement paths.",
    approach:
      "Designed a Cisco enterprise digital twin with micro-segmentation and least-privilege access.",
    impact: "Demonstrated zero-trust principles in a realistic enterprise topology.",
    stack: ["Cisco Packet Tracer", "Zero Trust", "Micro-segmentation"],
    github: "https://github.com/shehrozmajeed",
    color: "amber-400",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.02 });

  const colorMap: Record<string, string> = {
    "cyber-blue": "#00f0ff",
    "cyber-purple": "#b829dd",
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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl p-6 md:p-8 hover:border-cyber-blue/30 transition-all group will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-xl border"
          style={{ 
            background: `linear-gradient(135deg, ${hexColor}20, transparent)`,
            borderColor: `${hexColor}30`
          }}
        >
          <project.icon
            className="w-6 h-6"
            style={{ color: hexColor }}
          />
        </div>
        <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
          {project.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
        {project.title}
      </h3>

      <div className="space-y-3 mb-6">
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
        className="inline-flex items-center gap-2 text-sm text-cyber-blue hover:text-white transition-colors"
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
          Production-grade security tools and research projects with measurable
          real-world impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}