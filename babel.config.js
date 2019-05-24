const config = {
  presets: [
    ['@babel/env', { modules: false, useBuiltIns: false }],
    '@babel/react',
    '@babel/typescript',
    'minify'
  ],
  plugins: [
    '@babel/transform-runtime',
    ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
    '@babel/proposal-class-properties'
  ]
};

module.exports = config;
