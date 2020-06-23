const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./modules/script.js"],
  output: {
    path: path.resolve(__dirname, "./js/"),
    filename: "main.js",
  },
};
