
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/vue-project/" : "/dd",
    chainWebpack: config => {
        config.module.rules.delete("eslint");
    }
}