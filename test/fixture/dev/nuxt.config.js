const { resolve } = require('path')

module.exports = {
  dev: true,
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../../') }
  ],
  'gtm-new': {
    id: 'UA-XXX-XX'
  }
}
