const {transform} = require("@formatjs/ts-transformer");

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options.getCustomTransformers = () => {
                    return {
                        before: [
                            transform({
                                overrideIdFn: "[sha512:contenthash:base64:6]"
                            })
                        ]
                    };
                };

                return options
            })
    }
}
