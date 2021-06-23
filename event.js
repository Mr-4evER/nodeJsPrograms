/* In events in node, we need to firstly import the events with require() function
and then store it into a variable, now from that variable we will call an EventEmitter() function
and store it into a variable...
now we have two variable event and eventEmitter

calling an event...

for calling a event we have to call the emit() function of eventEmitter, which takes key of the event
as an argument example: .emit("doorOpen")
now we have to create an .on() function of eventEmitter which takes two arguments, key of the event and
function to be executed on the call of that key...
example: .on("doorOpen", ring); here doorOpen is the key which is been cross checked by .emit and 
emit comes up with the same key then the function present in the on() will execute...

 */


var event = require(`events`);
var eventEmitter = new event.EventEmitter();

var ring = function(){
	console.log("ringing bell");
}

eventEmitter.on("doorOpen", ring);
eventEmitter.emit("doorOpen");

