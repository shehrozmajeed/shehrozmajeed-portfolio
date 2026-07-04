"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  id: string;
}

export default function SectionWrapper({ children, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      style={{
        position: "relative",
        padding: "clamp(60px, 8vh, 100px) clamp(24px, 5vw, 80px)",
        background: "var(--bg)",
        opacity: 0,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}
