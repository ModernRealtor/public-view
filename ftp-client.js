var PromiseFtp = require("promise-ftp")
var fs = require("fs")
var path = require("path")

class FtpClient {
  host
  user
  pass

  constructor(host, user, password) {
    this.host = host
    this.user = user
    this.pass = password
  }

  // Returns a promise
  // Precondition: outDir is a valid directory
  downloadImg(fpath, outDir) {
    let i = fpath.lastIndexOf("/")
    if (i === -1) {
      return Promise.reject(new Error(`Could not parse name from ${fpath}`))
    }
    let fname = path.join(outDir, fpath.substring(i))
    let client = new PromiseFtp()
    let fileProm = client
      .connect({ host: this.host, user: this.user, password: this.pass })
      .then(msg => client.get(fpath))
      .then(stream => {
        return new Promise(function (resolve, reject) {
          stream.once("close", resolve)
          stream.once("error", reject)
          stream.pipe(fs.createWriteStream(fname))
        })
      })
      .then(() => client.end())
    return fileProm
  }
}

module.exports = FtpClient
