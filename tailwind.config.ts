import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        wood: {
          DEFAULT: "#8B4513",
          light: "#A0522D",
          dark: "#6B3410",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#D4D4D4",
          800: "#2D3748",
        },
        navy: {
          DEFAULT: "#1A365D",
          light: "#2A4A7F",
          dark: "#102A4A",
        },
      },
      animation: {
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;