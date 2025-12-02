import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable automatic image optimization to preserve original quality
    // We use unoptimized={true} on individual Image components for full quality
    unoptimized: false, // Keep false to allow per-image control via unoptimized prop
    // Ensure high quality for optimized images (though we'll use unoptimized for most)
    formats: ['image/webp', 'image/avif'],
    // Provide default sizes arrays (required by Vercel)
    // These won't affect images with unoptimized={true}
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Ensure images are served at full resolution for retina displays
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
