require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
})


const clientRef = process.env["CLIENT_REF"] || "not found"
const cmsURL = process.env["CMS_URL"] || "https://staging.modernrealtor.dev/api/cms/graphql"


console.log(clientRef, cmsURL)

// call Graphql endpoint to retrieve list of images
// for each image, download into "dynamicImages" directory (create if not there)
// The images will be in a directory titled the MLS number
// the image names will be the original file names

// images are downladed via ftp

// once images are downloaded, build can continue (will add filesource gatsby plugin)