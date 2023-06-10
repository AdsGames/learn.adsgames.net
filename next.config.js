const { withSentryConfig } = require("@sentry/nextjs");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sentry: {
    hideSourceMaps: true,
  },
  redirects: async () => [
    {
      source: "/:path*",
      destination: "https://adsgames.net/learn/:path*",
      permanent: true,
      basePath: false,
    },
  ],
};

module.exports = withSentryConfig(nextConfig, { silent: true });
