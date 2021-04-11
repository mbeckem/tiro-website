const path = require("path");

const basePath = "/tiro-website";

module.exports = {
    basePath: basePath,

    reactStrictMode: true,

    publicRuntimeConfig: {
        basePath: basePath
    },

    webpack(config, options) {
        // Fixes npm packages that depend on `fs` module
        if (!options.isServer) {
            config.node = {
                fs: "empty"
            };
        }
        // config.plugins.push(new BundleAnalyzerPlugin());

        config.module.rules.push(
            {
                test: /\.inline\.svg$/,
                use: ["@svgr/webpack"]
            },
            {
                test: /\.wasm$/,
                type: "javascript/auto",
                use: [
                    {
                        loader: "file-loader",
                        options: { publicPath: basePath + "/_next/static", outputPath: "static" }
                    }
                ]
            }
        );
        return config;
    }
};
