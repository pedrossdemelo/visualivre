/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["http2.mlstatic.com", "mlb-s1-p.mlstatic.com"],
  },
};

module.exports = nextConfig;
