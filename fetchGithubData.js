const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const username = 'marcomartinelli2';
const url = `https://api.github.com/users/${username}`;

fetch(url)
  .then(response => response.json())
  .then(user => {
    const dbPath = path.join(__dirname, 'db', 'db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    db.users = [user];

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log('GitHub user data has been updated in db.json');
  })
  .catch(error => console.error('Error fetching GitHub user data:', error));