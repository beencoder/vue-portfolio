
module.exports = {
    outputDir: "./docs",
    publicPath: "https://dakong8.github.io/vue-project/",
    chainWebpack: config => {
        config.module.rules.delete("eslint");
    }
}