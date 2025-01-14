import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    // Handle image assets (png, jpg, jpeg, gif, svg, etc.)
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      include: path.resolve(__dirname, 'src/app/images'),
      type: 'asset/resource', // Webpack 5 asset module
      generator: {
        filename: 'static/images/[hash][ext]', // Output hashed filenames
      },
    });

    // Handle SCSS files
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',  // Inject styles into DOM
        'css-loader',    // Interprets CSS files
        'sass-loader',   // Compiles Sass to CSS
      ],
    });

    return config;
  },
};

export default nextConfig;
