module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.API_URL}:slug*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};
