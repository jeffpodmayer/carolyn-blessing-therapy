/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a5a9e", // Darker blue - WCAG AA compliant
        secondary: "#2ea574", // Darker green - WCAG AA compliant
        accent: "#f4b942", // Darker yellow - better contrast
        background: "#f6fafd",
        textPrimary: "#1a202c", // Much darker gray - WCAG AA compliant
      },
      fontFamily: {
        platypi: ["Platypi", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
