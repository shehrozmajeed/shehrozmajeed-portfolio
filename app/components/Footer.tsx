import { Skull } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-hack-green/10 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hack-green/30 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-hack-green/30 text-xs font-mono">
          <Skull className="w-4 h-4" />
          <span>Shehroz Majeed // Red Team Operator</span>
        </div>
        <p className="text-hack-green/20 text-[10px] font-mono tracking-widest">
          [BUILT WITH] Next.js · TailwindCSS · Three.js · Matrix Rain Canvas
        </p>
        <div className="text-[9px] font-mono text-hack-green/20 tracking-widest">
          <span className="text-hack-red/40">root@kali</span>
          <span className="text-hack-green/30">:~# </span>
          <span className="text-hack-green/40 cursor-blink">█</span>
        </div>
      </div>
    </footer>
  );
}