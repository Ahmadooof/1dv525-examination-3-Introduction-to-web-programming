var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'C:/Users/ahmad/OneDrive/Desktop/nginx-1.24.0/dist'),
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/'
  },
  //   output: {
  //   filename: './src/js/app.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/js/'
  // },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    static: [
      { directory: path.join(__dirname, 'src') },
      { directory: path.join(__dirname, 'dist') }
    ],
    port: 4000,
    watchFiles: ['src/**/*']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      filename: 'index.html',
      inject: true
    })
  ]
};

  //on development:

  // output: {
  //   filename: './src/js/app.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/js/'
  // },