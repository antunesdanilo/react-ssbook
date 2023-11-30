/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      'max-md': {'max': '768px'},
      lg: '992px',
      'max-lg': {'max': '992px'},
      xl: '1200px',
      xxl: '1400px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 'calc(100% - 1.5rem)',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen xxl': {
            maxWidth: '1340px',
          },
        },
        '.center': {
          margin: '0 auto',
        }
      });
    }
  ],
}

