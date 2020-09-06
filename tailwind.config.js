module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      stroke: {
        black: "#1b1c1d;",
        white: "#fff",
      },
      colors: {
        black: "#1b1c1d;",
      },
      background: {
        black: "#1b1c1d;",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      fontFamily: {
        body: ["Montserrat"],
        sans: ["Montserrat"],
        serif: ["PlayFairDisplay"],
      },
      transitionDuration: {
        800: "800ms",
      },
      spacing: {
        70: "22rem",
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
    margin: ["responsive", "even"],
  },
  plugins: [],
};
