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
    <SectionWrapper id="contact" className="bg-cyber-navy/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-cyber-blue">Touch</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Open to offensive security roles, red-team contracts, and security
          research collaborations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
          <div className="space-y-4 mb-8">
            <a
              href="mailto:shehrozmajeed.sec@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyber-blue/30 transition-all group"
            >
              <Mail className="w-5 h-5 text-cyber-blue group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">shehrozmajeed.sec@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl glass">
              <MapPin className="w-5 h-5 text-cyber-purple" />
              <span className="text-slate-300">Pakistan</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Profiles</h3>
          <div className="flex gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/shehrozmajeed",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/shehroz-majeed-a46a012b8",
                label: "LinkedIn",
              },
            ].map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl glass text-slate-300 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
              >
                <profile.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{profile.label}</span>
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
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 transition-all"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue/50 focus:ring-1 focus:ring-cyber-blue/50 transition-all resize-none"
              placeholder="Tell me about the opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-black font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {submitted ? (
              "Message Sent!"
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}