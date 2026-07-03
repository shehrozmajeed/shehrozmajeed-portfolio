"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Terminal, Brain, Target, Shield } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Offensive Mindset",
    desc: "Trained in ethical hacking, vulnerability assessment, and red-team operations with real-world lab experience.",
  },
  {
    icon: Brain,
    title: "AI + Security",
    desc: "Integrating machine learning into security workflows — from autonomous attack simulation to anomaly detection.",
  },
  {
    icon: Terminal,
    title: "Automation First",
    desc: "Building tools that cut manual effort by 60%. Python-driven pipelines for reconnaissance, scanning, and reporting.",
  },
  {
    icon: Shield,
    title: "Zero Trust Design",
    desc: "Architecting micro-segmented networks and least-privilege systems for enterprise-grade resilience.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="cyber-grid">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyber-blue">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mb-6 rounded-full" />
          <p className="text-slate-300 leading-relaxed mb-4">
            I am a cybersecurity-focused Computer Science student at{" "}
            <span className="text-cyber-blue font-medium">GIKI</span> with a
            deep specialization in offensive security, red-team automation, and
            AI-driven defense.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            My work spans from publishing IEEE-style research on ML-based
            disaster recovery to building autonomous AI attack simulators that
            model full kill chains — reconnaissance to persistence.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As President of{" "}
            <span className="text-cyber-purple font-medium">NEXUS</span>, I lead
            100+ members through hands-on labs, CTF competitions, and industry
            workshops.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-5 hover:border-cyber-blue/30 transition-all group"
            >
              <item.icon className="w-8 h-8 text-cyber-blue mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}