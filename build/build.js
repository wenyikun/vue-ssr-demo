const webpack = require('webpack')
const del = require('del')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const config = require('./webpack.base.config')
const clientCompiler = webpack(require('./webpack.client.config'))
const serverCompiler = webpack(require('./webpack.server.config'))

// app.use(webpackDevMiddleware(clientCompiler, {
//   publicPath: config.output.publicPath
// }));

const watch = compiler => {
  return new Promise((resolve, reject) => {
    compiler.watch({ aggregateTimeout: 300, poll: 1000 }, (err, stats) => {
      console.log(
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n'
      )
      resolve()
    })
  })
}

Promise.all([watch(clientCompiler), watch(serverCompiler)]).then(() => {
  require('../server')
})
