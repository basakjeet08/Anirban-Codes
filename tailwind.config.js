/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Color Theme
        primary: "#7979FE",
        primarySoft: "#A5B4FC",
        accent: "#E879F9",
        cyanGlow: "#22D3EE",
        background: "#1C1F22",
        ink: "#0B0D12",
        onBackground: "#FFFFFF",
        card: "#282B2E",
        cardVariant: "#494848",
      },
      fontFamily: {
        mcLaren: ["McLaren", "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(121, 121, 254, 0.45)",
        "glow-lg": "0 0 48px rgba(121, 121, 254, 0.35), 0 0 96px rgba(232, 121, 249, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
