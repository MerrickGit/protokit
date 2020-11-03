const path = require('path');

const config = ({ config }) => {
  config.module.rules.forEach((el, index, arr) => {
    if (el.test.toString() === /\.css$/.toString()) {
      arr[index] = {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules=true']
      };
    }

    // if (el.test.toString() === /\.(mjs|jsx?)$/.toString()) {
    //   arr[index] = {
    //     test: /\.(m?js|jsx|ts|tsx)$/,
    //     exclude: /(node_modules|dist)/,
    //     use: [{ loader: 'babel-loader?cacheDirectory' }]
    //   };
    // }
  });

  // config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '#': path.resolve(__dirname, '..', 'src')
  };

  return config;
};

module.exports = config;
