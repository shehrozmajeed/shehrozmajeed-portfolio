"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const bootLines = [
  "> INITIALIZING SYSTEM...",
  "> LOADING OFFENSIVE MODULES [████████████] 100%",
  "> CONNECTING TO C2 SERVER... OK",
  "> RECON ENGINE ACTIVE",
  "> EXPLOITATION FRAMEWORK LOADED",
  "> CLEARANCE LEVEL: ██████████ GRANTED",
  "> IDENTITY: SHEHROZ MAJEED // RED TEAM LEAD",
];

export default function Hero() {
  const [bootIndex, setBootIndex] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    if (bootIndex < bootLines.length) {
      const t = setTimeout(() => setBootIndex((i) => i + 1), 200 + bootIndex * 120);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBootDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [bootIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-hack-green/30 pointer-events-none"
        style={{ boxShadow: "0 0 12px rgba(0,255,65,0.5)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Boot terminal */}
        <AnimatePresence>
          {!bootDone && (
            <motion.div
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-8 terminal-card rounded-lg p-5 max-w-2xl mx-auto font-mono text-xs md:text-sm"
            >
              <div className="flex items-center gap-2 mb-3 border-b border-hack-green/10 pb-2">
                <span className="w-3 h-3 rounded-full bg-hack-red/80" />
                <span className="w-3 h-3 rounded-full bg-hack-amber/80" />
                <span className="w-3 h-3 rounded-full bg-hack-green/80" />
                <span className="text-hack-green/50 ml-2 text-[10px]">root@kali:~#</span>
              </div>
              {bootLines.slice(0, bootIndex).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-hack-green leading-relaxed"
                  style={{ textShadow: "0 0 6px rgba(0,255,65,0.5)" }}
                >
                  {line}
                </motion.div>
              ))}
              {bootIndex < bootLines.length && (
                <span className="text-hack-green cursor-blink">█</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {bootDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded glass border-hack-green/20 text-hack-green text-xs font-mono mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-hack-red animate-pulse" />
                <span className="text-hack-red/90">LIVE</span>
                <span className="text-hack-green/50">|</span>
                THREAT ACTOR ACTIVE — AVAILABLE FOR ENGAGEMENTS
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-2"
              >
                <span
                  className="text-hack-green glitch"
                  data-text="SHEHROZ"
                >
                  SHEHROZ
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest mb-6"
              >
                <span
                  className="text-white/80 glitch"
                  data-text="MAJEED"
                >
                  MAJEED
                </span>
              </motion.h1>

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg font-mono mb-6 h-7"
              >
                <span className="text-hack-green font-bold">// </span>
                <TypeAnimation
                  sequence={[
                    "Offensive Security Engineer",
                    2000,
                    "Red Team Automation Specialist",
                    2000,
                    "AI-Driven Threat Operator",
                    2000,
                    "Penetration Tester | Top 5% TryHackMe",
                    3000,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  className="text-hack-green"
                />
                <span className="text-hack-green cursor-blink">_</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white max-w-2xl mx-auto mb-10 leading-relaxed text-sm font-mono font-semibold"
              >
                <span className="text-hack-green font-bold">[INFO] </span>
                💻 Cybersecurity | 🎓 GIKI ’27 | 🛡️ Ethical Hacking &amp; Pen Testing | ⚙️ Security Tool Dev | AI &amp; ML <br className="hidden md:block" />
                <span className="text-hack-green mt-2 inline-block font-bold">TryHackMe: Top 5% (8000+ Points) • Completed Paths: Jr Pentester, AI Security</span>
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 rounded font-mono font-bold text-sm tracking-wider border border-hack-green text-hack-green hover:bg-hack-green hover:text-black transition-all duration-200"
                  style={{ boxShadow: "0 0 12px rgba(0,255,65,0.25)" }}
                >
                  [./RUN_PROJECTS.sh]
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded font-mono text-sm tracking-wider border border-hack-red/50 text-hack-red hover:bg-hack-red hover:text-white transition-all duration-200"
                  style={{ boxShadow: "0 0 12px rgba(255,0,51,0.15)" }}
                >
                  [CONTACT OPERATOR]
                </a>
                <a
                  href="/Shehroz_Majeed_Resume.pdf"
                  download
                  className="px-8 py-3 rounded font-mono text-sm tracking-wider border border-hack-amber/40 text-hack-amber hover:bg-hack-amber/10 transition-all duration-200"
                >
                  [DOWNLOAD CV]
                </a>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-6"
              >
                {[
                  { icon: Github, href: "https://github.com/shehrozmajeed", label: "GH" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shehroz-majeed-a46a012b8", label: "LI" },
                  { icon: Terminal, href: "https://tryhackme.com/p/shehrozmajeed", label: "THM" },
                  { icon: Mail, href: "mailto:shehrozmajeed.sec@gmail.com", label: "ML" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded glass text-white hover:text-hack-green hover:border-hack-green/40 transition-all font-mono text-xs flex flex-col items-center gap-1 font-bold"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                    <span>{s.label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white hover:text-hack-green transition-colors font-mono text-xs font-bold"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-hack-green" />
        </a>
      </motion.div>
    </section>
  );
}