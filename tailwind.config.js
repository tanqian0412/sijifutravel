/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C41E3A',
        gold: '#D4A84B',
        warm: {
          50: '#FAFAF8',
          900: '#1A1A1A',
        },
        charcoal: '#2D2D2D',
      },
      fontFamily: {
        chinese: ['Noto Serif SC', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
