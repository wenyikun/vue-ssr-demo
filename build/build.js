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

const run = compiler => {
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
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

if (process.env.NODE_ENV === 'production1') {
  del.sync(['dist'])
  run(clientCompiler).then(() => {
    process.env.NODE_ENV = ''
    run(serverCompiler)
  })
} else {
  Promise.all([watch(clientCompiler), watch(serverCompiler)]).then(() => {
    require('../server')
  })
}
