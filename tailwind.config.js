/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#9538E2",
      white: "#fff",
    },
    fontFamily: {
      sora: ["Sora", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
