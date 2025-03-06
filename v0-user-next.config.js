/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js to serve files from the uploads directory
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/api/uploads/:path*",
      },
    ]
  },
}

module.exports = nextConfig

