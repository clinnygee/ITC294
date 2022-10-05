/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "294website.s3.ap-southeast-2.amazonaws.com"
    ],
  },
}

module.exports = nextConfig
