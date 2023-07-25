!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

// module.exports = nextConfig;
export default nextConfig;
