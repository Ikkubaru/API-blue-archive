import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // setting agar image dari next js bisa digunakan
  images: {
    // menambahkan domain source gambar sesuai dari API
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
