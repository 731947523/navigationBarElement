const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  publicPath: '/',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './../dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@common': resolve('src/common'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components')
    }
  }
}
