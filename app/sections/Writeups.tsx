"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { useTilt } from "../hooks/useTilt";
import { BookOpen, Shield, Cpu, Terminal, ExternalLink } from "lucide-react";

const writeups = [
  {
    title: "Jr Penetration Tester Path",
    icon: Shield,
    tag: "OFFENSIVE_SECURITY",
    completed: "100%",
    description:
      "Comprehensive walkthroughs focusing on penetration testing fundamentals and core methodologies. Covers active and passive reconnaissance, vulnerability exploitation, and reporting.",
    topics: [
      "Penetration Testing Foundations",
      "Network Reconnaissance & Nmap",
      "Burp Suite",
      "Web App Vulnerabilities",
      "OWASP Top 10 (2025)",
      "Metasploit & Exploitation",
      "Pentesting Methodologies",
    ],
    github: "https://github.com/shehrozmajeed/ctf-writeups/tree/main/tryhackme/Jr%20Penetration%20Tester",
  },
  {
    title: "AI Security Path",
    icon: Cpu,
    tag: "AI_SECURITY",
    completed: "100%",
    description:
      "Detailed notes and lab solutions focusing on the intersection of artificial intelligence and cybersecurity. Exploring threats, vulnerabilities, and defenses in AI systems.",
    topics: [
      "AI Fundamentals",
      "Secure AI Systems",
      "Threat Modeling for AI",
      "AI Vulnerability Analysis",
    ],
    github: "https://github.com/shehrozmajeed/ctf-writeups/tree/main/tryhackme/Ai%20Security",
  },
];

function WriteupCard({
  writeup,
  index,
}: {
  writeup: (typeof writeups)[0];
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 5, scale: 1.01 });

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="terminal-card rounded-xl p-5 md:p-6 hover:border-hack-green/40 transition-all group flex flex-col h-full border-scan-hover"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <writeup.icon
            className="w-5 h-5 text-hack-green group-hover:scale-110 transition-transform"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,255,65,0.7))" }}
          />
          <div>
            <div className="text-[9px] font-mono text-hack-green tracking-widest uppercase">
              [{writeup.tag}]
            </div>
          </div>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded text-white bg-hack-green/20 border border-hack-green/30">
          COMPLETED: {writeup.completed}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-hack-green transition-colors tracking-wide">
        {writeup.title}
      </h3>

      {/* Description */}
      <p className="text-white/80 font-mono text-xs leading-relaxed mb-5 flex-1">
        {writeup.description}
      </p>

      {/* Topics */}
      <div className="mb-6">
        <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono mb-2 block">
          Key Topics Covered:
        </span>
        <div className="flex flex-wrap gap-2">
          {writeup.topics.map((topic) => (
            <span
              key={topic}
              className="text-[10px] px-2 py-1 rounded font-mono text-white bg-white/5 border border-white/10"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <a
        href={writeup.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-mono text-hack-green hover:text-white transition-colors mt-auto border border-hack-green/30 px-4 py-2 rounded bg-hack-green/5 hover:bg-hack-green/20 w-fit"
      >
        <BookOpen className="w-4 h-4" />
        View Walkthroughs
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    </motion.div>
  );
}

export default function Writeups() {
  return (
    <SectionWrapper id="writeups" className="matrix-grid">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green font-mono text-sm">[03.5]</span>
        <div className="flex-1 h-[1px] bg-hack-green/20" />
        <span className="font-display text-xs tracking-widest text-white">WRITEUPS.MD</span>
        <div className="flex-1 h-[1px] bg-hack-green/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest text-white">
          WRITEUPS & <span className="text-hack-green text-glow">WALKTHROUGHS</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto font-mono text-sm">
          <span className="text-hack-green">root@kali:~/writeups# </span>
          cat stats.txt
          <br />
          <span className="text-white mt-2 block font-semibold text-base">
            Total TryHackMe Rooms Documented: <span className="text-hack-green text-glow">100+</span>
          </span>
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {writeups.map((writeup, i) => (
          <WriteupCard key={i} writeup={writeup} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
