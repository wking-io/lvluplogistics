const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

module.exports = {
  siteMetadata: {
    title: 'A Logistics Company Who Gets It Right The First Time',
    titleTemplate: '%s | LVL UP Logistics',
    description:
      'We thrive under pressure! Whether Hot Shot or Same Day Delivery, you can be confident our fleet of 26 foot box trucks will meet any emergency need when delivering your product.',
    siteUrl: 'https://lvluplogistics.com/',
    image: {
      src: '/images/favicon.png',
      alt: 'LVL UP Logo',
      width: '1200',
      height: '900',
    },
    twitterUsername: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LVL UP`,
        short_name: `LVLUP`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-stylelint',
      options: {
        files: [ 'src/*.css' ],
        configFile: 'stylelint.config.js',
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
