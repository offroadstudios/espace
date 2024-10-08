/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ['"Trebuchet MS"', 'sans-serif'],  // Add Trebuchet MS to primary font
      secondary: ['"Trebuchet MS"', 'sans-serif'],  // Optionally, you can add it to secondary as well
      tertiary: ['"Trebuchet MS"', 'sans-serif'],  // Optionally, for tertiary font
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1350px",
    },
    extend: {
      colors: {
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
        objectPosition: {
          "center-bottom": "70%",
        },
      },
      backgroundImage: {
        landingPage: "url('./asset/landingPage/tattoo.jpg')",
        hero: "url('/src/img/hero/bg.jpg')",
        about: "url('./asset/about/image.png')",
        interview: "url('./asset/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-scrollbar"),
  ],
};
