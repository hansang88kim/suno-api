/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      // Add a list of libraries to exclude from bundling
      config.externals.push('rebrowser-playwright-core');
      config.externals.push('@playwright/browser-chromium');
      config.externals.push('canvas'); // Preventing canvas errors that may occur
    }
      config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource'
    });

    return config;
  },
  experimental: {
    serverMinification: false, // the server minification unfortunately breaks the selector class names
  },
};  

export default nextConfig;
