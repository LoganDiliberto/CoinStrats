const express = require("express");
const request = require("request");
const binance = require('binance-api-node').default
var mysql = require('mysql');
let app = express();

//Binance Stuff
var burl = "https://api.binance.com";
var query = "/api/v3/klines";
var api = "https://api.binance.com/api/v1/klines?symbol=BNBBTC&interval=1m&startTime=1583380400000&endTime=1583380500000";
//var apiKeys = require("aeriskey.json")
//var key1 = apiKeys.clientid
app.use(express.static("public"))
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Guitars12"
});

//Requests the json file from weather api with my id
app.get("/coin",function(req, res){
  var route = req.query.route
  const options = {
      method: 'GET',
      url: api
  };
      
    request(options, function (error, response, body) {
        res.send(body)
  });  
});

//opens the 8080 port
app.listen(8080, () =>
  console.log('Listening on port 8080!'),
);
