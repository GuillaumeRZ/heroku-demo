const express = require('express')
const bodyParser = require('body-parser');
const app = express()

// Database things
const pg = require('knex')({
  client: 'postgres',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
  connection: process.env.DATABASE_URL || 'postgres://auggvovtnovryq:740dc650755fc33db06d2e455e69bed709d3bbc8e13e6b024164c699935e750e@ec2-54-217-245-9.eu-west-1.compute.amazonaws.com:5432/d5b71s6fg1tgvl?ssl=true'
});

// Import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Get port from environment and start our app !
 */
const port = process.env.PORT || 3001;
app.set('port', port);
const server = app.listen(app.get('port'), () => {
  console.log(`🚅 Express running → PORT ${server.address().port}`);
});

/* Get all the users except deleted one */
app.get('/users', function(req, res) {
  return pg('users').whereNull('deleted_at')
  .then( function (result) {
      return res.json({ success: true, message: result})
   })
   .catch(err => {
     console.log(err)
   })
})

/* Create user */
app.post('/users', function(req, res) {
  const username = req.body.username || 'defaultName';
  new Date;
  const timestamp = Date.now();

  return pg('users').insert({username, created_at: timestamp})
  .then( function (result) {
      return res.json({ success: true, message: `${username} + ${timestamp} created`})
   })
   .catch(err => {
     console.log(err)
   })
})

/* Delete user */
app.delete('/users', function(req, res) {
  const id = req.body.id;
  new Date;
  const timestamp = Date.now();

  return pg('users').where({id}).update({deleted_at: timestamp})
  .then( function (result) {
      return res.json({ success: true, message: `${id} + ${timestamp} deleted`})
   })
   .catch(err => {
     console.log(err)
   })
})
