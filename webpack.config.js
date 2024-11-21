const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { debug } = require('console');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Import CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import CopyWebpackPlugin

module.exports = {
  entry: {
    main: './src/index.js',
    theme: './src/theme-toggle.js', // Add entry for light/dark mode script or other additional scripts
    stickyNav: './src/sticky-nav.js'
  },
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(), // Use CleanWebpackPlugin to keep the dist directory clean
    new HtmlWebpackPlugin({
      template: './public/index.html', // Points to your HTML template
      filename: 'index.html', // Output HTML file
    }),
    new CopyWebpackPlugin({ // Use CopyWebpackPlugin to copy static assets
      patterns: [
        { from: 'public/assets', to: 'assets' }, // Copy assets from public/assets to dist/assets
      ],
    }),

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
      {
        test: /\.(mp4|webm)$/,
        type: 'asset/resource', // Handle video assets
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
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },    
    },
    runtimeChunk: 'single', // Create a single runtime bundle for better long-term caching
    concatenateModules: true, // Modified to resolve issues related to concatenation scope
    minimize: true, // Minimize for better performance in production builds
  },
  // experiments: {
    // topLevelAwait: true, // Allow top-level await for dynamic imports
  // },
  // cache: false, // Uncommented to try disabling cache if needed
};
