/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', '0.75rem'],
        'sm': ['0.875rem', '0.875rem'],
        'base': ['1rem', '1rem'],
        'lg': ['1.125rem', '1.125rem'],
        'xl': ['1.25rem', '1.25rem'],
        '2xl': ['1.5rem', '1.5rem'],
        '3xl': ['1.875rem', '1.875rem'],
        '4xl': ['2.25rem', '2.25rem'],
        '5xl': ['3rem', '3rem'],
      }
    },
  },
  plugins: [],
}
