
module.exports = {
    outputDir: "docs",
    publicPath: "/vue-project/",
    chainWebpack: config => {
        config.module.rules.delete("eslint");
    }
}