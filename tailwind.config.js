/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '36em',
      sm: '48em',
      md: '62em',
      lg: '75em',
      xl: '88em',
    },
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' },
        },
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        slideRight: 'slideRight 2s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        underline: 'underline 0.5s cubic-bezier(0.42, 0, 0.58, 1) forwards',
      },
    },
  },
  plugins: [],
};
