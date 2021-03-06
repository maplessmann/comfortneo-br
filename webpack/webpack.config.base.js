const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectDir = path.resolve(process.cwd(), './')
const globImporter = require('node-sass-glob-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(projectDir, 'app/'),
      path.resolve(projectDir, 'node_modules'),
    ],
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: ['last 2 versions', 'not dead', 'not < 2%'],
                useBuiltIns: 'entry',
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './core/template.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}
