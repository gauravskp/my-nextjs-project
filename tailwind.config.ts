import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable dark mode using class strategy
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
        darkBg: "#1a1a1a", // Dark mode background
        darkFg: "#f5f5f5", // Dark mode foreground
      },
    },
  },
  plugins: [],
} satisfies Config;
