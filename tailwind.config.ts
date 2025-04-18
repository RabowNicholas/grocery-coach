import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#5E6D53", // olive green
        terra: "#D8A48F", // terracotta
        beige: "#F4F1EC", // soft background
        dark: "#1C1C1C", // deep neutral
        light: "#F7F3EA", // pale beige
        muted: "#A9B6A0", // soft sage
      },
    },
  },
  plugins: [],
};

export default config;
