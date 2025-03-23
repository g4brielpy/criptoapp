/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#18171c",
        primaryOpace: "#1C1C20",

        profit: "#12f98a",
        loss: "f91257",
      },
    },
  },
  plugins: [],
};
