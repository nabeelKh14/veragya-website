import type { Config } from "tailwindcss";

const config = {
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
        border: "#e2e8f0", // slate-200
        input: "#e2e8f0", // slate-200
        ring: "#64748b", // slate-500
        background: "#f8fafc", // slate-50 (light mode default)
        foreground: "#1e293b", // slate-900 (light mode default)
        primary: {
          DEFAULT: "#533D32", // Your custom primary color
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f1f5f9", // slate-100
          foreground: "#1e293b", // slate-900
        },
        destructive: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9", // slate-100
          foreground: "#64748b", // slate-500
        },
        accent: {
          DEFAULT: "#f1f5f9", // slate-100
          foreground: "#1e293b", // slate-900
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1e293b", // slate-900
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1e293b", // slate-900
        },
      },
      borderRadius: {
        lg: "0.7rem",
        md: "calc(0.7rem - 2px)",
        sm: "calc(0.7rem - 4px)",
      },
      fontFamily: {
        heading: ['Noto Serif Devanagari', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;