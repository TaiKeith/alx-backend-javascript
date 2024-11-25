#!/usr/bin/env node

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    await countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database\n');
      });
  } catch (error) {
    res.end('Cannot load the database\n');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
