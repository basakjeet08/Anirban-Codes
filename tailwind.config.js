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
        ink: "#0B0D12",
        onBackground: "#FFFFFF",
        card: "#282B2E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(121, 121, 254, 0.45)",
        "glow-lg": "0 0 48px rgba(121, 121, 254, 0.35), 0 0 96px rgba(232, 121, 249, 0.18)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
