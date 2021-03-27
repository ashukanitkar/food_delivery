const serverless = require('serverless-http');
const express = require('express');
const dummy_data = require('./dummy-data.json');
const app = express()

app.get('/whoami', function (req, res) {
  res.send('{ "username": "akanitkar" }')
})

app.get('/menu-items/:restaurant_id', function(req, res) {
  res.send(dummy_data.menu_item)
})

app.get('/categories', function(req, res) {
  res.send(dummy_data.categories)
})

app.get('/restaurants', function(req, res) {
  res.send(dummy_data.restaurants)
})

module.exports.handler = serverless(app);