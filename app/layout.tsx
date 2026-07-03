import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehroz Majeed | Offensive Security Engineer",
  description:
    "Cybersecurity professional specializing in penetration testing, red team automation, and AI-driven security research. Top 6% TryHackMe globally.",
  keywords: [
    "Cybersecurity",
    "Penetration Testing",
    "Red Team",
    "Offensive Security",
    "Python",
    "TryHackMe",
    "Shehroz Majeed",
    "GIKI",
  ],
  authors: [{ name: "Shehroz Majeed" }],
  openGraph: {
    title: "Shehroz Majeed | Offensive Security Engineer",
    description: "Simulating attacks. Securing systems. Automating defense.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}