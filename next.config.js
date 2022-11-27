/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "etkinlik.itu.edu.tr",
      "s3.us-west-2.amazonaws.com",
      "media.discordapp.net",
      "miro.medium.com",
    ],
  },
};

module.exports = nextConfig;
