/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const cmsURL = process.env["CMS_URL"] || `https://api${process.env.SUB_URL}modernrealtor.dev/graphql`


module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ModernRealtor",
        short_name: "ModernRealtor",
        start_url: "/",
        theme_color: "#6b37bf",
        icon: "static/icon.svg", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Cms",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "cms",
        // Url to query from
        url: cmsURL,
        // HTTP headers
        headers: {
          Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `listingImages`,
        path: `${__dirname}/dynamicImages/listings/`,
        ignore: ["**/.gitinclude"]
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-offline`,
  ],
}
