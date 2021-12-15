const path = require("path")
const fs = require("fs/promises")
const getCssTemplate = require("./theme-writer")

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

exports.createPages = async ({ graphql, store, actions}) => {
    let proms = []
    const state = store.getState()
    const { createPage } = actions

    let data = await graphql(`
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
                    listings {
                        ml_num
                        images {
                            url
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

    /**
     * TODO:
     * 
     * Check if listings is null
     * if not, for each listing:
     * for each image:
     * create Remotenode. for each remote node, add 2 node fields, mlNum and imgNum
     */

    // Update manifest with dynamic content
    const plugin = state.flattenedPlugins.find(plugin => plugin.name === "gatsby-plugin-manifest")
    if (plugin) {
        const manifestOptions = resolveManifestOptions(data.data.cms.org.info)
        plugin.pluginOptions = {...plugin.pluginOptions, ...manifestOptions}
    }

    let cssData = getCssTemplate(data.data.cms.org.info)

    proms.push(writeFile(cssData.path, cssData.data))

    // Create team member pages
    data.data.cms.org.team
    .filter(teamInfo => teamInfo.info.displayOnPv)
    .forEach(teamInfo => {
        createPage({
            path: `/team/${teamInfo.id}`,
            component: path.resolve(`src/dynamicPages/teamMember.js`),
            context: {
                info: teamInfo.info,
                contact: teamInfo.contact
            }
        })
    })

    return Promise.all(proms)
        
}