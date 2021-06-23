/*
pipe is responsible for doing piping in between the 2 files and makes the flow of data into them.
we have 2 files in.txt and out.txt
in.txt contain some text and out.txt is blank...
what we have done is, we have taken the data of in.txt and with the help of pipes,
written all the data into out.txt
*/

var fs = require(`fs`);
var readableStream = fs.createReadStream("in.txt");
var writeStream = fs.createWriteStream("out.txt");
readableStream.pipe(writeStream);