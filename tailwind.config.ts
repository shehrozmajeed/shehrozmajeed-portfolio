import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#a1a1aa", // zinc-400
        tertiary: "#52525b", // zinc-600
        background: "#09090b", // zinc-950
        surface: "#18181b", // zinc-900
        "surface-2": "#27272a", // zinc-800
        accent: {
          blue: "#3b82f6", // blue-500
          cyan: "#06b6d4", // cyan-500
          emerald: "#10b981", // emerald-500
        },
        // Keep legacy names mapped to new colors to prevent immediate crashes during migration
        hack: {
          green: "#10b981",
          "green-dim": "#059669",
          "green-faint": "rgba(16, 185, 129, 0.08)",
          red: "#ef4444",
          "red-dim": "#dc2626",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          bg: "#09090b",
          surface: "#18181b",
          "surface-2": "#27272a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;