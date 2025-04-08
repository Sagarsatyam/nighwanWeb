module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          reduceIdents: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
        },
      ],
    }),
  ],
};
