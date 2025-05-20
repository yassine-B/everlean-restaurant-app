const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/PageComponents/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['Roboto', 'sans-serif'],
        text: ['Open Sans', 'sans-serif']
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8'
      },
      height: {
        '60vh': '60vh',
        '80vh': '80vh',
        '100vh': '100vh'
      },
      width: {
        '20rem': '20rem'
      },
      colors: {
        primary: 'var(--primary-color)',
        primaryText: 'var(--primary-text)',
        background: 'var(--background-color)',
        cardBackground: 'var(--card-background-color)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
