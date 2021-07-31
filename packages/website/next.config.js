const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

const basePath = "/tiro-website";

module.exports = withNextPluginPreval({
    basePath: basePath,

    reactStrictMode: true,

    publicRuntimeConfig: {
        basePath: basePath
    },

    webpack(config, options) {
        // Fixes npm packages that depend on `fs` module
        if (!options.isServer) {
            //    config.node = {
            //       fs: "empty"
            //  };
        }
        // config.plugins.push(new BundleAnalyzerPlugin());

        // use
        config.resolveLoader.alias["svg-react"] = "@svgr/webpack";

        config.module.rules.push({
            test: /\.wasm$/,
            type: "javascript/auto",
            use: [
                {
                    loader: "file-loader",
                    options: { publicPath: basePath + "/_next/static", outputPath: "static" }
                }
            ]
        });
        return config;
    }
});
