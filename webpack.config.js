// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     host: "localhost",
//     port: 3007,
//     historyApiFallback: true,
//     hot: true,
//     liveReload: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//       "Access-Control-Allow-Headers":
//         "X-Requested-With, content-type, Authorization",
//     },
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     publicPath: "auto",
//     clean: true,
//   },
//   resolve: {
//     extensions: [".jsx", ".js", ".json", ".css"],

//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               ["@babel/preset-react", { runtime: "automatic" }],
//             ],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: {
//               importLoaders: 1,
//             },
//           },
//           "postcss-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "homePage",
//       filename: "remoteEntry.js",
//       remotes: {
//         navigation: "navigation@http://localhost:3001/remoteEntry.js",
//         listing:    "listing@http://localhost:3002/remoteEntry.js",
//       },
//       exposes: {
//         "./App": "./src/App.jsx",
//       },
//       shared: {
//         react: {
//           singleton: true,
//           eager: true,
//           requiredVersion: "^19.0.0",
//         },
//         "react-dom": {
//           singleton: true,
//           eager: true,
//           requiredVersion: "^19.0.0",
//         },
//       },
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//       title: "Home Page",
//     }),
//   ],
// };
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    host: "localhost",
    port: 3007,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "homePage",
      filename: "remoteEntry.js",
      remotes: {
        listing : "listing@https://listing-mf.vercel.app/remoteEntry.js"
      },
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^19.0.0",
        },
         "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^7.6.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Home Page",
    }),
  ],
};
