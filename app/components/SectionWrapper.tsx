"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-6 ${className}`}
      style={{ background: "#000000" }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}