#!/usr/bin/env node

const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length <= 1) throw new Error('No valid student data in the file');

    const header = lines[0].split(',');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const fields = {};

    console.log(`Number of students: ${students.length}`);

    students.forEach((line) => {
      const parts = line.split(',');
      if (parts.length < header.length) return; // Skip malformed rows
      const [firstname, , , field] = parts.map((part) => part.trim());
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const field in fields) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
