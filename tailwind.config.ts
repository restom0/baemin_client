import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgb(var(--color-background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        "surface-soft": "rgb(var(--color-surface-soft-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        "muted-foreground":
          "rgb(var(--color-muted-foreground-rgb) / <alpha-value>)",
        beamin: "rgb(var(--color-brand-rgb) / <alpha-value>)",
        "beamin-50": "rgb(var(--color-brand-soft-rgb) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        ds: "var(--shadow-card)",
        "ds-float": "var(--shadow-float)",
      },
    },
  },
  plugins: [],
};
export default config;
