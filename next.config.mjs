const isProd = process.env.NODE_ENV === 'production';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    disableStaticImages: true,
  },
  basePath: isProd ? '/natalielapointe' : '',
  assetPrefix: isProd ? '/natalielapointe' : '',
  experimental: {
    optimizeCss: true,
  },
  sassOptions: {
    quietDeps: true,
    includePaths: [path.join(__dirname, 'globals.scss')]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      include: path.resolve(__dirname, 'src/app/images'),
      type: 'asset/resource', 
      generator: {
        filename: 'static/images/[hash][ext]',
      },
    });

    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        'style-loader', 
        'css-loader', 
        'sass-loader',
      ],
    });

    return config;
  },
};

export default nextConfig;
