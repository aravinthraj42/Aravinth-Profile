import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#059669",
          600: "#047857",
          700: "#065f46",
          800: "#064e3b",
          900: "#052e16",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          emerald: "#34d399",
          teal: "#14b8a6",
          amber: "#f59e0b",
        },
        surface: {
          light: "rgba(255,255,255,0.9)",
          dark: "rgba(55,65,81,0.92)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "glass-light": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
        "glass-dark": "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(5, 46, 22, 0.06)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        "glow": "0 0 40px -10px rgba(5, 150, 105, 0.35)",
        "glow-emerald": "0 0 40px -10px rgba(52, 211, 153, 0.4)",
        "glow-teal": "0 0 40px -10px rgba(20, 184, 166, 0.3)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
