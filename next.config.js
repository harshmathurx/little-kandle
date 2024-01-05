/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com','assets.coingecko.com','content.drisk.io','lh3.googleusercontent.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
