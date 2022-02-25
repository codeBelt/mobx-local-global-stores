const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      /*
       * https://flaviocopes.com/nextjs-analyze-app-bundle/
       * https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375
       * https://medium.com/ne-digital/build-frontend-performance-monitor-dashboard-using-pagespeed-insights-e807a2caa6cf
       */
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
        environment: path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV || 'production'),
      };

      config.plugins = [
        ...config.plugins,

        process.env.NODE_ENV === 'production' ? new DuplicatePackageCheckerPlugin() : null,
      ].filter(Boolean);

      return config;
    },
  }
);
