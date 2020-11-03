const config = {
  presets: [
    ['@babel/env', { modules: false, useBuiltIns: false }],
    '@babel/react',
    '@babel/typescript',
    'minify'
  ],
  plugins: [
    '@babel/transform-runtime',
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/proposal-private-methods', { loose: true }],
    ['@babel/proposal-private-property-in-object', { loose: true } ]
  ]
};

module.exports = config;
