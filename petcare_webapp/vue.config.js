const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  
  devServer: {
    proxy: 'https://petandcareapi-bhbgcngtfkbufvfy.canadacentral-01.azurewebsites.net'
  }
};
