"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Trophy, Shield, Cloud, Bug, Award, CheckCircle } from "lucide-react";

const certs = [
  {
    name: "TryHackMe",
    detail: "Top 6% Globally",
    icon: Trophy,
    color: "text-hack-amber",
    glow: "rgba(255,170,0,0.5)",
    border: "border-hack-amber/30",
    bg: "bg-hack-amber/5",
    statusClass: "threat-medium",
    rank: "ELITE",
  },
  {
    name: "Google Cybersecurity",
    detail: "Professional Certificate",
    icon: Shield,
    color: "text-hack-green",
    glow: "rgba(0,255,65,0.5)",
    border: "border-hack-green/30",
    bg: "bg-hack-green/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
  },
  {
    name: "AWS Cloud Security",
    detail: "Specialization",
    icon: Cloud,
    color: "text-hack-cyan",
    glow: "rgba(0,229,255,0.5)",
    border: "border-hack-cyan/30",
    bg: "bg-hack-cyan/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
  },
  {
    name: "Bug Hunting",
    detail: "Practical Web Security",
    icon: Bug,
    color: "text-hack-red",
    glow: "rgba(255,0,51,0.5)",
    border: "border-hack-red/30",
    bg: "bg-hack-red/5",
    statusClass: "threat-high",
    rank: "HUNTER",
  },
  {
    name: "Networking for Ethical Hacking",
    detail: "Advanced Network Security",
    icon: Award,
    color: "text-hack-green",
    glow: "rgba(0,255,65,0.5)",
    border: "border-hack-green/30",
    bg: "bg-hack-green/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="matrix-grid">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[005]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">CLEARANCE_CERTS.DB</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest">
          CERTIFICATIONS &{" "}
          <span className="text-hack-green text-glow">RANKINGS</span>
        </h2>
        <p className="text-[#4a7a4a] max-w-2xl mx-auto font-mono text-xs">
          <span className="text-hack-red/60">root@kali:~# </span>
          cat /etc/security/clearances.conf | grep VERIFIED
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`terminal-card rounded-xl p-6 text-center border ${cert.border} ${cert.bg} group transition-all border-scan-hover`}
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center border ${cert.border}`}
              style={{ boxShadow: `0 0 12px ${cert.glow}` }}
            >
              <cert.icon className={`w-6 h-6 ${cert.color}`} />
            </div>
            <div className="mb-2">
              <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${cert.statusClass}`}>
                ✓ {cert.rank}
              </span>
            </div>
            <h3 className="font-display text-xs font-bold text-white mb-1 tracking-wide">{cert.name}</h3>
            <p className="text-[10px] text-[#4a7a4a] font-mono">{cert.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* TryHackMe banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 max-w-3xl mx-auto terminal-card rounded-xl p-7 border border-hack-amber/25 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hack-amber to-transparent" />
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="p-3 rounded-xl border border-hack-amber/30 bg-hack-amber/5">
            <Trophy className="w-10 h-10 text-hack-amber" style={{ filter: "drop-shadow(0 0 8px rgba(255,170,0,0.7))" }} />
          </div>
          <div className="text-center md:text-left">
            <div className="text-[9px] font-mono text-hack-amber/50 tracking-widest mb-1">[GLOBAL_RANK_STATUS]</div>
            <h3 className="font-display text-lg font-bold text-white mb-2 tracking-wide">
              TryHackMe — <span className="text-hack-amber" style={{ textShadow: "0 0 12px rgba(255,170,0,0.5)" }}>TOP 6% GLOBALLY</span>
            </h3>
            <p className="text-[#4a7a4a] text-xs leading-relaxed font-mono">
              <span className="text-hack-amber/40">&gt; </span>
              500+ hours of lab time. Demonstrated hands-on skills in penetration testing,
              privilege escalation, web exploitation, and network security.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}