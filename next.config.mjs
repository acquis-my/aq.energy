!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/homeowners",
        destination: "/solar-panel-for-home-malaysia",
        permanent: true,
      },
      {
        source: "/solar-panel-for-home",
        destination: "/solar-panel-for-home-malaysia",
        permanent: true,
      },
      {
        source: "/businesses",
        destination: "/solar-panel-for-business",
        permanent: true,
      },
    ];
  },
};

// module.exports = nextConfig;
export default nextConfig;
