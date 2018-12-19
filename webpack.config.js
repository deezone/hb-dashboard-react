const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",  // default
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", "css-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    // path: path.resolve('dist'),
    // path: path.resolve(__dirname, "dist/"),
    // path: path.join(__dirname, 'public'),
    // publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
      new HtmlWebpackPlugin({
        favicon: path.join(__dirname, './public/favicon.ico'),
        template: "./src/index.html",  // where I am looking for my HTML file
        filename: "index.html", // minified HTML that will be generated in the dist folder
        inject: 'body'
      }),
      new webpack.HotModuleReplacementPlugin()
  ]
};

// const path = require("path");
// const webpack = require("webpack");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//               loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: "[name]_[local]_[hash:base64]",
//               sourceMap: true,
//               minimize: true
//             }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js"
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "public/"),
// //    host: '0.0.0.0',
//     port: 3000,
//     publicPath: "http://localhost:3000/dist/",
//     hotOnly: true
//     // overlay: {
//     //   warnings: true,
//     //   errors: true
//     // }
//   },
//   plugins: [
//     // new HtmlWebpackPlugin({
//     //   favicon: path.join(__dirname, 'public/favicon.ico'),
//     //   inject: 'body',
//     //   template: './public/index.html',
//     //   filename: './index.html'
//     // }),
//     // new CleanWebpackPlugin(['dist']),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// };

