// import module
// import { createServer } from 'http';
var http = require('http');
var dt = require ('./module/datemin')
var fs = require('fs');
// import {dt as myDateTime} from './module/datemin' not exceptable this module

// Fun with req, & res
// Main Head and Body
// Head Token  or Data with res Status code 
// Body Data
// Listen Port 8080
// Terminal node index.js
// type in browser for serverhttp://localhost:8080/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello Rabia! The date and time are currently: " + dt.myDateTime());
//   Read Reqted URL
  res.write("\nUser Reqested URL: " + req.url);
  res.write('\n\nRead File!');
  
  //   for Read FIle
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
res.end('FIle Has been ');
}).listen(8080);
