// Installed and loaded required modules 
const express = require('express');
const path = require('path');

// Set up express app
const app = express();

// Serve static assets from the 'public' dir using 'express.static()' method
app.use(express.static(path.join(__dirname, 'public')));

// 404 Error - page not found (also, trying out an arrow function, mostly to look cool)
app.use((req, res) => {
  res.status(404).send('404 Error: Page not found');
});

// Port environment variable

  // importing 'port env variable' using dotenv
require('dotenv').config();

  // setting default port to 8080 if a port environment variable isn't found
const PORT = process.env.PORT || 8080;


// Listen for request
app.listen(PORT, () => {
  console.log(`Listening on port${PORT}`);
});