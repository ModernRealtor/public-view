let fs = require('fs')
let fetch = require('node-fetch')
let {promisify} = require('node:util')
let {pipeline} = require('node:stream')

const streamPipeline = promisify(pipeline)

function downloadImage(url, outpath) {
    return fetch(url).then(resp => {
        return streamPipeline(resp.body, fs.createWriteStream(outpath))
    }).catch(err => {
        console.error(err)
        return Promise.reject(new Error(`Error downloading image ${url} to ${outpath}`))
    })
}

module.exports = downloadImage