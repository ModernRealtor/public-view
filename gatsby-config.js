/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const cmsURL =
  process.env["CMS_URL"] ||
  `https://api${process.env.SUB_URL}modernrealtor.dev/graphql`
const gaId = process.env["GA_ID"]
process.env.GATSBY_API_URL = cmsURL
process.env.GATSBY_API_TOKEN = process.env.API_ACCESS_TOKEN

module.exports = {
  siteMetadata: {
    siteUrl: process.env["DOMAIN"] || "",
  },
  plugins: [
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
          Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `listingImages`,
        path: `${__dirname}/dynamicImages/listings/`,
        ignore: ["**/.gitinclude"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teamImages`,
        path: `${__dirname}/dynamicImages/team/`,
        ignore: ["**/.gitinclude"],
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    ...(gaId
      ? [
          {
            resolve: "gatsby-plugin-google-gtag",
            options: {
              trackingIds: [gaId],
              gtagConfig: {
                site_speed_sample_rate: 30,
              },
              pluginConfig: {
                head: true,
              },
            },
          },
        ]
      : []), // Only add GA analytics if GA ID is provided
  ],
}
