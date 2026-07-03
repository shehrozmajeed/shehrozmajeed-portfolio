"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "%", label: "Top Global Rank — TryHackMe" },
  { value: 100, suffix: "+", label: "Members Led at NEXUS" },
  { value: 9, suffix: "", label: "Security & AI Projects Shipped" },
  { value: 60, suffix: "%", label: "Red-Team Effort Reduced" },
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
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-white">
      {display}
      <span className="text-cyber-blue">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="relative z-10 border-y border-white/5 bg-black/30 backdrop-blur-sm">
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
            <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
