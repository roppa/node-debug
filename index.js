'use strict';

const http = require('http');

let counter = 0;

console.log('Initialised');

http.createServer((req, res) => {
  counter++;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Visitor number ' + counter);
  console.log('Sent request');
}).listen(8083);

