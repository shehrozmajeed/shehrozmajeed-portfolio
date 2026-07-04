"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Trophy, Shield, Cloud, Bug, Award, CheckCircle } from "lucide-react";

const certs = [
  {
    name: "Machine Learning",
    detail: "Udemy / Code Warriors",
    icon: Cloud,
    color: "text-hack-cyan",
    glow: "rgba(0,229,255,0.5)",
    border: "border-hack-cyan/30",
    bg: "bg-hack-cyan/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
    link: "https://www.udemy.com/certificate/UC-e84efbc6-21c5-49ee-9fd1-ab529e1f9499/",
  },
  {
    name: "Foundations of Cybersecurity",
    detail: "Google / Coursera",
    icon: Shield,
    color: "text-hack-green",
    glow: "rgba(0,255,65,0.5)",
    border: "border-hack-green/30",
    bg: "bg-hack-green/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
    link: "https://www.coursera.org/account/accomplishments/verify/6S7Y81IOORYO",
  },
  {
    name: "Python and Flask",
    detail: "Horizon Tech Services",
    icon: Award,
    color: "text-hack-green",
    glow: "rgba(0,255,65,0.5)",
    border: "border-hack-green/30",
    bg: "bg-hack-green/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
    link: "https://www.udemy.com/certificate/UC-48b6cc7f-ea5a-4b04-9e5d-c6a8b0cc1feb/",
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
    link: "https://www.udemy.com/certificate/UC-0600a0b1-0a6b-4a9f-827f-7dac2bff546e/",
  },
  {
    name: "AWS Cloud Clubs",
    detail: "Generative AI Camper",
    icon: Cloud,
    color: "text-hack-cyan",
    glow: "rgba(0,229,255,0.5)",
    border: "border-hack-cyan/30",
    bg: "bg-hack-cyan/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
    link: "https://www.credly.com/badges/5ff01b0c-5a2d-45a6-b55f-dbdfa90d3961/linked_in_profile",
  },
  {
    name: "Claude Code",
    detail: "Anthropic",
    icon: Award,
    color: "text-hack-green",
    glow: "rgba(0,255,65,0.5)",
    border: "border-hack-green/30",
    bg: "bg-hack-green/5",
    statusClass: "threat-low",
    rank: "CERTIFIED",
    link: "https://verify.skilljar.com/c/owak62amrd8r",
  },
  {
    name: "Intro to MCP",
    detail: "Anthropic",
    icon: Trophy,
    color: "text-hack-amber",
    glow: "rgba(255,170,0,0.5)",
    border: "border-hack-amber/30",
    bg: "bg-hack-amber/5",
    statusClass: "threat-medium",
    rank: "ELITE",
    link: "https://verify.skilljar.com/c/eg9oqrvgmxmh",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="matrix-grid">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green font-mono text-sm font-bold">[005]</span>
        <div className="flex-1 h-[1px] bg-hack-green/40" />
        <span className="font-display text-xs tracking-widest text-hack-green font-bold">CLEARANCE_CERTS.DB</span>
        <div className="flex-1 h-[1px] bg-hack-green/40" />
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
        <p className="text-white max-w-2xl mx-auto font-mono text-xs font-semibold">
          <span className="text-hack-red">root@kali:~# </span>
          cat /etc/security/clearances.conf | grep VERIFIED
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`terminal-card rounded-xl p-6 text-center border ${cert.border} ${cert.bg} group transition-all border-scan-hover block`}
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
            <p className="text-[10px] text-white font-mono font-semibold">{cert.detail}</p>
          </motion.a>
        ))}
      </div>

      {/* TryHackMe banner */}
      <motion.a
        href="https://tryhackme.com/p/shehrozmajeed"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="mt-10 max-w-3xl mx-auto terminal-card rounded-xl p-7 border border-hack-amber/25 relative overflow-hidden block transition-all hover:border-hack-amber/50 hover:bg-hack-amber/5"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hack-amber to-transparent" />
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="p-3 rounded-xl border border-hack-amber/30 bg-hack-amber/5">
            <Trophy className="w-10 h-10 text-hack-amber" style={{ filter: "drop-shadow(0 0 8px rgba(255,170,0,0.7))" }} />
          </div>
          <div className="text-center md:text-left">
            <div className="text-[9px] font-mono text-hack-amber tracking-widest mb-1 font-bold">[GLOBAL_RANK_STATUS]</div>
            <h3 className="font-display text-lg font-bold text-white mb-2 tracking-wide flex items-center gap-2 justify-center md:justify-start">
              TryHackMe — <span className="text-hack-amber" style={{ textShadow: "0 0 12px rgba(255,170,0,0.5)" }}>TOP 5% GLOBALLY</span>
              <span className="text-[10px] text-hack-amber border border-hack-amber/50 px-2 py-0.5 rounded bg-hack-amber/20 ml-2 font-bold">VIEW PROFILE ↗</span>
            </h3>
            <p className="text-white text-xs leading-relaxed font-mono font-semibold">
              <span className="text-hack-amber font-bold">&gt; </span>
              Completed learning paths including Jr Pentester and AI Security. Demonstrated hands-on skills in penetration testing,
              privilege escalation, web exploitation, and network security. 8000+ points.
            </p>
          </div>
        </div>
      </motion.a>
    </SectionWrapper>
  );
}