#!/usr/bin/env node

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const url = req.url;
  const databasePath = process.argv[2];

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students');

    try {
      await countStudents(databasePath)
        .then((data) => {
          res.end(); // End after successfully logging output
        })
        .catch(() => {
          res.end('Cannot load the database\n');
        });
    } catch (error) {
      res.end('Cannot load the database\n');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});


const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
