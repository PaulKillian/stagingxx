// webpack.config.js
const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = (env, argv) => {
  const ENV = argv.mode === "production" ? "production" : "development";
  return {
    performance: {
      hints: false
    },
    entry: {
      script: ["./src/js/app.js", "./src/sass/style.scss"]
    },
    output: {
      filename: "script.min.js",
      path: path.resolve(__dirname, "js")
    },
    resolve: {
      alias: {
        TweenMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenMax.js"
        ),
        TimelineMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineMax.js"
        ),
        ScrollMagic: path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
        ),
        "animation.gsap": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
        )
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [require("autoprefixer")];
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new MiniCssExtractPlugin({
        filename: "../css/style.min.css"
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          zindex: false
        }
      })
    ],
    stats: {
      colors: true
    },
    devtool: ENV === "production" ? false : "source-map"
  };
};
