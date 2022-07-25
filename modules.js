const fs = require("fs")
let text= fs.readFileSync("dele.txt","utf-8");
text=text.replace("sanidhya","shanu");
console.log("The content of the file is")
console.log(text);
console.log("starting a new file");
fs.writeFileSync("shanu.txt",text);