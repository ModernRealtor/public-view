const path = require("path")

async function resolveManifestOptions(graphql){
    return graphql(`
    query{
        cms {
            org {
                info {
                    name
                }
            }
        }
    }
    `).then(ret => {
        let data = ret.data.cms.org.info
        return ({
            // in future, grab all values from fauna
            // AND icon/svg; save locally then use
            name: data.name,
            short_name: data.name,
            background_color: "#15F4EE",
            theme_color: "#15F4EE" 
        })
    })
}

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, store, actions}) => {
    const state = store.getState()
    const { createPage } = actions

    // Update manifest with dynamic content
    const plugin = state.flattenedPlugins.find(plugin => plugin.name === "gatsby-plugin-manifest")
    if (plugin) {
        const manifestOptions = await resolveManifestOptions(graphql)
        plugin.pluginOptions = {...plugin.pluginOptions, ...manifestOptions}
    }

    // Create test page
    const pageTemplate = path.resolve(`src/dynamicPages/teamMember.js`)
    createPage({
        path: "/team/1",
        component: pageTemplate
    })
}