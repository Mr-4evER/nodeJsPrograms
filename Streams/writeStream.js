var fs = require(`fs`);
var writeData = "writting hello into the file...";
var writeStream = fs.createWriteStream("output.txt");
writeStream.write(writeData, "UTF8");
writeStream.end();
writeStream.on("finish", function(){
	console.log("writting done...........");
});
