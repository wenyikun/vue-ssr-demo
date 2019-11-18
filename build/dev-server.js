const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const serverCompiler = webpack(serverConfig)
const { createBundleRenderer } = require('vue-server-renderer')
const fs = require('fs')
const MFS = require('memory-fs')
const path = require('path')

const app = express()

clientConfig.entry.client = [
  'webpack-hot-middleware/client',
  clientConfig.entry.client
]
clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
const clientCompiler = webpack(clientConfig)
const devMiddleware = webpackDevMiddleware(clientCompiler, {
  serverSideRender: true,
  logLevel: 'error'
})
app.use(devMiddleware)
app.use(webpackHotMiddleware(clientCompiler))
let clientManifest = null
const clientPromise = () => {
  return new Promise(resolve => {
    clientCompiler.hooks.done.tap('plugin', compiler => {
      clientManifest = JSON.parse(
        devMiddleware.fileSystem.readFileSync(
          path.resolve(
            clientConfig.output.path,
            './vue-ssr-client-manifest.json'
          ),
          'utf-8'
        )
      )
      resolve()
    })
  })
}

const mfs = new MFS()
serverCompiler.outputFileSystem = mfs
let serverBundle = null
const serverPromise = () => {
  return new Promise(resolve => {
    serverCompiler.watch(
      { aggregateTimeout: 300, poll: 1000 },
      (err, stats) => {
        serverBundle = JSON.parse(
          mfs.readFileSync(
            path.resolve(
              serverConfig.output.path,
              './vue-ssr-server-bundle.json'
            ),
            'utf-8'
          )
        )
        resolve()
      }
    )
  })
}

const template = require('fs').readFileSync(
  path.resolve(__dirname, '../public/index.html'),
  'utf-8'
)

app.get('*', (req, res) => {
  const context = { url: req.url }
  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
  })
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
})

Promise.all([clientPromise(), serverPromise()]).then(() => {
  app.listen(3000, () => {
    console.log('\x1B[32m%s\x1B[39m', 'app listening on port 3000!')
  })
})
