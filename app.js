const express = require('express')
const bodyParser = require('body-parser');

// Create our express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// done! we export it so we can start the site in start.js
module.exports = app;
