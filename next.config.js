/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: "/analytics-api/v1/analytics.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/analytics-api/v1/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });

    return config;
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
