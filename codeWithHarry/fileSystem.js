var fs = require("fs");
fs.readFile("./codeWithHarry/in.txt", "utf8", function(err, data){
    console.log(err, data);
});
fs.writeFile("./codeWithHarry/out.txt", "writting the data into the file", ()=>{
    console.log("written success");
});