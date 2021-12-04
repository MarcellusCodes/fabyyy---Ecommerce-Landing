module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#E8F0F7",
          secondary: "#001C34",
          tertiary: "#d397fa",
          quaternary: "#8364e8",
        },
        dark: {
          primary: "#001C34",
          secondary: "#E8F0F7",
          tertiary: "#9bf8f4",
          quaternary: "#6f7bf7",
        },
      },

      fontFamily: {
        primary: ["Architects Daughter"],
        secondary: ["Anton"],
        paragraph: ["Roboto Slab"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
