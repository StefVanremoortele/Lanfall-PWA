module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /178\\.117\\.24\\.148\\:1337\/competitions/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /178\\.117\\.24\\.148\\:1337\/players/,
      handler: 'networkFirst'
    }
  ]
};
