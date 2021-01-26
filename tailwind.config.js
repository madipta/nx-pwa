module.exports = {
  purge: {
    enabled: true,
    // mode: 'all',
    // preserveHtmlElements: false,
    content: [
      "./apps/web/src/**/*.html",
      "./apps/web/src/**/*.ts",
    ],
    options: {
      // safelist: [],
      // blocklist: [/^flex/],
      // keyframes: true,
      // fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
