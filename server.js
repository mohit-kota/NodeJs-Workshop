var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("Welcome to Node  <br>  JS");
  })
  .listen(3000);
console.log("Server is running at http://127.0.0.1:3000");
