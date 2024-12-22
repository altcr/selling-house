import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: 'ultra-realhomes.b-cdn.net',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
export default nextConfig;
