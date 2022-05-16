module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:slug*",
        destination: `${process.env.API_URL}/:slug*`,
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
