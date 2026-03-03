import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  optimizeFonts: false,
  images: {
    domains: ['cf.shopee.vn', 'down-vn.img.susercontent.com'],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
