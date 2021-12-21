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
                    listings {
                        ml_num
                        images {
                            path
                        }
                    }
                }
                team {
                    id
                    info {
                        name
                        type
                        title
                        displayOnPv
                    }
                    contact {
                        type
                        value
                        description
                    }
                }
            }
        }
    }
    `)
    let {data: {cms: {org}}} = queryRet
    console.log(queryRet, org)
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
    org.team
    .filter(teamInfo => teamInfo.info.displayOnPv)
    .forEach(teamInfo => {
        createPage({
            path: `/team/${teamInfo.id}`,
            component: Path.resolve(`src/dynamicPages/teamMember.js`),
            context: {
                info: teamInfo.info,
                contact: teamInfo.contact
            }
        })
    })

    if(org.listings.listings){
        let ftpClient = new FtpClient(org.listings.imgHost, `${org.listings.user}@photos`, org.listings.pass)
  
        org.listings.listings.forEach(listing => {
            let newDir = Path.join(__dirname, "dynamicImages", "listings", listing.ml_num)
            proms.push(fs.mkdir(newDir, {recursive: true})
                .then((ret)=>(Promise.all(listing.images.map(({path}) => ftpClient.downloadImg(path, newDir))))
            ))
        })
    }

    return Promise.all(proms)
        
}