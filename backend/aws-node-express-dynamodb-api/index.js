const verifier = require('firebase-token-verifier');
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const projectId = "ak-food-delivery"
const dummy_data = require('./dummy-data.json');
const { request } = require('express');
const app = express()

app.use(cors())

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/whoami', cors(corsOptions), function (req, res) {
  res.send('{ "username": "akanitkar" }')
});

app.get('/menu-items/:restaurant_id', cors(corsOptions), function(req, res) {
  res.send(dummy_data.menu_item)
});

app.get('/categories', cors(corsOptions), async function(req, res) {
  // check first if its an OPTIONS request
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
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
    body: dummy_data.categories
 });
})

app.get('/restaurants', cors(corsOptions), async function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
    body: dummy_data.restaurants
 });
})


app.post("/cart", async function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // token = (req.headers["authorization"])
  // if (!token) {
  //   return res.status(401).send({
  //     message: 'This is forbidden1!'
  //  });
  // }
  console.log("hi in herre")
  const requestBody = request.body

  var params = {
    TableName : 'Table',
    Item: {
       item_id = "4321"
    }
  };
  
  var documentClient = new AWS.DynamoDB.DocumentClient();
  
  documentClient.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });

   return res.status(200).send()
})
module.exports.handler = serverless(app);
