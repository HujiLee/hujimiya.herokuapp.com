/**
 * Created by Administrator on 2017/3/1 0001.
 */
var http = require("http");
var port = process.env.PORT || 6565;

http.createServer(function (request,resp) {
    resp.writeHead(200,{
       "Content-Type":"text/plain"
    });
    resp.end("Hello Heroku"+"env.TEST:"+process.env.TEST);
}).listen(port);
console.log("Running at ",port);
