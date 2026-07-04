"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Terminal, Brain, Target, Shield, User } from "lucide-react";

const highlights = [
  {
    icon: Target,
    label: "Focus Area",
    title: "Offensive Mindset",
    desc: "Trained in ethical hacking, vulnerability assessment, and red-team operations with real-world lab experience.",
    threat: "Core",
    threatClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  },
  {
    icon: Brain,
    label: "Innovation",
    title: "AI + Security",
    desc: "Integrating machine learning into security workflows — from autonomous attack simulation to anomaly detection.",
    threat: "Specialty",
    threatClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  {
    icon: Terminal,
    label: "Efficiency",
    title: "Automation First",
    desc: "Building tools that cut manual effort by 60%. Python-driven pipelines for reconnaissance, scanning, and reporting.",
    threat: "Skill",
    threatClass: "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20",
  },
  {
    icon: Shield,
    label: "Architecture",
    title: "Zero Trust Design",
    desc: "Architecting micro-segmented networks and least-privilege systems for enterprise-grade resilience.",
    threat: "Concept",
    threatClass: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Professional Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <User className="w-5 h-5 text-blue-400" />
              <span className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Professional Summary</span>
            </div>
            
            <p className="text-zinc-300 leading-relaxed mb-6 font-medium text-[15px]">
              I am a Cybersecurity-focused Computer Science student at <span className="text-white font-semibold">GIKI</span>, specializing in offensive security, red-team automation, and AI-driven defense. I bridge the gap between traditional security operations and next-generation automated threat modeling.
            </p>
            
            <p className="text-zinc-300 leading-relaxed mb-6 font-medium text-[15px]">
              My research encompasses IEEE-style publications on ML-based disaster recovery and building autonomous AI attack simulators that model full kill chains, from reconnaissance to persistence. I believe in understanding the offense to build a resilient defense.
            </p>
            
            <p className="text-zinc-300 leading-relaxed font-medium text-[15px]">
              Beyond academics, I serve as the President of <span className="text-white font-semibold">NEXUS</span> — leading a community of over 100 members through hands-on technical labs, CTF competitions, and industry-focused security workshops.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500 tracking-wider">STATUS</span>
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Seeking Opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Highlights grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-zinc-800/50 group-hover:bg-blue-500/10 transition-colors">
                  <item.icon className="w-5 h-5 text-zinc-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className={`text-[10px] font-mono px-2 py-1 rounded-full ${item.threatClass}`}>
                  {item.threat}
                </span>
              </div>
              
              <div className="text-[10px] font-mono text-zinc-500 mb-2 tracking-widest uppercase">
                {item.label}
              </div>
              
              <h3 className="font-display text-base font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}