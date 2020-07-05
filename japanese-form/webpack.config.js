const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "form",
      library: { type: "var", name: "form" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Form": "./src/JapaneseForm",
      },
      shared: require("./package.json").dependencies,
    }),
    new ModuleFederationPlugin({
      name: "strings",
      library: { type: "var", name: "strings" },
      filename: "i18nRemoteEntry.js",
      remotes: {
        strings: "strings",
      },
      exposes: {
        "./strings": "./src/strings",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};
