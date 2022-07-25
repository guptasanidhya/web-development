const fs = require("fs");
fs.readFile("delde.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("this is a msg");