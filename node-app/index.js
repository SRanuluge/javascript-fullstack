const http = require("http");

const hostname = "localhost";
const port = 3000;

var dd = "d";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Hello, Worldr", req);
});

console.log("dfdf");

server.listen(port, hostname, () => {
  console.log("Server is runing at port" + port);
});
