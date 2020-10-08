const fs = require("fs");
 const http = require("http");
const server = http.createServer(function(req,res){
    fs.readFile(__dirname+"/input.txt","utf-8",(err,data)=>{
        
        res.writeHead(200,{"content-type":"text/plain"});
        res.write(data);
        res.end();
});
}).listen(3000,()=>console.log("Server Running on port 3000")); 


fs.unlink(__dirname+"/input.txt",(err,data)=>{
        if(err) throw err;
        console.log("File Deleted"+data);
}); 

/* var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended"); */

/***
 * implementation of readFile 
 */
 fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
   console.log(data.toString());
}); 

console.log("Program Ended");