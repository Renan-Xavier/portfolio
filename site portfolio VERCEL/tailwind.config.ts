import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#050505",
          card: "#0d0d0f",
          border: "#1f1f23",
          hover: "#18181b",
        },
        ink: {
          DEFAULT: "#f4f4f5",
          soft: "#a1a1aa",
          muted: "#71717a",
        },
        crimson: {
          DEFAULT: "#dc2626",
          dark: "#991b1b",
          deep: "#450a0a",
          glow: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
