const autoprefixer = require('autoprefixer');
module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      flexbox: 'no-2009',
    }),
    require('postcss-hexrgba'),
  ],
});
