function printStuff(stuff){
	console.log(stuff);
}

printStuff("shivamm sharma");

/*javaScript can takes function as a parameter... */
function function1(anotherFunction, value){
	anotherFunction(value);
}
function1(printStuff, "taking function as a parameter");

/*anonymous functions, functions without name... 
we will create an anonymous function and store it into a variable and then pass that variable into function*/
var shivam = function(stuff){
	console.log(stuff);
}

function demoFunction(anotherFunction, value){
	anotherFunction(value);
}
demoFunction(shivam, "passing function as a parameter and printing the value from anonymous function...");

/*we can pass anonymoous function as a parameter */
function demoFunction(anotherFunction, value){
	anotherFunction(value);
}
demoFunction(function(stuff){ console.log(stuff); }, "passing anonymous function as a parameter and printing the value...");

/*
summary :
in node js and js it is possible to pass function as an argument to another function...
it is also possible to pass the whole anonymous function as a argument to other function...
*/
