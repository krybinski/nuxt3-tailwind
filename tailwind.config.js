// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        main: '#341f97',
        'main-darken': '#2b1889',
        'main-dark': '#1f1068',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
