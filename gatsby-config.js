/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const clientName = process.env["clientName"] || "Demo"
const themeColor = process.env["themeColor"] || "000000"
const clientTagline = process.env["tagline"] || "Tagline"
const clientNumber = process.env["number"] || "phone number"
const clientAddress = process.env["address"] || "address"
const clientFB = process.env["facebook"] || "fb"
const clientInsta = process.env["instagram"] || "insta"
const clientLinkedIn = process.env["linkedIn"] || "linkedIn"
const clientYoutube = process.env["youtube"] || "yt"


const clientRef = process.env["CLIENT_REF"] || "not found"
const cmsURL = process.env["CMS_URL"] || "https://staging.modernrealtor.dev/api/cms/graphql"


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `${clientRef} ${clientName}`,
    description: `${clientName} Description`,
    themeColor: `#${themeColor}`,
    tagline: `${clientTagline}`,
    address: `${clientAddress}`,
    phoneNumber: `${clientNumber}`,
    fb: `${clientFB}`,
    instagram: `${clientInsta}`,
    linkedIn: `${clientLinkedIn}`,
    youtube: `${clientYoutube}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${clientName}`,
        short_name: `${clientName}`,
        start_url: `/`,
        icon: `static/icon.svg`,
        background_color: `#FEFEFF`,
        theme_color: `#${themeColor}`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Cms",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "cms",
        // Url to query from
        url: cmsURL,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-offline`,
  ],
}
