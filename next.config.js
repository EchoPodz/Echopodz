// next.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
};

module.exports = nextConfig;
