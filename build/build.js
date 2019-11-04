const express = require('express')
const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
// const config = require('./webpack.base.config')
const clientCompiler = webpack(require('./webpack.client.config'))
const serverCompiler = webpack(require('./webpack.server.config'))

// app.use(webpackDevMiddleware(clientCompiler, {
//   publicPath: config.output.publicPath
// }));

clientCompiler.watch({ aggregateTimeout: 300, poll: 1000 }, (err, stats) => {
  console.log(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  )
})

serverCompiler.watch({ aggregateTimeout: 300, poll: 1000 }, (err, stats) => {
  console.log(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  )
})

require('../server')
