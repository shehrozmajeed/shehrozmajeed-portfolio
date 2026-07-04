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
        hack: {
          green: "#00ff41",
          "green-dim": "#00cc33",
          "green-faint": "rgba(0,255,65,0.08)",
          red: "#ff0033",
          "red-dim": "#cc0022",
          amber: "#ffaa00",
          cyan: "#00e5ff",
          bg: "#000000",
          surface: "#050a05",
          "surface-2": "#0a110a",
        },
        // keep legacy names so nothing breaks during migration
        cyber: {
          black: "#000000",
          navy: "#050a05",
          blue: "#00ff41",
          purple: "#ff0033",
          pink: "#ff007a",
          gold: "#ffaa00",
          surface: "rgba(0, 12, 0, 0.6)",
        },
      },
      fontFamily: {
        sans: ["JetBrains Mono", "Share Tech Mono", "monospace"],
        display: ["Orbitron", "JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "Share Tech Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-green": "glow-green 2s ease-in-out infinite alternate",
        "glow-red": "glow-red 2s ease-in-out infinite alternate",
        "matrix-rain": "matrix-rain 20s linear infinite",
        "terminal-type": "terminal-type 0.1s steps(1) infinite",
      },
      keyframes: {
        "glow-green": {
          "0%":   { boxShadow: "0 0 5px #00ff4120, 0 0 10px #00ff4110" },
          "100%": { boxShadow: "0 0 20px #00ff4160, 0 0 40px #00ff4130, 0 0 60px #00ff4115" },
        },
        "glow-red": {
          "0%":   { boxShadow: "0 0 5px #ff003320, 0 0 10px #ff003310" },
          "100%": { boxShadow: "0 0 20px #ff003360, 0 0 40px #ff003330" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        "green": "0 0 8px rgba(0, 255, 65, 0.8)",
        "red": "0 0 8px rgba(255, 0, 51, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;