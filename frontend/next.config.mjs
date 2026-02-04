/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // essential for cPanel Node hosting
  images: {
    domains: ['placehold.co'],
  },
};

export default nextConfig;