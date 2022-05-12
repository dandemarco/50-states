const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // 'api/states'
    // becomes 'http://127.0.0.1:3000/api/states'
    proxy: 'http://127.0.0.1:3000'
  }
}
