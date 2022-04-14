const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./**/*.jsx'],
  theme: {
    screens: {
      '#sm': {
        max: '639px',
      },
      '#md': {
        max: '767px',
      },
      '#lg': {
        max: '1023px',
      },
      '#xl': {
        max: '1199px',
      },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      hug: '1600px',
    },
    extend: {
      padding: {
        'cpx': 'var(--container-px)',
        'cpy': 'var(--container-py)',
      },
      margin: {
        full: 'calc(-1 * var(--container-px))',
      },
      container: {
        padding: {
          DEFAULT: 'var(--container-px)',
        },
        screens: {
          '#sm': {
            max: '639px',
          },
          '#md': {
            max: '767px',
          },
          '#lg': {
            max: '1023px',
          },
          '#xl': {
            max: '1199px',
          },
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      },
      colors: {
        primary: '#822ce5',
      },
      fontFamily: {
        TmoneyRoundWind: 'TmoneyRoundWind',
        Pretendard: 'Pretendard',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
        tab: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      maxWidth: {
        'limit': '1920px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-gradient-primary': {
          color: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, #cf52e8, #7833dc)',
        }
      });
    })
  ],
};
