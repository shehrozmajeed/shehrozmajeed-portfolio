"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Trophy, Shield, Cloud, Bug, Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Machine Learning",
    detail: "Udemy / Code Warriors",
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    rank: "Certified",
    link: "https://www.udemy.com/certificate/UC-e84efbc6-21c5-49ee-9fd1-ab529e1f9499/",
  },
  {
    name: "Foundations of Cybersecurity",
    detail: "Google / Coursera",
    icon: Shield,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    rank: "Certified",
    link: "https://www.coursera.org/account/accomplishments/verify/6S7Y81IOORYO",
  },
  {
    name: "Python and Flask",
    detail: "Horizon Tech Services",
    icon: Award,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    rank: "Certified",
    link: "https://www.udemy.com/certificate/UC-48b6cc7f-ea5a-4b04-9e5d-c6a8b0cc1feb/",
  },
  {
    name: "Bug Hunting",
    detail: "Practical Web Security",
    icon: Bug,
    color: "text-red-400",
    bg: "bg-red-500/10",
    rank: "Hunter",
    link: "https://www.udemy.com/certificate/UC-0600a0b1-0a6b-4a9f-827f-7dac2bff546e/",
  },
  {
    name: "AWS Cloud Clubs",
    detail: "Generative AI Camper",
    icon: Cloud,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    rank: "Certified",
    link: "https://www.credly.com/badges/5ff01b0c-5a2d-45a6-b55f-dbdfa90d3961/linked_in_profile",
  },
  {
    name: "Claude Code",
    detail: "Anthropic",
    icon: Award,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    rank: "Certified",
    link: "https://verify.skilljar.com/c/owak62amrd8r",
  },
  {
    name: "Intro to MCP",
    detail: "Anthropic",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    rank: "Elite",
    link: "https://verify.skilljar.com/c/eg9oqrvgmxmh",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Certifications & <span className="text-blue-500">Rankings</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certs.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel p-6 text-center group hover:border-zinc-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div
              className={`w-14 h-14 mb-5 rounded-2xl flex items-center justify-center ${cert.bg} group-hover:scale-110 transition-transform duration-300`}
            >
              <cert.icon className={`w-7 h-7 ${cert.color}`} />
            </div>
            
            <div className="mb-3">
              <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold ${cert.bg} ${cert.color}`}>
                ✓ {cert.rank}
              </span>
            </div>
            
            <h3 className="font-display text-base font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-xs text-zinc-400 font-medium mb-4">{cert.detail}</p>
            
            <div className="mt-auto flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 group-hover:text-blue-400 transition-colors">
              Verify Credential <ExternalLink className="w-3 h-3" />
            </div>
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
        className="mt-12 max-w-4xl mx-auto glass-panel p-8 md:p-10 relative overflow-hidden block group hover:border-amber-500/30 transition-all duration-300"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
            <Trophy className="w-12 h-12 text-amber-500" />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="text-[10px] font-mono text-amber-500/80 uppercase tracking-widest mb-2 font-semibold">
              Global Platform Ranking
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-3 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
              TryHackMe <span className="hidden md:inline text-zinc-600">|</span> <span className="text-amber-500">Top 5% Globally</span>
              <span className="text-[10px] text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/10 ml-0 md:ml-2 font-bold uppercase tracking-wider group-hover:bg-amber-500/20 transition-colors">
                View Profile
              </span>
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              Completed intensive learning paths including <span className="text-white">Jr Pentester</span> and <span className="text-white">AI Security</span>. Demonstrated hands-on skills in penetration testing, privilege escalation, web exploitation, and network security across numerous labs and CTFs. Accumulated over 8000+ points.
            </p>
          </div>
        </div>
      </motion.a>
    </SectionWrapper>
  );
}