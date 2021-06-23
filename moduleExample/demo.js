function relay(){
	console.log("into relay function...");
}
function long(){
	console.log("into long function.........");
}

//exporting the required functions
module.exports.relayy = relay;
module.exports.looo = long;

/* the concept says that when ever you want to use the code of another file,
then firstly export that code with module.exports and the import it with require() function.
store the imported file into a variable and then use that variable to use the functions of 
another file */
