const path = require('path')


const config = {
  entry:{
    app:path.join(__dirname,'../src/server.entry.js')
  },
  output:{
    filename:'server.entry.js',
    path:path.join(__dirname,'../dist/'),
    publicPath:'/public/',
    libraryTarget:'commonjs2'
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:["babel-loader"],
        exclude:/node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
}

module.exports = config