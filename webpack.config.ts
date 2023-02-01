import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import type * as webpack from 'webpack';
import 'webpack-dev-server';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const config: Configuration = {
  mode: isProduction ? 'production' : 'development',
  target: 'web',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry: {
    index: path.resolve('app', 'index.tsx'),
  },
  resolve: {
    // alias: {
    //   app: path.resolve('app'),
    //   img: path.resolve('app', 'img'),
    //   components: path.resolve('app', 'components'),
    // },
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/img',
                },
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      // {
      //   test: /\.(?:png|svg|jpe?g)$/i,
      //   type: 'asset/resource',
      // },
      {
        // write image files under 10k to inline or copy image files over 10k
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[path]/[name].[ext]',
            },
          },
        ],
      },
      {
        // write files under 10k to inline or copy files over 10k
        test: /\.(woff|woff2|eot|ttf|otf)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].[id].css',
    }),
  ],
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: '[name].[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};

export default config;
