const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { debug } = require('console');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].bundle.js', // Ensure unique filenames for different chunks
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before emitting new files
  },
  mode: 'development', // Use 'production' for final builds
  devtool: 'inline-source-map', // Helps in debugging; remove for production
  devServer: {
    static: './dist', // Serve files from the dist directory
    port: 8080, // You can change the port if needed
    open: true, // Automatically opens the browser when the server starts
    hot: true, // Enables Hot Module Replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Points to your HTML template
      filename: 'index.html', // Output HTML file
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Modified to also include .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile modern JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load CSS styles
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Handle image assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Allow importing JS, JSX and .Json without specifying extensions
  },
  stats: {
    errorDetails: true, // Keep detailed error reporting
    children: true, // Keep error details for child compilations
  },
  optimization: {
    runtimeChunk: 'single',
    concatenateModules: true,
    minimize: true,
    splitChunks: {
      chunks: 'all', // Split all chunks for better optimization
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  experiments: {
    topLevelAwait: true, // Allow top-level await for dynamic imports
  },
  cache: false, // Uncommented to try disabling cache if needed
};