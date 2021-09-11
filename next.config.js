module.exports = {
  reactStrictMode: true,



  async redirects() {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
    ]
  },



}
