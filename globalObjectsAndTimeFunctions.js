
//given the path in which file is present
console.log(__filename);

//gives the name of the directory in which file is present
console.log(__dirname);

function printStuff(){
	console.log("checking time functions")
}

//time functions
//executes the function after the completion of given time, example 5000 = 5sec.
setTimeout(printStuff, 5000);

//executes the function after each given interval of time, example it will execute this in every 2sec...
setInterval(printStuff, 2000);