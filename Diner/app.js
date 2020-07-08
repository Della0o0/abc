// 搭建服务器
const http = require("http");
const url = require("url");
const fs = require("fs");
var app = http.createServer().listen(2020);;
var my = require("./mysql.js");
app.on("request", (req, res) => {
  var objUrl = url.parse(req.url, true);
  // 如果是 "/" 就是访问首页
  if (objUrl.pathname == "/") {
    objUrl.pathname = "/index.html";
  }
  // console.log(objUrl.pathname);
  if (objUrl.pathname.endsWith(".ajax")) {
    // console.log("ajax请求");
    // 切ajax请求   /menu.ajax   /staff.ajax   /specialties.ajax
    var type = objUrl.pathname.replace(/^\//,"").replace(/.ajax/,"");
    my.sel(res,type);
  } else if (objUrl.pathname.endsWith(".html")) {
    // console.log("资源请求");
    fs.readFile("./html/" + objUrl.pathname, (err, buf) => {
      res.end(buf);
    });
  } else {
    fs.readFile("./" + objUrl.pathname, (err, buf) => {
      res.end(buf);
    });
  }
});
