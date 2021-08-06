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
        prependData: `
          @use "~@/assets/scss/vars";
          @use '~@/assets/scss/mixins';
        `,
      },
    },
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};
