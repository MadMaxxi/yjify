/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['lastfm.freetls.fastly.net',"i.scdn.co","p.scdn.co",],
  },
}
module.exports = nextConfig
