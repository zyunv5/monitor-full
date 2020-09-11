const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件，引用相关的静态文件
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "monitor.js", //文件名
  },
  context: process.cwd(), //上下文对象
  mode: "development", //开发模式
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //静态文件根目录
    //before是用来配置路由的 express服务器
    before(router) {
      router.get("/success", function (req, res) {
        res.json({ id: 1 });
      });
      router.post("/error", function (req, res) {
        res.sendStatus(500);
      });
    },
    port:9988
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "header", //注入到header里面
    }),
  ],
};
