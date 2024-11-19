import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.miraheze.org",
      },
      {
        protocol: "https",
        hostname: "thumbs2.imgbox.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
      },
    ],
  }
};

export default nextConfig;
