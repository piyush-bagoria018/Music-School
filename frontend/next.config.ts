/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint errors during build
  },
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
