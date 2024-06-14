import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.png')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3440px",
      },
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "green": "#096F6D",
      "yellow": "#EED37E"
    }
  },
  plugins: [],
};
export default config;
