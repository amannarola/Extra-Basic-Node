var express = require('express');
var router = express.Router();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

router.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    data["user4"] = user["user4"];
    console.log( data );
    res.end( JSON.stringify(data));

    fs.writeFile( __dirname + "/" + "users.json",JSON.stringify(data), function (err) {
        if (err) return console.log(err);
    });
 });
   
});

module.exports=router;