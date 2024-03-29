const {
  borderWidth,
  colors,
  fontFamily,
  fontSize,
  height,
  inset,
  maxHeight,
  minHeight,
  spacing,
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        project: {
          'sky-foundry': '#C2242B',
          'gondola-gondola': '#C6091E',
          nauticus: '#0A1226',
          sine: '#037EC9',
          'ftx-battle-royale': '#131A22',
          'pirate-life': '#090909',
          'pirate-life-store': '#000000',
          appliquette: '#FA6E81',
        },
        red: {
          ...colors.red,
          '500': '#E5001A',
        },
        gray: {
          ...colors.gray,
          '900': '#272727',
          '950': '#101010',
        },
      },
    },
    borderWidth: {
      ...borderWidth,
      '16': '16px',
    },
    fontFamily: {
      roboto: ['Roboto', ...fontFamily.sans],
    },
    fontSize: {
      ...fontSize,
      '7xl': '5rem',
      '8xl': '6rem',
    },
    gradients: theme => ({
      'black-to-light-down': [
        'to bottom',
        'rgba(0, 0, 0, 0.5)',
        'rgba(0, 0, 0, 0)',
      ],
      'black-to-light-up': [
        'to top',
        'rgba(0, 0, 0, 0.36)',
        'rgba(255, 255, 255, 0)',
      ],
    }),
    height: theme => ({
      ...height(theme),
      '3/4': '75%',
    }),
    inset: {
      ...inset,
      '1/2': '50%',
    },
    maxHeight: {
      ...maxHeight,
      '16': '4rem',
      '161px': '161px',
    },
    minHeight: {
      ...minHeight,
      '65px': '64px',
    },
    spacing: {
      ...spacing,
      '14': '3.5rem',
    },
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      '-1/2-full': ['-50%', '-100%'],
      '-4screen': '-4vh',
      test: '-12px',
      test2: '-6px) rotate(270deg',
    },
    rotate: {
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
    },
  },
  variants: {
    gradients: ['responsive', 'hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')(),
    require('tailwindcss-plugins/gradients'),
  ],
}
