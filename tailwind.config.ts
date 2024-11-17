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
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundHover: "var(--foregroundHover)",
        transparentColor: "var(--transparentColor)",
        borderColor: "var(--borderColor)",
        primary: "var(--primary)",
        primaryHover: "var(--primaryHover)",
        secondary: "var(--secondary)",
        secondaryHover: "var(--secondaryHover)",
        success: "var(--success)",
        successHover: "var(--successHover)",
        danger: "var(--danger)",
        dangerHover: "var(--dangerHover)",
      },
    },
  },
  plugins: [],
};
export default config;
