"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import CyberGrid from "../components/CyberGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <CyberGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
            Available for Opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Shehroz</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple text-glow">
            Majeed
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-400 font-mono mb-8 h-8"
        >
          <TypeAnimation
            sequence={[
              "Offensive Security Engineer",
              2000,
              "Red Team Automation Specialist",
              2000,
              "AI-Driven Security Researcher",
              2000,
              "Simulating attacks. Securing systems. Automating defense.",
              4000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyber-blue"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science student at GIKI. Top 6% globally on TryHackMe.
          Building autonomous attack simulators, ML-powered SOC analyzers, and
          zero-trust architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-black font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyber-blue/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass text-white font-medium hover:border-cyber-blue/40 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: Github, href: "https://github.com/shehrozmajeed" },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/shehroz-majeed-a46a012b8",
            },
            { icon: Mail, href: "mailto:shehrozmajeed.sec@gmail.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-slate-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
              aria-label="Social link"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyber-blue transition-colors"
        >
          <span className="text-xs font-mono">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}