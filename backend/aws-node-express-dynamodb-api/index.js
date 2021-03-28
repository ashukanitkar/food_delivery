const verifier = require('firebase-token-verifier');
const serverless = require('serverless-http');
const express = require('express');
const projectId = "ak-food-delivery"
const dummy_data = require('./dummy-data.json');
const app = express()

app.get('/whoami', function (req, res) {
  res.send('{ "username": "akanitkar" }')
});

app.get('/menu-items/:restaurant_id', function(req, res) {
  res.send(dummy_data.menu_item)
});

app.get('/categories', async function(req, res) {
  token = (req.headers["authorization"])
  if (!token) {
    return res.status(401).send({
      message: 'This is forbidden1!'
   });
  }

  try {
    // validate the token from the request
    const decoded = await verifier.validate(token, projectId)
  } catch (err) {
    // the token was invalid,
    console.error(err)
    return res.status(401).send({
      message: 'This is forbidden2!'
   });
  }

  return res.status(200).send({
    headers: req.headers,
    body: dummy_data.categories
 });
})

app.get('/restaurants', async function(req, res) {
  token = (req.headers["authorization"])
  if (!token) {
    return res.status(401).send({
      message: 'This is forbidden1!'
   });
  }

  try {
    // validate the token from the request
    const decoded = await verifier.validate(token, projectId)
  } catch (err) {
    // the token was invalid,
    console.error(err)
    return res.status(401).send({
      message: 'This is forbidden2!'
   });
  }


  return res.status(200).send({
    headers: req.headers,
    body: dummy_data.restaurants
 });
})

module.exports.handler = serverless(app);