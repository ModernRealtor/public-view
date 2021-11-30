/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const themeColor = process.env["themeColor"] || "000000"

const clientRef = process.env["CLIENT_REF"] || "not found"
const cmsURL = process.env["CMS_URL"] || "https://staging.modernrealtor.dev/api/cms/graphql"


module.exports = {
  /* Your site config here */
  siteMetadata: {
    themeColor: `#${themeColor}`
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
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          OrgRef: clientRef
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-offline`,
  ],
}
