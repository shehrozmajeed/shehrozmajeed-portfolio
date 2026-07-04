"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 font-semibold tracking-wider text-sm mb-4 block uppercase">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Let's Work Together
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Open for opportunities in Offensive Security and Security Research. Feel free to reach out.
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
          <div className="glass-panel rounded-2xl p-8 mb-6 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500 block mb-1">Email</span>
                    <a href="mailto:shehrozmajeed.sec@gmail.com" className="text-zinc-300 hover:text-blue-400 transition-colors">
                      shehrozmajeed.sec@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500 block mb-1">Location</span>
                    <span className="text-zinc-300">Pakistan — Remote Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/shehrozmajeed", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/shehroz-majeed-a46a012b8", label: "LinkedIn" },
            ].map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-panel text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all font-semibold text-sm border border-white/5 hover:border-white/10"
              >
                <profile.icon className="w-5 h-5" />
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
          className="glass-panel rounded-2xl p-8 space-y-6 border border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            {submitted ? (
              <>Message Sent Successfully</>
            ) : (
              <>Send Message <Send className="w-4 h-4" /></>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}