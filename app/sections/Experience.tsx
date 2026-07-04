"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Briefcase, Users, Calendar, Terminal } from "lucide-react";

const experiences = [
  {
    role: "President",
    org: "NEXUS — Cybersecurity Society, GIKI",
    period: "May 2026 – Present",
    type: "LEADERSHIP",
    clearance: "ALPHA",
    clearanceClass: "threat-critical",
    icon: Users,
    points: [
      "Leading 100+ member cybersecurity society as President.",
      "Established industry speaker sessions and hands-on lab programs.",
      "Grew active membership by 30%+ through workshops and CTF competitions.",
      "Previously led the Cybersecurity Division (2024–Apr 2026).",
    ],
  },
  {
    role: "Ethical Hacking Intern",
    org: "CyberSecurity Malaysia",
    period: "Jun 2024 – Jul 2024",
    type: "INTERNSHIP",
    clearance: "OPERATIVE",
    clearanceClass: "threat-high",
    icon: Briefcase,
    points: [
      "Conducted vulnerability assessments on live web applications.",
      "Used Burp Suite, Nmap, and OWASP ZAP for structured pentesting.",
      "Delivered professional reports with CVEs, risk ratings, and remediation steps.",
      "Applied OWASP Top 10 methodology across multiple assessment targets.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[004]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">OPS_HISTORY.LOG</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest">
          EXPERIENCE &{" "}
          <span className="text-hack-green text-glow">LEADERSHIP</span>
        </h2>
        <p className="text-[#4a7a4a] font-mono text-xs">
          <span className="text-hack-red/60">root@kali:~# </span>
          cat /var/log/ops_history | tail -n 20
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="terminal-card rounded-xl p-6 md:p-8 relative overflow-hidden group"
          >
            {/* Left accent bar */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-hack-green to-hack-green/10 shadow-[0_0_8px_rgba(0,255,65,0.5)]" />

            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 pl-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded border border-hack-green/20 bg-hack-green/5 text-hack-green">
                  <exp.icon className="w-5 h-5" style={{ filter: "drop-shadow(0 0 4px rgba(0,255,65,0.7))" }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-mono text-hack-green/30 tracking-widest">[{exp.type}]</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${exp.clearanceClass}`}>
                      ● {exp.clearance}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">{exp.role}</h3>
                  <p className="text-hack-green/70 font-mono text-xs mt-0.5">{exp.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#3a5a3a] font-mono pl-14 md:pl-0">
                <Calendar className="w-3.5 h-3.5 text-hack-green/40" />
                {exp.period}
              </div>
            </div>

            {/* Points as terminal lines */}
            <div className="pl-4 ml-[18px] border-l border-hack-green/10 space-y-2">
              {exp.points.map((point, pi) => (
                <div key={pi} className="text-xs text-[#4a7a4a] font-mono flex items-start gap-2">
                  <span className="text-hack-green/40 shrink-0 mt-0.5">&gt;</span>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}