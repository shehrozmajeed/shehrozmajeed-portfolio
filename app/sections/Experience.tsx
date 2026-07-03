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
    <SectionWrapper id="experience" className="bg-cyber-navy/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience & <span className="text-cyber-blue">Leadership</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyber-blue/10 text-cyber-blue">
                  <exp.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-cyber-purple font-medium">{exp.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>

            <ul className="space-y-2 ml-14">
              {exp.points.map((point, pi) => (
                <li key={pi} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 shrink-0" />
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