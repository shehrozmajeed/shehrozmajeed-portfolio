import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shehroz Majeed — Offensive Security Engineer",
  description:
    "Cybersecurity specialist bridging offensive security and AI/ML. Red team automation, penetration testing, and AI-driven threat modeling. Top 5% TryHackMe globally.",
  keywords: [
    "Shehroz Majeed",
    "Offensive Security",
    "Red Team",
    "Penetration Testing",
    "Cybersecurity",
    "AI Security",
    "Ethical Hacking",
    "GIKI",
    "TryHackMe",
    "Portfolio",
  ],
  authors: [{ name: "Shehroz Majeed" }],
  openGraph: {
    title: "Shehroz Majeed — Offensive Security Engineer",
    description:
      "Simulating attacks. Securing systems. Automating the red team.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🛡%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
