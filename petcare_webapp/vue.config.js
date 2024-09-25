const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  
  devServer: {
    proxy: 'https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net'
  }
};
