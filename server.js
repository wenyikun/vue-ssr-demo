const Vue = require('vue')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.static(path.resolve(__dirname, './dist/client')))

const template = require('fs').readFileSync(
  path.resolve(__dirname, './public/index.html'),
  'utf-8'
)
const serverBundle = require('./dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
})

app.listen(8080, () => {
  console.log('启动8080')
})
