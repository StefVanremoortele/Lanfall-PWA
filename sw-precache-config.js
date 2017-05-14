module.exports = {
  staticFileGlobs: [

  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /http:\/\/178.117.24.148:1336\/players/,
      handler: 'networkFirst'
    }
  ]
};


/*
staticFileGlobs.bak

    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'

    */