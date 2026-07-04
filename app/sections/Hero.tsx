"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Terminal, ChevronRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          <div className="flex-1 text-center md:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-medium text-emerald-400 mb-8 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR ENGAGEMENTS
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 text-white"
            >
              Shehroz
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-zinc-400"
            >
              Majeed.
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl font-mono mb-6 h-8 text-blue-400 font-medium"
            >
              <TypeAnimation
                sequence={[
                  "Offensive Security Engineer",
                  2000,
                  "Red Team Automation Specialist",
                  2000,
                  "AI-Driven Threat Operator",
                  2000,
                  "Penetration Tester",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-zinc-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed text-base font-medium"
            >
              Junior at GIKI studying BS Cybersecurity. Bridging the gap between 
              <span className="text-white"> Offensive Security</span> and 
              <span className="text-white"> AI/ML</span>. Focusing on automated attack simulation and vulnerability research. <br className="hidden md:block mt-2" />
              <span className="text-emerald-400/90 inline-block mt-3 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                Top 5% TryHackMe (8000+ Points) • Jr Pentester • AI Security
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide bg-white text-black hover:bg-zinc-200 transition-all duration-300"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-medium text-sm tracking-wide border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Shehroz_Majeed_Resume.pdf"
                download
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/shehrozmajeed", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/shehroz-majeed-a46a012b8", label: "LinkedIn" },
                { icon: Terminal, href: "https://tryhackme.com/p/shehrozmajeed", label: "TryHackMe" },
                { icon: Mail, href: "mailto:shehrozmajeed.sec@gmail.com", label: "Email" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-panel text-zinc-400 hover:text-white hover:border-zinc-500 transition-all hover:scale-110 duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce text-zinc-400" />
        </a>
      </motion.div>
    </section>
  );
}