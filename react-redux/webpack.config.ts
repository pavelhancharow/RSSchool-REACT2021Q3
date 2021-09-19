import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const webpackConfig = (env): Configuration => ({
  // mode: env.development ? 'development' : 'production',
  ...(env.production || !env.development ? {} : { devtool: 'source-map' }),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: env.development ? '/' : ''
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/react.ico',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ]
});

export default webpackConfig;
