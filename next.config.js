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
    webpack(config, options) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
        environment: path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV || 'production'),
      };

      config.plugins = [
        ...config.plugins,

        process.env.NODE_ENV === 'production' ? new DuplicatePackageCheckerPlugin() : null,
      ].filter(Boolean);

      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
      });

      config.module.rules.push({
        test: /\.graphqls$/,
        exclude: /node_modules/,
        use: ['graphql-let/schema/loader'],
      });

      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      });

      return config;
    },
  }
);
