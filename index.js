// import module
// import { createServer } from 'http';
var http = require('http');


// Fun with req, & res
// Main Head and Body
// Head Token  or Data with res Status code 
// Body Data
// Listen Port 8080
// Terminal node index.js
// type in browser for serverhttp://localhost:8080/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
