"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Briefcase, Users, Calendar } from "lucide-react";

const experiences = [
  {
    role: "President",
    org: "NEXUS — Cybersecurity Society, GIKI",
    period: "May 2026 – Present",
    type: "Leadership",
    clearance: "Executive",
    clearanceClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
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
    type: "Internship",
    clearance: "Technical",
    clearanceClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
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
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Experience & <span className="text-blue-500">Leadership</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel p-6 md:p-8 relative overflow-hidden group hover:border-zinc-500/50 transition-colors"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-zinc-800/50 group-hover:bg-blue-500/10 transition-colors">
                  <exp.icon className="w-6 h-6 text-zinc-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{exp.type}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${exp.clearanceClass}`}>
                      {exp.clearance}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-blue-400 font-medium text-sm">{exp.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium md:pt-1">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>

            {/* Points */}
            <ul className="space-y-3 pl-[3.25rem]">
              {exp.points.map((point, pi) => (
                <li key={pi} className="text-sm text-zinc-300 font-medium flex items-start gap-3">
                  <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}