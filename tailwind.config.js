/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f7ed3",
        secondary: "#43cea2",
        accent: "#ffe082",
        background: "#f6fafd",
        textPrimary: "#2d3748",
      },
      fontFamily: {
        platypi: ["Platypi", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
