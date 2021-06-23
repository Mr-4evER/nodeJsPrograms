console.log("hello user 1");
setTimeout(callBack, 5000);

console.log("hello user 2");
setTimeout(callBack, 5000);

console.log("hello user 3");
setTimeout(callBack, 5000);

function callBack(){
	console.log("checking query with call back function....");
} 

//a callback function is a function 
//which is been passes as a parameter into another function and is delayed in execution due to its tasks.