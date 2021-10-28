module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    stroke: (theme) => ({
      red: theme("colors.red.500"),
      green: theme("colors.green.500"),
      blue: theme("colors.blue.500"),
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
};
