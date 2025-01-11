import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        darkGrey: "#7f7f7f",
        lightGrey: "#e8e5e4",
      },
      fontFamily: {
        sans: ["Open Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
