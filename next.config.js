const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ],
  {
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
