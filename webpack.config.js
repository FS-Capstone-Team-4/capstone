const webpack = require('webpack');
require('dotenv').config(); // This line loads the .env file and makes it available in process.env

module.exports = {
  devtool: 'source-map',
  plugins: [
    // DefinePlugin will replace process.env.REACT_APP_API_TOKEN with the actual value from your .env file
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_TOKEN': JSON.stringify(process.env.REACT_APP_API_TOKEN),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};

