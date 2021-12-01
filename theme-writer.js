/**
 *  Return data to write to a file
 * 
 * Takes in an object containing at least the properties of: 
 * darkColor, lightColor, dominantColor, complimentColor, accentColor
 * may be nulls
 * 
 * returns a an object with 2 props:
 *  path: the path to write file contents to
 *  data: is the contents of the css file to write
 *  */
function generateThemeCss(orgInfo){
    let themeInfo = {}
    themeInfo.darkColor = orgInfo.darkColor || "#353D2F"
    themeInfo.lightColor = orgInfo.lightColor || "#CFFFB3"
    themeInfo.dominantColor = orgInfo.dominantColor || "#3B7080"
    themeInfo.complimentColor = orgInfo.complimentColor || "#ADE25D"
    themeInfo.accentColor = orgInfo.accentColor || "#FCEC52"
    let path = "./src/styles/theme.css"
    let data = generateThemeTemplate(themeInfo)
    return {path, data}
}


/**
 * Returns a string which represents the [tailwind] css data to write to a file
 * 
 * takes in an object with exactly the following properties (no nulls)
 * darkColor, lightColor, dominantColor, complimentColor, accentColor
 *  */
function generateThemeTemplate(themeInfo){
    let template = `
:root {
    --color-primary:${themeInfo.dominantColor};
    --color-secondary: ${themeInfo.complimentColor};
    --color-accent: ${themeInfo.accentColor};
    --color-dark: ${themeInfo.darkColor};
    --color-light: ${themeInfo.lightColor};
}
`

    return template
}

/**
    @layer utilities {
        @variants dark {
            .compliment-color {

            }
        }

        .compliment-color {

        }

        .dominant-color {

        }

        .accent-color {

        }
    }
 */

module.exports = generateThemeCss