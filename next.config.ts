import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable automatic image optimization to preserve original quality
    // We use unoptimized={true} on individual Image components for full quality
    unoptimized: false, // Keep false to allow per-image control via unoptimized prop
    // Ensure high quality for optimized images (though we'll use unoptimized for most)
    formats: ['image/webp', 'image/avif'],
    // Disable device size detection that might downscale images
    // Empty arrays prevent Next.js from generating responsive sizes
    deviceSizes: [],
    imageSizes: [],
    // Ensure images are served at full resolution for retina displays
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
