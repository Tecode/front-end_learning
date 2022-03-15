const { defineConfig } = require("@vue/cli-service");

// 打包时将vue、vue-router排除
module.exports = {
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.externals(["vue", "vue-router"]);
  },
};
