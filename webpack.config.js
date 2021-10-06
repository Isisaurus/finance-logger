const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        //   to tell transform ts to js: rule to which file needs to be conferted and bundled uding a regex => needs to end in .ts and where can they found
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    fileName: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
