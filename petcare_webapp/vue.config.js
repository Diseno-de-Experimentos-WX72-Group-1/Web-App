const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  
  devServer: {
    proxy: 'https://petcare-fcaze8atc5cpdte0.canadacentral-01.azurewebsites.net'
  }
};
