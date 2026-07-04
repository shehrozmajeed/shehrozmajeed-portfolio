import type { Metadata, Viewport } from "next";
import AnimatedBackground from "./components/AnimatedBackground";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Shehroz Majeed | Offensive Security Engineer",
  description:
    "Red team operator & offensive security engineer. Penetration testing, autonomous attack simulation, AI-driven security research. Top 6% TryHackMe globally.",
  keywords: [
    "Red Team",
    "Offensive Security",
    "Penetration Testing",
    "Cybersecurity",
    "Ethical Hacking",
    "Python",
    "TryHackMe",
    "Shehroz Majeed",
    "GIKI",
    "KAPA",
    "AI Security",
  ],
  authors: [{ name: "Shehroz Majeed" }],
  openGraph: {
    title: "Shehroz Majeed | Offensive Security Engineer",
    description: "Simulating attacks. Securing systems. Automating the red team.",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%233b82f6' d='M12 2a7 7 0 0 1 7 7c0 2.7-1.5 5-3.8 6.3L15 22H9l.8-6.7C7.5 14 6 11.7 6 9a7 7 0 0 1 7-7z'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-background text-white selection:bg-blue-500/30 selection:text-blue-200">
        <SmoothScroll>
          <AnimatedBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}