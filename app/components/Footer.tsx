import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Shield className="w-4 h-4" />
          <span> Shehroz Majeed. All rights reserved.</span>
        </div>
        <p className="text-slate-600 text-xs font-mono">
          Built with Next.js &middot; Tailwind CSS &middot; Three.js
        </p>
      </div>
    </footer>
  );
}