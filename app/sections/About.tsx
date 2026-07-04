"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Terminal, Brain, Target, Shield } from "lucide-react";

const highlights = [
  {
    icon: Target,
    label: "ATTACK_VECTOR",
    title: "Offensive Mindset",
    desc: "Trained in ethical hacking, vulnerability assessment, and red-team operations with real-world lab experience.",
    threat: "CRITICAL",
    threatClass: "threat-critical",
  },
  {
    icon: Brain,
    label: "ML_INTEGRATION",
    title: "AI + Security",
    desc: "Integrating machine learning into security workflows — from autonomous attack simulation to anomaly detection.",
    threat: "HIGH",
    threatClass: "threat-high",
  },
  {
    icon: Terminal,
    label: "AUTO_RECON",
    title: "Automation First",
    desc: "Building tools that cut manual effort by 60%. Python-driven pipelines for reconnaissance, scanning, and reporting.",
    threat: "HIGH",
    threatClass: "threat-high",
  },
  {
    icon: Shield,
    label: "ZERO_TRUST",
    title: "Zero Trust Design",
    desc: "Architecting micro-segmented networks and least-privilege systems for enterprise-grade resilience.",
    threat: "MEDIUM",
    threatClass: "threat-medium",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="matrix-grid">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[001]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">ABOUT.SYS</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: terminal text block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="terminal-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4 border-b border-hack-green/10 pb-3">
              <Terminal className="w-4 h-4 text-hack-green" />
              <span className="font-mono text-xs text-hack-green/50">whoami --verbose</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              <span className="text-hack-green text-glow">ABOUT</span>
              <span className="text-white/60"> ME</span>
            </h2>
            <div className="w-12 h-[2px] bg-hack-green mb-5 shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
            <p className="text-[#5a8a5a] leading-relaxed mb-4 font-mono text-sm">
              <span className="text-hack-green/40">&gt; </span>
              Cybersecurity-focused CS student at{" "}
              <span className="text-hack-green font-bold">GIKI</span> with deep
              specialization in offensive security, red-team automation, and
              AI-driven defense.
            </p>
            <p className="text-[#5a8a5a] leading-relaxed mb-4 font-mono text-sm">
              <span className="text-hack-green/40">&gt; </span>
              Published IEEE-style research on ML-based disaster recovery. Built
              autonomous AI attack simulators that model full kill chains —
              recon to persistence.
            </p>
            <p className="text-[#5a8a5a] leading-relaxed font-mono text-sm">
              <span className="text-hack-green/40">&gt; </span>
              President of{" "}
              <span className="text-hack-red font-bold">NEXUS</span> — leading
              100+ members through hands-on labs, CTF competitions, and industry
              workshops.
            </p>
            <div className="mt-4 pt-4 border-t border-hack-green/10">
              <span className="font-mono text-xs text-hack-green/30">STATUS: </span>
              <span className="font-mono text-xs text-hack-green animate-pulse">ONLINE // SEEKING OPPORTUNITIES</span>
            </div>
          </div>
        </motion.div>

        {/* Right: threat cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="terminal-card rounded-xl p-5 border-scan-hover transition-all group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <item.icon className="w-6 h-6 text-hack-green group-hover:scale-110 transition-transform" style={{ filter: "drop-shadow(0 0 6px rgba(0,255,65,0.7))" }} />
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${item.threatClass}`}>
                  {item.threat}
                </span>
              </div>
              <div className="text-[9px] font-mono text-hack-green/30 mb-1 tracking-widest">
                [{item.label}]
              </div>
              <h3 className="font-display text-sm font-bold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[#4a7a4a] leading-relaxed font-mono">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}