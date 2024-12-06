/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6A1A",
        black: "#212337",
        green: "#749B3F",
        grey100: "#4A4A52",
        grey80: "#A6A6A6",
        grey50: "#D9D9D9",
        grey20: "#F4F6F6",
      },
      fontSize: {
        h1: "80px",
        h2: "48px",
        h3: "40px",
        h4: "32px",
        h5: "24",
        h6: "18px",
        h7: ["12px", { letterSpacing: "-0.02em" }],
        sh1: ["20px", { letterSpacing: "-0.02em" }],
        sh2: ["14px", { letterSpacing: "-0.02em" }],
        b1: ["20px", { lineHeight: "32px", letterSpacing: "-0.02em" }],
        b2: ["18px", { lineHeight: "24px", letterSpacing: "-0.02em" }],
        b3: ["14px", { lineHeight: "24px", letterSpacing: "-0.02em" }],
        b4: ["12px", { lineHeight: "18px", letterSpacing: "-0.02em" }],
      },

      letterSpacing: {
        "2perc": "-0.02em",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          xs: "1rem",
          sm: "1rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        xs: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      boxShadow: {
        customMd: "0px 4px 20px 0px rgba(9, 43, 94, 0.12)",
      },
    },
  },
  plugins: [],
};
