/* 
in node js whenever we want to perform file input output, then we use a module name: file system module
the name of the module is: fs
*/

var fs = require(`fs`);
fs.readFile("fileIO inputfile.txt", function(err, data){
	if (err) {
		console.log(err);
	}else{
		console.log("data is asyc data:"+data.toString());
	}
});


//for reading data in synchronze form...

var data = fs.readFileSync("fileIO inputfile.txt");
console.log("reading into sync form: "+data.toString());
console.log("************************************************")