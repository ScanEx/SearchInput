const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),    
    library: 'SearchInput',
    libraryTarget: 'umd2'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  },
  module: {
    rules: [ 
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      },  
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  plugins: [   
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    })
  ]
};