var http = require("http");
var a = 10;
var b = 20;
var c = a + b;
var msg = "Sum is " + c;
if (c == 30) {
  msg += "<br> C is 30";
} else {
  msg += "<br> C is not 30";
}
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end(msg);
  })
  .listen(3000);
console.log("Server is running at http://127.0.0.1:3000");
