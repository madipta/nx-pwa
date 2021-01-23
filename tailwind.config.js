module.exports = {
  purge: {
    enabled: true,
    content: [
      "./apps/web/src/**/*.html",
      "./apps/web/src/**/*.ts",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
