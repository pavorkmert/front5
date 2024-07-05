// next.config.js
module.exports = {
    basePath: 'front5',
    assetPrefix: 'front5',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/work': { page: '/work' },
        '/contacts': { page: '/contacts' },
      };
    },
  };
  
