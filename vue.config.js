module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    },
    publicPath:
      process.env.NODE_ENV === "production" ? "/behavioral-task-hub/" : "/",
    configureWebpack: {
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000
        }
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  }
};
