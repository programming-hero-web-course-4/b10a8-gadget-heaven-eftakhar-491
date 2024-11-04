/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#9538E2",
      white: "#fff",
      lightWhite: "#09080F99",
      black: "#000",
      green: "#309C08",
      lightGreen: "#309C081A",
    },
    fontFamily: {
      sora: ["Sora", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
