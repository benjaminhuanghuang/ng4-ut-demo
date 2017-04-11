module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: './src/specs.ts', watched: false }
    ],
    preprocessors: {
      './src/specs.ts': ['webpack']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    webpack: {
      module: {
        loaders: [
          {test: /\.ts$/, loader: 'awesome-typescript-loader'},
          {test: /\.html$/, loader: 'raw-loader'},
          {test: /\.css$/, loader: 'raw-loader'}
        ]
      },
      resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
      }
    },
    // webpackMiddleware: {
    //   stats: 'errors-only'
    // },
    browsers: ['Chrome']
  });
};
