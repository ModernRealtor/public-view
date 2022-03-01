const Path = require("path")
const fs = require("fs/promises")

const getCssTemplate = require("./theme-writer")
const FtpClient = require("./ftp-client")
const downloadImg = require("./download-img")

// Write data to a local file system path. Returns a promise
function writeFile(path, data){
	return fs.writeFile(path, data).catch(err => {console.error("Could not write file", err)})
}


// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions}) => {
    let proms = []
    const { createPage} = actions

    let queryRet = await graphql(`
    query{
        cms {
            org {
                id
                info {
                    name
                    dominantColor
                    complimentColor
                    accentColor
                    darkColor
                    lightColor
                }
                listings {
                    user
                    pass
                    imgHost
                    listings(all:true) {
                        totalCount
                        edges {
                            node {
                                ml_num
                                images(all:true) {
                                    totalCount
                                    edges{
                                        node {
                                            path
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                team(all:true) {
                    edges {
                        node {
                            id
                            info {
                                name
                                imageUrl
                                staffInfo {
                                    type
                                    title
                                    displayOnPv
                                    about
                                }
                            }
                            contact {
                                fb
                                ig
                                linkedIn
                                yt
                                tt
                                cell
                                business
                                home
                                email
                                addr
                            }
                        }
                    }
                }
            }
        }
    }
    `)
    let org = queryRet?.data?.cms?.org
    if(!org) throw new Error(`Cannot retrieve org from Graphql query. queryRet: ${JSON.stringify(queryRet)}`)

    // Copy logo SVG into main.svg
    let logoDir = Path.join(__dirname, "static", "logos")
    let logoIn = Path.join(logoDir, `${org.id}.svg`)
    let logoOut = Path.join(logoDir, "main.svg")
    proms.push(fs.copyFile(logoIn, logoOut))


    // Create CSS for specific client
    let cssData = getCssTemplate(org.info)
    proms.push(writeFile(cssData.path, cssData.data))

    // Create team member pages
    let team = org.team.edges.filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)

    team.forEach(({node: {id, info: {imageUrl}}}) => {
        let i = imageUrl.lastIndexOf(".")
        if(i === -1){
          return Promise.reject(new Error(`Expected extension in url: ${imageUrl}`))
        }
        let imgPath = Path.join(__dirname, "dynamicImages", "team", `${id}${imageUrl.slice(i)}`)
        proms.push(downloadImg(imageUrl, imgPath))
    })

    team.forEach(({node: {id, info, contact}}) => {
        let slug = info.name.replace(/\s+/g, "")
        createPage({
            path: `/team/${slug}`,
            component: Path.resolve(`src/dynamicPages/teamMember.js`),
            context: {info, contact, id}
        })
    })

    if(org.listings?.listings?.totalCount > 0){
        let ftpClient = new FtpClient(org.listings.imgHost, `${org.listings.user}@photos`, org.listings.pass)
  
        org.listings.listings.edges
        .filter(({node: {images: {totalCount}}})=> totalCount > 0)
        .forEach(({node}) => {
            let newDir = Path.join(__dirname, "dynamicImages", "listings", node.ml_num)
            proms.push(fs.mkdir(newDir, {recursive: true})
                .then((ret)=>(Promise.all(node.images.edges.map(({node: {path}}) => ftpClient.downloadImg(path, newDir))))
            ))
        })
    }

    return Promise.all(proms)
        
}
