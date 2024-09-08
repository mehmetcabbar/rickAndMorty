/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Spicy Rice", "serif"],
      },
      colors: {
        appColor: "#BFDE42", // Özel renk tanımlaması
        customBlack: "#0F0E12", // Bir başka özel renk
        customGray: "#666666",
        customBorder: "#42B4CA",
        sofBlack: "#191922",
      },
    },
  },
  plugins: [],
};
