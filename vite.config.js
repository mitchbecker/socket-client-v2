const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: 'https://mitchbecker.github.io/socket-client-v2/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
