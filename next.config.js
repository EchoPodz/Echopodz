// next.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/Echopodz/',
  basePath: '/Echopodz',
  trailingSlash: true,
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
};

module.exports = nextConfig;
