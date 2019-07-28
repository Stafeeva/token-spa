const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.jsx',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
    ]
  }
};
