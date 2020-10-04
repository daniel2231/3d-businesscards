const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const eslint_loader = {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  };

  const babel_loader = {
    test: /\.js$/,
    use: {
      loader: 'babel-loader'
    }
  };

  const css_loader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  };

  return {
    devtool: 'source-map',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [eslint_loader, babel_loader, css_loader]
    },
    plugins: [
      new HtmlWebpackPlugin({
        // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        template: 'index.html'
      }),
      new CopyPlugin({
        patterns: [{ from: 'public', to: 'public' }]
      })
    ]
  };
};
