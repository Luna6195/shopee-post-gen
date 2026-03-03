/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable font optimization to avoid build errors
  optimizeFonts: false,
  // Allow image domains
  images: {
    domains: ['cf.shopee.vn'],
  },
};

export default nextConfig;
