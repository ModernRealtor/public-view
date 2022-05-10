const Path = require("path")
const fs = require("fs/promises")
const fetch = require("node-fetch")
const colors = require("tailwindcss/colors")

const downloadImg = require("./download-img")
const generateOG = require("./create-OGimage")

const MAP_TOKEN = process.env["MAP_TOKEN"]

// Write data to a local file system path. Returns a promise
function writeFile(path, data) {
  return fs.writeFile(path, data).catch(err => {
    console.error("Could not write file", err)
  })
}

// Returns {longitude: XX, latitude: XX} of a given address
function getLatLon(address) {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=ca&limit=1&types=place%2Cpostcode%2Caddress&language=en&access_token=${MAP_TOKEN}`
  return fetch(url)
    .then(resp => resp.json())
    .then(({ features: [{ center: [longitude, latitude] }] }) => ({
      longitude,
      latitude,
    }))
}

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
  // Screenshot OG images
}

exports.createPages = async ({ graphql, actions }) => {
  let proms = []
  const { createPage } = actions

  let queryRet = await graphql(`
    {
      cms {
        curOrg {
          id
          name
          imageUrl
          tagline
          dominantColor
          complimentColor
          contact {
            addr
          }
          staff {
            id
            title
            about
            displayOnPv
            user {
              name
              imageUrl
              contact {
                fb
                ig
                linkedIn
                yt
                twitter
                cell
                business
                email
                addr
              }
            }
          }
        }
      }
    }
  `)
  let org = queryRet?.data?.cms?.curOrg
  if (!org)
    throw new Error(
      `Cannot retrieve org from Graphql query. queryRet: ${JSON.stringify(
        queryRet
      )}`
    )

  // Copy logo SVG into main.svg
  let logoDir = Path.join(__dirname, "static", "logos")
  let logoOut = Path.join(logoDir, "main.svg")
  proms.push(downloadImg(org.imageUrl, logoOut).then(() => (
    // Generate OG Image
    generateOG({
      primaryColor: org.dominantColor,
      secondaryColor: org.complimentColor,
      imgPath: logoOut,
      name: org.name,
      tagline: org.tagline || "",
      outPath: Path.join(logoDir, "main300x300.png"),
    })
  )))

  // If org address provided, download map image
  if (org.contact?.addr) {
    proms.push(
      getLatLon(org.contact.addr).then(({ latitude, longitude }) => {
        let outPath = Path.join(__dirname, "static", "map.png")
        let markerColor = org.info?.dominantColor
          ? colors[org.info.dominantColor][500].replace("#", "")
          : "555555"
        let url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l+${markerColor}(${longitude},${latitude})/${longitude.toFixed(
          4
        )},${latitude.toFixed(4)},15,0/600x400@2x?access_token=${MAP_TOKEN}`
        return downloadImg(url, outPath)
      })
    )
  }

  // New colors
  let themePath = Path.join(__dirname, "custom-theme.txt")
  proms.push(
    writeFile(
      themePath,
      `${org.dominantColor},${org.complimentColor}`
    )
  )

  // Create team member pages
  let team = org.staff.filter(({displayOnPv}) => displayOnPv)
  team.forEach(({id, user: {imageUrl}}) => {
      let i = imageUrl.lastIndexOf(".")
      if (i === -1) {
        return Promise.reject(
          new Error(`Expected extension in url: ${imageUrl}`)
        )
      }
      let imgPath = Path.join(
        __dirname,
        "dynamicImages",
        "team",
        `${id}${imageUrl.slice(i)}`
      )
      proms.push(downloadImg(imageUrl, imgPath))
    }
  )

  team.forEach((staff) => {
    let slug = (staff.user.name || `Staff${staff.id}`).replace(/\s+/g, "")
    createPage({
      path: `/team/${slug}`,
      component: Path.resolve(`src/dynamicPages/teamMember.js`),
      context: { staff, fname: String(staff.id)},
    })
  })

  // Temporary since listings is not implemented on backend yet
  if (false && org.listings?.listings?.totalCount > 0) {
    let ftpClient = new FtpClient(
      org.listings.imgHost,
      `${org.listings.user}@photos`,
      org.listings.pass
    )

    org.listings.listings.edges
      .filter(
        ({
          node: {
            images: { totalCount },
          },
        }) => totalCount > 0
      )
      .forEach(({ node }) => {
        let newDir = Path.join(
          __dirname,
          "dynamicImages",
          "listings",
          node.ml_num
        )
        proms.push(
          fs
            .mkdir(newDir, { recursive: true })
            .then(ret =>
              Promise.all(
                node.images.edges.map(({ node: { path } }) =>
                  ftpClient.downloadImg(path, newDir)
                )
              )
            )
        )
      })
  }

  return Promise.all(proms)
}
