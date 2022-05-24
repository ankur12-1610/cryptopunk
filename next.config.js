/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  StrictReactMode: true,
    /* Add Your Scss File Folder Path Here */
  sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'opensea.mypinata.cloud', "storage.googleapis.com", "*"],
  },
  defaultMode: 'dark'
}
