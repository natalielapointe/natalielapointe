import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Create __dirname for ES Modules compatibility
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',  // Ensure static export
  distDir: 'dist',
  images: {
    unoptimized: true,  // Disable Next.js image optimization
  },
  webpack: (config) => {
    // Add PNG (and other image formats) to be processed by Webpack
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      include: path.resolve(__dirname, 'src/app/images'),  // Images in 'src/app/images'
      type: 'asset/resource',  // Output as static assets
      generator: {
        filename: 'static/images/[hash][ext]',  // Place in static/images with hashed filenames
      },
    });
    return config;
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
