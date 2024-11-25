#!/usr/bin/env node

const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
