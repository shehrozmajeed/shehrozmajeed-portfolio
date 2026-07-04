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
      className="glass-panel rounded-2xl p-6 md:p-8 hover:bg-zinc-900/40 transition-all group flex flex-col h-full border border-white/5"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
            <writeup.icon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
              {writeup.tag.replace('_', ' ')}
            </div>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-zinc-300 bg-white/5 border border-white/10">
          COMPLETED: {writeup.completed}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {writeup.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
        {writeup.description}
      </p>

      {/* Topics */}
      <div className="mb-8">
        <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-3 block">
          Key Topics Covered
        </span>
        <div className="flex flex-wrap gap-2">
          {writeup.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-3 py-1.5 rounded-lg font-medium text-zinc-300 bg-zinc-800/50 border border-white/5"
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
        className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white transition-all mt-auto border border-blue-500/30 px-5 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50 w-full md:w-fit"
      >
        <BookOpen className="w-4 h-4" />
        View Walkthroughs
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </motion.div>
  );
}

export default function Writeups() {
  return (
    <SectionWrapper id="writeups">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold tracking-wider text-sm mb-4 block uppercase">
          Technical Writing
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Writeups & Walkthroughs
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Documented solutions and methodologies for <strong className="text-white">100+</strong> TryHackMe rooms, focusing on offensive security and AI systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {writeups.map((writeup, i) => (
          <WriteupCard key={i} writeup={writeup} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
