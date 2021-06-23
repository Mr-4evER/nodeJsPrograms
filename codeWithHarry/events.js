var event = require("events");
var eventEmitter = new event.EventEmitter();

eventEmitter.on("shivam", function(){
    console.log("event with name shivam is executed.....");
});
function shivam(){
    eventEmitter.emit("shivam");
}
setInterval(shivam, 3000);
