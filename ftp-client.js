var PromiseFtp = require("promise-ftp")
var fs = require("fs")
var path = require("path")

class FtpClient {
  user
  pass

  constructor(user, password) {
    this.user = user
    this.pass = password
  }

  // Returns a promise
  // Precondition: outDir is a valid directory
  downloadImg(fpath, outDir) {
    let iName = fpath.lastIndexOf("/")
    let iHost = fpath.indexOf("/")
    if (iName === -1) {
      return Promise.reject(new Error(`Could not parse name from ${fpath}`))
    }
    if(iHost === -1){
      return Promise.reject(new Error(`Could not parse host from ${fpath}`))
    }
    let host = fpath.substring(0, iHost)
    let getPath = fpath.substring(iHost)
    let fname = path.join(outDir, fpath.substring(iName))
    let client = new PromiseFtp()
    let fileProm = client
      .connect({ host, user: this.user, password: this.pass })
      .then(msg => client.get(getPath))
      .then(stream => {
        return new Promise(function (resolve, reject) {
          stream.once("close", resolve)
          stream.once("error", (err) => {
            console.error(`Error downloading ${getPath}: ${err}`)
            return reject()
          })
          stream.pipe(fs.createWriteStream(fname))
        })
      })
      .then(() => client.end())
    return fileProm
  }
}

module.exports = FtpClient
