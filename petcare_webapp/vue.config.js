const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  
  devServer: {
    proxy: 'https://api-production-edcf.up.railway.app'
  }
};
