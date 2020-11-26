module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrgin: true,
        ws: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
