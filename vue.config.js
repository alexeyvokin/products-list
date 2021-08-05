module.exports = {
  lintOnSave: true,

  devServer: {
    open: true,
    watchOptions: {
      poll: true,
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/vars";',
      },
    },
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};
