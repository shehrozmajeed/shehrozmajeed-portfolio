"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Skull } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC"
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled ? "glass-strong border-b border-hack-green/20 py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Skull
            className="w-6 h-6 text-hack-green group-hover:text-hack-red transition-colors"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,255,65,0.8))" }}
          />
          <span className="font-display font-bold text-sm tracking-widest">
            <span className="text-hack-green text-glow">SM</span>
            <span className="text-hack-green/40">::RED_TEAM</span>
          </span>
        </a>

        {/* Center clock */}
        <div className="hidden lg:block text-[10px] text-hack-green/30 tracking-widest">
          {time}
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-hack-green/50 hover:text-hack-green transition-colors relative group tracking-widest"
            >
              <span className="text-hack-green/20 group-hover:text-hack-green/40 mr-0.5">/</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-hack-green group-hover:w-full transition-all duration-300 shadow-[0_0_6px_rgba(0,255,65,0.8)]" />
            </a>
          ))}
          <a
            href="/Shehroz_Majeed_Resume.pdf"
            download
            className="text-xs tracking-widest px-3 py-1.5 border border-hack-green/40 text-hack-green hover:bg-hack-green hover:text-black transition-all rounded"
          >
            [CV]
          </a>
          <a
            href="#contact"
            className="text-xs tracking-widest px-3 py-1.5 border border-hack-red/40 text-hack-red hover:bg-hack-red hover:text-white transition-all rounded"
          >
            [HIRE]
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hack-green"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-hack-green/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-hack-green/60 hover:text-hack-green transition-colors font-mono text-sm tracking-widest"
                >
                  <span className="text-hack-red mr-2">&gt;</span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}