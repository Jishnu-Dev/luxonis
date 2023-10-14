/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.expats.cz'
      }
    ]
  }
}

module.exports = nextConfig
