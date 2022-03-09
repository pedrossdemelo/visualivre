/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "http2.mlstatic.com",
      "mlb-s1-p.mlstatic.com",
      "mlb-s2-p.mlstatic.com",
      "mlb-s3-p.mlstatic.com",
      "mlb-s4-p.mlstatic.com",
      "mlb-s5-p.mlstatic.com",
      "mlb-s6-p.mlstatic.com",
      "mlb-s7-p.mlstatic.com",
      "mlb-s8-p.mlstatic.com",
      "mlb-s9-p.mlstatic.com",
    ],
  },
};

module.exports = nextConfig;
