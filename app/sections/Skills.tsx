"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  {
    title: "Offensive Security",
    color: "from-cyber-blue to-cyan-500",
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
    color: "from-cyber-purple to-pink-500",
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
    color: "from-emerald-400 to-teal-500",
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
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "Anomaly Detection", level: 90 },
      { name: "PyTorch / Scikit-learn", level: 85 },
      { name: "Reinforcement Learning (DQN)", level: 82 },
      { name: "Log Analysis / SIEM", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-200">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-cyber-navy/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="text-cyber-blue">Arsenal</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Tools, techniques, and technologies I deploy to break, build, and
          secure systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: ci * 0.15 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`}
              />
              {cat.title}
            </h3>
            {cat.skills.map((skill, si) => (
              <SkillBar
                key={si}
                name={skill.name}
                level={skill.level}
                color={cat.color}
                delay={si * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}