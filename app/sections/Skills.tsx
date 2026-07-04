"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  {
    title: "Offensive Security",
    prefix: "ATK",
    barClass: "progress-neon-red",
    skills: [
      { name: "Penetration Testing", level: 95 },
      { name: "OWASP Top 10", level: 92 },
      { name: "Red Team Operations", level: 88 },
      { name: "Vulnerability Assessment", level: 90 },
      { name: "Network Exploitation", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    prefix: "TOOL",
    barClass: "progress-neon",
    skills: [
      { name: "Burp Suite", level: 92 },
      { name: "Metasploit", level: 88 },
      { name: "Nmap / Wireshark", level: 90 },
      { name: "OWASP ZAP", level: 85 },
      { name: "Kali Linux", level: 95 },
    ],
  },
  {
    title: "Programming",
    prefix: "CODE",
    barClass: "progress-neon-cyan",
    skills: [
      { name: "Python", level: 95 },
      { name: "Bash Scripting", level: 88 },
      { name: "C / C++", level: 80 },
      { name: "SQL", level: 85 },
      { name: "JavaScript / TypeScript", level: 78 },
    ],
  },
  {
    title: "AI / ML in Security",
    prefix: "ML",
    barClass: "progress-neon-amber",
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
  delay,
  prefix,
}: {
  name: string;
  level: number;
  barClass: string;
  delay: number;
  prefix: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex justify-between mb-1.5 font-mono">
        <span className="text-xs text-[#5a8a5a]">
          <span className="text-hack-green/30">[{prefix}] </span>
          {name}
        </span>
        <span className="text-[10px] text-hack-green/50">{level}%</span>
      </div>
      <div className="w-full h-[3px] bg-hack-green/8 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${barClass}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[002]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">SKILL_MATRIX.SH</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest">
          TECHNICAL <span className="text-hack-green text-glow">ARSENAL</span>
        </h2>
        <p className="text-[#4a7a4a] max-w-2xl mx-auto font-mono text-sm">
          <span className="text-hack-red/60">root@arsenal:~# </span>
          ls -la /tools && cat /skills/matrix.json
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: ci * 0.15 }}
            className="terminal-card rounded-xl p-6 md:p-7"
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-hack-green/10">
              <span className="w-2 h-2 rounded-full bg-hack-red/70" />
              <span className="w-2 h-2 rounded-full bg-hack-amber/70" />
              <span className="w-2 h-2 rounded-full bg-hack-green/70" />
              <h3 className="font-display text-xs font-bold ml-2 text-white tracking-widest">
                {cat.title.toUpperCase()}
              </h3>
            </div>
            {cat.skills.map((skill, si) => (
              <SkillBar
                key={si}
                name={skill.name}
                level={skill.level}
                barClass={cat.barClass}
                delay={si * 0.08}
                prefix={cat.prefix}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}