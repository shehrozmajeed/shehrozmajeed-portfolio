"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "%", label: "TOP GLOBAL RANK — TRYHACKME" },
  { value: 100, suffix: "+", label: "OPERATORS LED AT NEXUS" },
  { value: 9, suffix: "", label: "SECURITY & AI TOOLS DEPLOYED" },
  { value: 60, suffix: "%", label: "RED-TEAM EFFORT REDUCED" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, motionVal]);

  return (
    <span
      ref={ref}
      className="font-display text-4xl md:text-5xl font-black text-hack-green text-glow"
    >
      {display}
      <span className="text-hack-red">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="relative z-10 border-y border-hack-green/10 bg-black/50 backdrop-blur-sm">
      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hack-green to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-[9px] md:text-[10px] text-hack-green/30 mt-2 font-mono tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Bottom scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hack-green to-transparent" />
    </div>
  );
}
