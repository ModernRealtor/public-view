/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `West-100 Capital Reality`,
        short_name: `West-100`,
        start_url: `/`,
        icon: `static/icon.svg`,
        background_color: `#FEFEFF`,
        theme_color: `#FBB33B`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-offline`,
  ],
}
