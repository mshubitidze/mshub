/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "google.com",
      },
      {
        protocol: "https",
        hostname: "react.dev",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
