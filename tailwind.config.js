/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'var(--main-color)',
        'secondary': 'var(--secondary-color)',
        'background': 'var(--background-color)',
        'text-primary': 'var(--text-color)',
        'border': 'var(--border-color)',
        'hover': 'var(--hover-color)',
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'], // esto pisa la fuente por defecto
      },
    },
  },
  plugins: [],
}
