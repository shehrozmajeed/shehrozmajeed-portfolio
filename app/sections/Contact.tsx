"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Github, Linkedin, Mail, MapPin, Send, Terminal } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-hack-green/40 font-mono text-sm">[006]</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
        <span className="font-display text-xs tracking-widest text-hack-green/40">CONTACT.SH</span>
        <div className="flex-1 h-[1px] bg-hack-green/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-widest">
          ESTABLISH <span className="text-hack-green text-glow">CONTACT</span>
        </h2>
        <p className="text-[#4a7a4a] max-w-2xl mx-auto font-mono text-xs">
          <span className="text-hack-red/60">root@kali:~# </span>
          nc -lvnp 4444 — LISTENING FOR OPPORTUNITIES
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hack-green/10">
              <Terminal className="w-4 h-4 text-hack-green" />
              <span className="font-mono text-xs text-hack-green/50">contact_info.json</span>
            </div>
            <div className="font-mono text-xs text-[#4a7a4a] space-y-3">
              <div><span className="text-hack-green/40">status: </span><span className="text-hack-green animate-pulse">ONLINE</span></div>
              <div><span className="text-hack-green/40">role: </span><span className="text-white/70">Offensive Security Engineer</span></div>
              <div><span className="text-hack-green/40">location: </span><span className="text-white/70">Pakistan 🇵🇰</span></div>
              <div><span className="text-hack-green/40">open_to: </span><span className="text-hack-green/70">[red_team, pentest, research]</span></div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <a
              href="mailto:shehrozmajeed.sec@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl terminal-card hover:border-hack-green/40 transition-all group font-mono"
            >
              <Mail className="w-4 h-4 text-hack-green group-hover:scale-110 transition-transform" />
              <span className="text-[#5a8a5a] text-xs">shehrozmajeed.sec@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl terminal-card font-mono">
              <MapPin className="w-4 h-4 text-hack-red/70" />
              <span className="text-[#5a8a5a] text-xs">Pakistan — Remote Available</span>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/shehrozmajeed", label: "GITHUB" },
              { icon: Linkedin, href: "https://linkedin.com/in/shehroz-majeed-a46a012b8", label: "LINKEDIN" },
            ].map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded terminal-card text-[#5a8a5a] hover:text-hack-green hover:border-hack-green/40 transition-all font-mono text-xs"
              >
                <profile.icon className="w-4 h-4" />
                {profile.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="terminal-card rounded-xl p-6 md:p-8 space-y-4"
        >
          <div className="flex items-center gap-2 mb-2 pb-3 border-b border-hack-green/10">
            <Terminal className="w-4 h-4 text-hack-green" />
            <span className="font-mono text-xs text-hack-green/50">send_payload.sh</span>
          </div>

          {[
            { key: "name", label: "OPERATOR_NAME", placeholder: "your_handle", type: "text" },
            { key: "email", label: "EMAIL_ADDR", placeholder: "you@domain.com", type: "email" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-[10px] font-mono text-hack-green/40 mb-1.5 tracking-widest">
                <span className="text-hack-green/20">// </span>{field.label}
              </label>
              <input
                type={field.type}
                required
                value={(formState as any)[field.key]}
                onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                className="w-full px-4 py-3 rounded bg-black/60 border border-hack-green/20 text-hack-green placeholder-hack-green/20 focus:outline-none focus:border-hack-green/60 focus:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all font-mono text-xs"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div>
            <label className="block text-[10px] font-mono text-hack-green/40 mb-1.5 tracking-widest">
              <span className="text-hack-green/20">// </span>MESSAGE_PAYLOAD
            </label>
            <textarea
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 rounded bg-black/60 border border-hack-green/20 text-hack-green placeholder-hack-green/20 focus:outline-none focus:border-hack-green/60 focus:shadow-[0_0_8px_rgba(0,255,65,0.2)] transition-all resize-none font-mono text-xs"
              placeholder="Describe the engagement..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded font-mono text-sm font-bold tracking-widest border border-hack-green text-hack-green hover:bg-hack-green hover:text-black transition-all duration-200 flex items-center justify-center gap-2"
            style={{ boxShadow: "0 0 12px rgba(0,255,65,0.2)" }}
          >
            {submitted ? (
              <><span className="text-hack-green cursor-blink">█</span> PAYLOAD SENT — ACK</>
            ) : (
              <>[./SEND_MESSAGE.sh] <Send className="w-4 h-4" /></>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}