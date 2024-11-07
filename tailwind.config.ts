import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',  // Ensure Preline's JavaScript is included correctly
  ],
  darkMode: 'class',  // Enables dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Allowing custom CSS variables for colors
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),  // Correct plugin inclusion for Preline
    require('daisyui'),  // Include DaisyUI plugin for additional UI components
  ],
};

export default config;
