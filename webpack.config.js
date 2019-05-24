const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = () => ({
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  externals: {
    react: 'commonjs react'
  },
  resolve: {
    extensions: ['.js', '.json', '.tsx', '.ts'],
    alias: {
      '#': path.resolve(__dirname, 'src')
    }
  }
});

module.exports = config;
