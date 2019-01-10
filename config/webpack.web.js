const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template:path.join(__dirname,'../public/index.html')
})

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry:{
    app:path.join(__dirname,'../src/App.js')
  },
  output:{
    filename:'[name].[hash].js',
    path:path.join(__dirname,'../dist'),
    publicPath:'/public/',
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:["babel-loader"],
        exclude:/node_modules/
      },
      {
        enforce:'pre',
        test:/\.(js|jsx)$/,
        loader:'eslint-loader',
        exclude:[
          path.resolve(__dirname,'../node_modules')
        ]
      },
      {
        test:/\.(css|less)$/,
        use:['style-loader','css-loader','less-loader']
      }
    ]
  },
  plugins:[
    htmlWebpackPlugin,
  ]
}

if(isDev) {
  config.entry = {
    app:[
      'react-hot-loader/patch',
      path.join(__dirname,'../src/App.js')
    ]
  }
  config.devServer = {
    host:'0.0.0.0',
    compress:true,
    port:'7777',
    contentBase:path.join(__dirname,'../dist'),
    hot:true,
    overlay:{
      errors:true
    },
    publicPath:'/public',
    historyApiFallback:{
      index:'/public/index.html'
    }
  }

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config