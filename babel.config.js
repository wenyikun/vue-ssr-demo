module.exports = {
  presets: ['@vue/app'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
