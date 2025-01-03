import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundHover: "var(--foregroundHover)",
        foregroundTextHover: "var(--foregroundTextHover)",
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
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
