"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  {
    title: "Offensive Security",
    barClass: "bg-red-500",
    glowClass: "shadow-[0_0_10px_rgba(239,68,68,0.5)]",
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
    barClass: "bg-blue-500",
    glowClass: "shadow-[0_0_10px_rgba(59,130,246,0.5)]",
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
    barClass: "bg-emerald-500",
    glowClass: "shadow-[0_0_10px_rgba(16,185,129,0.5)]",
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
    barClass: "bg-purple-500",
    glowClass: "shadow-[0_0_10px_rgba(168,85,247,0.5)]",
    skills: [
      { name: "Anomaly Detection", level: 90 },
      { name: "PyTorch / Scikit-learn", level: 85 },
      { name: "Reinforcement Learning (DQN)", level: 82 },
      { name: "Log Analysis / SIEM", level: 88 },
    ],
  },
];

function SkillBar({
  name,
  level,
  barClass,
  glowClass,
  delay,
}: {
  name: string;
  level: number;
  barClass: string;
  glowClass: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-zinc-300">
          {name}
        </span>
        <span className="text-xs font-semibold text-zinc-400">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${barClass} ${glowClass}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Technical <span className="text-blue-500">Arsenal</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass-panel p-6 md:p-8 hover:border-zinc-500/50 transition-colors"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
              <div className={`w-2 h-2 rounded-full ${cat.barClass} ${cat.glowClass}`} />
              <h3 className="font-display text-lg font-bold text-white tracking-wide">
                {cat.title}
              </h3>
            </div>
            
            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  barClass={cat.barClass}
                  glowClass={cat.glowClass}
                  delay={si * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}