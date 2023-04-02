
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "vue-project/" : "",
    chainWebpack: config => {
        config.module.rules.delete("eslint");
    }
}