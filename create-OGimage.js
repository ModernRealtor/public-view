const puppeteer = require("puppeteer")
const { readFileSync } = require("fs")

function generateHtml({
  primaryColor,
  secondaryColor,
  imgPath,
  name,
  tagline,
}) {
  return `<html>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
        @layer base {
            body {
                @apply p-4 bg-${secondaryColor}-50
            }
            div {
                @apply flex flex-col place-items-center gap-1 text-center
            }
            h1 {
                @apply text-2xl font-bold text-${primaryColor}-500 
            }
            h2 {
                @apply font-semibold text-${secondaryColor}-500 
            }
            img {
                @apply w-3/4 pb-4
            }
        }
      </style>
    <body>
        <div>
            <img src="data:image/svg+xml;base64,${readFileSync(
              imgPath
            ).toString("base64")}">
            <h1>${name}</h1>
            <h2>${tagline}</h2>
        </div>
    </body>
    </html>`
}

async function generateOG({
  primaryColor,
  secondaryColor,
  imgPath,
  name,
  tagline,
  outPath,
}) {
  let html = generateHtml({
    primaryColor,
    secondaryColor,
    imgPath,
    name,
    tagline,
  })
  let browser, page
  puppeteer
    .launch({ args: ["--no-sandbox"] })
    .then(brows => {
      browser = brows
      return browser.newPage()
    })
    .then(newPage => {
      page = newPage
      return page.setViewport({ width: 300, height: 300 })
    })
    .then(() => page.setContent(html))
    .then(() => page.screenshot({ path: outPath }))
    .then(() => browser.close())
    .catch(err => {
      try {
        browser?.close()
      } catch {}
      return Promise.reject(err)
    })
}

module.exports = generateOG
