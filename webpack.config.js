const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    fileName: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
