const { fontFamily, spacing } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      mono: ["var(--font-geist-mono)", ...fontFamily.mono],
    },
    extend: {
      spacing: {
        header: "58px",
        "column-lg": `calc(33.33% - ${spacing[4]})`,
        "column-md": `calc(50% - ${spacing[4]})`,
      },
    },
  },
  plugins: [],
};
