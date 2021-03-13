const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/whoami', function (req, res) {
  res.send('{ "username": "akanitkar" }')
})

module.exports.handler = serverless(app);