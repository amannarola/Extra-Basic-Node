/*var buf = Buffer.alloc(10);
buf.write("Hello");
console.log(buf);
console.log(buf.toString());

var buf2 = Buffer.from('Welcome');
console.log(buf2);
console.log(buf2.toJSON());
*/
//Stream

const fs = require("fs");

var data = fs.readFileSync(__dirname+"/input.txt","utf-8");
console.log(data);

var data2 = fs.readFile(__dirname+"/input.txt","utf-8",function(err,data){
    console.log(data);
});

var readableStream = fs.createReadStream(__dirname + "/input.txt", {encoding: 'utf-8'});
var writableStream = fs.createWriteStream(__dirname + '/data.txt')

readableStream.on('data',function(dataChunk){
        console.log(dataChunk);
        writableStream.write(dataChunk);
});