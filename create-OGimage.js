const puppeteer = require("puppeteer");
const { readFileSync } = require('fs');

function generateHtml({primaryColor, secondaryColor, imgPath, name, tagline}){
    return `<html>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
        @layer base {
            body {
                @apply p-16 bg-${secondaryColor}-50
            }
            div {
                @apply flex flex-col gap-4 
            }
            h1 {
                @apply text-6xl font-bold text-${primaryColor}-500 
            }
            h2 {
                @apply text-3xl font-semibold text-${secondaryColor}-500 
            }
            img {
                @apply w-72 self-end pt-16
            }
        }
      </style>
    <body>
        <div>
            <h1>${name}</h1>
            <h2>${tagline}</h2>
            <img src="data:image/svg+xml;base64,${readFileSync(imgPath).toString('base64')}">
        </div>
    </body>
    </html>`
}

async function generateOG({primaryColor, secondaryColor, imgPath, name, tagline, outPath}){
    let html = generateHtml({primaryColor, secondaryColor, imgPath, name, tagline})
    let browser, page
    puppeteer.launch({args: ['--no-sandbox']})
        .then(brows => {
            browser = brows
            return browser.newPage()
        })
        .then(newPage => {
            page = newPage
            return page.setViewport({width: 1200,height: 627})
        })
        .then(() => page.setContent(html))
        .then(() => page.screenshot({path: outPath}))
        .then(() => browser.close())
        .catch((err) => {
            try {
                browser?.close()
            } catch {}
            return Promise.reject(err)
        })
}

module.exports = generateOG