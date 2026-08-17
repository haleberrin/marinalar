import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
        colors: {
            primary: "var(--color-primary)",
            background: "var(--color-background)",
            darknavy: "var(--color-darknavy)",
            muted: "var(--color-muted)",
            border: "var(--color-border)",
        },
        fontFamily: {
            heading: ["var(--font-heading)"],
            body: ["var(--font-body)"],
          },
        
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
      },

      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 0 30px rgba(230, 126, 34, 0.25)",
      },
    },
  },

  plugins: [],
};

export default config;