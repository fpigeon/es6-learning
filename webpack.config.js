var webpack = require('webpack');

module.exports = {
     entry: './src/App.js',
     devtool: 'source-map',
     output: {
         path: './dist',
         filename: 'app.js'
     },
      module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ["latest", "stage-0", "react"]
                }
            }
        ]
    }
 };