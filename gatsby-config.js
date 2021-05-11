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
        name: `Public View`,
        short_name: `PV`,
        start_url: `/`,
        icon: `static/icon.png`,
        background_color: `#FEFEFF`,
        theme_color: `#FBB33B`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
