const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");

const federationConfig = {
  name: "my-app",
  filename: "remoteEntry.js",
  exposes: {
    //...exposed components
    "./app": "./src/app",
  },

  shared: ["react", "react-dom"],
};

module.exports = {
  mode: "development",

  entry: {
    main: ["./src/app.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },

  plugins: [
    new FederatedTypesPlugin({
      federationConfig,
      // ...
    }),
  ],
};
