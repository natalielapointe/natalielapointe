import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import * as sass from 'sass'

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    disableStaticImages: true,
  },
  experimental: {
    optimizeCss: true,
  },
  sassOptions: {
    quietDeps: true,
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

    if (!config.plugins) {
      config.plugins = [];
    }

    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tapAsync('CopyCSSPlugin', (compilation, callback) => {
          const scssFilePath = path.resolve(__dirname, 'src/app/globals.scss');
          const outputPath = path.resolve(__dirname, 'public/styles/styles.css');

          if (fs.existsSync(scssFilePath)) {
            sass.render(
              {
                file: scssFilePath,
                outputStyle: 'compressed', 
              },
              (error, result) => {
                if (error) {
                  console.error('Sass Compilation Error:', error);
                  callback(error);
                  return;
                }

                fs.mkdirSync(path.dirname(outputPath), { recursive: true });
                fs.writeFileSync(outputPath, result.css);
                callback();
              }
            );
          } else {
            console.warn(`Sass file not found at: ${scssFilePath}`);
            callback();
          }
        });
      },
    });

    return config;
  },
};

export default nextConfig;
