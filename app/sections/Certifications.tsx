"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Trophy, Shield, Cloud, Bug, Award } from "lucide-react";

const certs = [
  {
    name: "TryHackMe",
    detail: "Top 6% Globally",
    icon: Trophy,
    color: "text-amber-400",
    bg: "from-amber-400/20 to-transparent",
    border: "border-amber-400/30",
  },
  {
    name: "Google Cybersecurity",
    detail: "Professional Certificate",
    icon: Shield,
    color: "text-cyber-blue",
    bg: "from-cyber-blue/20 to-transparent",
    border: "border-cyber-blue/30",
  },
  {
    name: "AWS Cloud Security",
    detail: "Specialization",
    icon: Cloud,
    color: "text-orange-400",
    bg: "from-orange-400/20 to-transparent",
    border: "border-orange-400/30",
  },
  {
    name: "Bug Hunting",
    detail: "Practical Web Security",
    icon: Bug,
    color: "text-emerald-400",
    bg: "from-emerald-400/20 to-transparent",
    border: "border-emerald-400/30",
  },
  {
    name: "Networking for Ethical Hacking",
    detail: "Advanced Network Security",
    icon: Award,
    color: "text-cyber-purple",
    bg: "from-cyber-purple/20 to-transparent",
    border: "border-cyber-purple/30",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Certifications & <span className="text-cyber-purple">Rankings</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Validated expertise through industry-recognized platforms and
          consistent competitive practice.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`glass rounded-2xl p-6 text-center border ${cert.border} hover:shadow-lg transition-all`}
          >
            <div
              className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cert.bg} flex items-center justify-center`}
            >
              <cert.icon className={`w-7 h-7 ${cert.color}`} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
            <p className="text-sm text-slate-400">{cert.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* TryHackMe emphasis banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 max-w-3xl mx-auto glass rounded-2xl p-8 border border-amber-400/20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <Trophy className="w-12 h-12 text-amber-400 shrink-0" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              TryHackMe — Top 6% Globally
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Consistent, demonstrated hands-on practice in penetration testing,
              privilege escalation, web exploitation, and network security
              through 500+ hours of lab time.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}