var express = require("express");
var request = require("request");
let app = express();

//var apiKeys = require("aeriskey.json")
//var key1 = apiKeys.clientid
app.use(express.static("public"))

//Requests the json file from weather api with my id
app.get("/coin",function(req, res){
  var route = req.query.route
  const options = {
    method: 'GET',
    url: "https://www3.septa.org/hackathon/TransitView/6"
  };
      
    request(options, function (error, response, body) {
    //alert(body)
    /*const json = JSON.parse(body);
    if (!json.success) {
      console.error('Oh no!')
    } else {
        console.log("yes!")
        res.send(body)   
    }*/
        res.send(body)
  });  
});

//opens the 8080 port
app.listen(8080, () =>
  console.log('Listening on port 8080!'),
);