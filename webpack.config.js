const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: 'index.[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(png|jpeg|gif)$/i,
            use: [
              {
                loader: 'img-optimize-loader',
                options: {
                name: '[path][name].[ext]',
                compress: {
                  mode: 'high',
                  webp: true,
                  gifsicle: true,
                  disableOnDevelopment: false
                }
                }
              }
            ],
          },
          {
            test: /\.(mp3|mp4)$/i,
            use: [ 
              {
                options: {
                name: '[path][name].[ext]',
                loader: 'file-loader'
                }
              }
            ]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ],
    devServer: {
      port: 8080
    }
}