/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.unsplash.com",
      "mango.blender.org",
      "download.blender.org",
    ],
  },
};

export default nextConfig;
