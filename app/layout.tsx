import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030305",
};

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
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2300f0ff' d='M12 2 3 6v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V6l-9-4Z'/%3E%3C/svg%3E",
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