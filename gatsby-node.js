const path = require("path")

function resolveManifestOptions(orgInfo){
    return ({
        // in future, grab all values from fauna
        // AND icon/svg; save locally then use
        name: orgInfo.name,
        short_name: orgInfo.name,
        background_color: "#15F4EE",
        theme_color: "#15F4EE" 
    })
}

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, store, actions}) => {
    const state = store.getState()
    const { createPage } = actions

    let data = await graphql(`
    query{
        cms {
            org {
                info {
                    name
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

    // Update manifest with dynamic content
    const plugin = state.flattenedPlugins.find(plugin => plugin.name === "gatsby-plugin-manifest")
    if (plugin) {
        const manifestOptions = resolveManifestOptions(data.data.cms.org.info)
        plugin.pluginOptions = {...plugin.pluginOptions, ...manifestOptions}
    }

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
}