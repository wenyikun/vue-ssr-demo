const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const clientCompiler = webpack(require('./webpack.client.config'))
const serverCompiler = webpack(require('./webpack.server.config'))
const { createBundleRenderer } = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')

const app = express()
const instance = webpackDevMiddleware(clientCompiler, {
  serverSideRender: true
})
app.use(instance)
webpackHotMiddleware(clientCompiler)
serverCompiler.run()
// const watch = compiler => {
//   return new Promise((resolve, reject) => {
//     compiler.watch({ aggregateTimeout: 300, poll: 1000 }, (err, stats) => {
//       console.log(
//         stats.toString({
//           colors: true,
//           modules: false,
//           children: false,
//           chunks: false,
//           chunkModules: false
//         }) + '\n\n'
//       )
//       resolve()
//     })
//   })
// }
// watch(serverCompiler)

const template = require('fs').readFileSync(
  path.resolve(__dirname, '../public/index.html'),
  'utf-8'
)

app.get('*', (req, res) => {
  const context = { url: req.url }
  const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
  const fs = res.locals.fs
  const outputPath = res.locals.webpackStats.toJson().outputPath
  const manifest = fs.readFileSync(outputPath + '/vue-ssr-client-manifest.json')
  const clientManifest = JSON.parse(manifest.toString())
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
  })
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
})

app.listen(3000, () => {
  console.log('\x1B[32m%s\x1B[39m', 'app listening on port 3000!')
})
