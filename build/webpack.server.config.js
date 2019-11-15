const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
