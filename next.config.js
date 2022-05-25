/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  StrictReactMode: true,
    /* Add Your Scss File Folder Path Here */
  sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/testnets-api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'opensea.mypinata.cloud', "storage.googleapis.com", "*"],
  },
  defaultMode: 'dark'
}
