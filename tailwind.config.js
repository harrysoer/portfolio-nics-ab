module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1b1c1d;",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "7rem",
      },
      fontFamily: {
        body: ["Montserrat"],
        sans: ["Montserrat"],
        serif: ["PlayFairDisplay"],
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
