/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
      styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4|webm|otf|ttf|woff|woff2|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig
