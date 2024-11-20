const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      template: './src/index.html', // Points to your HTML template
      filename: 'index.html', // Output HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
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
    extensions: ['.js', '.jsx'], // Allow importing JS and JSX without specifying extensions
  },
  optimization: {
    //splitChunks: {
      //chunks: 'all', // Split all chunks to smaller files for optimization,
      runtimeChunk: 'single', // Create a single runtime bundle for better long-term caching
      concatenateModules: true,
    },
    
  //},
   // experiments: {
      //  topLevelAwait: true, // Allow top-level await for dynamic imports
  //  },
 //   cache: false,
};
