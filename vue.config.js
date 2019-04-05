const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    externals: {
      jquery: "jQuery"
    }
  }
};
