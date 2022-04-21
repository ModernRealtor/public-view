const fs = require("fs")
const Path = require("path")

let primary, secondary

function getTheme() {
  if (!primary || !secondary) {
    let themeData = fs.readFileSync(Path.join(__dirname, "custom-theme.txt"), {
      encoding: "utf8",
    })
    ;[primary, secondary] = themeData.trim().split(",")
  }
  return { primary, secondary }
}

module.exports = {
  getTheme,
}
