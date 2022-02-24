const Path = require("path")
const fs = require("fs/promises")

const getCssTemplate = require("./theme-writer")
const FtpClient = require("./ftp-client")

function resolveManifestOptions(orgInfo){
    return ({
        // in future, grab all values from fauna
        // AND icon/svg; save locally then use
        name: orgInfo.name,
        short_name: orgInfo.name,
        // Only add the color if it is not null aka set by the client
        ...(orgInfo.dominantColor && {theme_color: orgInfo.dominantColor})
    })
}

// Write data to a local file system path. Returns a promise
function writeFile(path, data){
	return fs.writeFile(path, data).catch(err => {console.error("Could not write file", err)})
}


// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, store, actions, getCache, createNodeId}) => {
    let proms = []
    const state = store.getState()
    const { createPage, createNode,  createNodeField} = actions

    let queryRet = await graphql(`
    query{
        cms {
            org {
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
    // Update manifest with dynamic content
    const plugin = state.flattenedPlugins.find(plugin => plugin.name === "gatsby-plugin-manifest")
    if (plugin) {
        const manifestOptions = resolveManifestOptions(org.info)
        plugin.pluginOptions = {...plugin.pluginOptions, ...manifestOptions}
    }

    // Create CSS for specific client
    let cssData = getCssTemplate(org.info)
    proms.push(writeFile(cssData.path, cssData.data))

    // Create team member pages
    org.team.edges
    .filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)
    .forEach(({node: {id, info, contact}}) => {
        createPage({
            path: `/team/${id}`,
            component: Path.resolve(`src/dynamicPages/teamMember.js`),
            context: {info, contact}
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
