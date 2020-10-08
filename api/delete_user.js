var express = require('express');
var router = express.Router();
var fs = require("fs");

router.delete('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id];
        
       console.log( data );
       res.end( JSON.stringify(data));

       fs.writeFile( __dirname + "/" + "users.json",JSON.stringify(data), function (err) {
        if (err) return console.log(err);
    });
    });
 })
   

module.exports=router;