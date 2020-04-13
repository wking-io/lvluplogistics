const colors = {
  black: '#1F2933',
  white: '#ffffff',
  primary: {
    default: '#22A8DF',
    dark: '#2A2B5E',
  },
  transparent: 'transparent',
  grey: {
    '100': '#F5F7FA',
    '200': '#E4E7EB',
    '300': '#CBD2D9',
    '400': '#9AA5B1',
    '500': '#7B8794',
    '600': '#616E7C',
    '700': '#52606D',
    '800': '#3E4C59',
    '900': '#323F4B',
  },
  facebook: {
    default: '#4267b2',
    hover: '#3b5da0',
  },
  twitter: {
    default: '#1da1f2',
    hover: '#1a91da',
  },
  instagram: {
    default: '#D00F80',
  },
};

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'nimbus-sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors,
    extend: {},
  },
  variants: {},
  plugins: [],
};
