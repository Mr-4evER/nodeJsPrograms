/* creating a server which will give hello world in response,
what we are doing is, we are creating a http server at a particular port,
when we go to that port url then it will show hello world into the webpage */

//calling http server and storing it into a variable
var http = require(`http`);

//creating our server
//passing anonymous function as a parameter into createServer() function
http.createServer(function(request, response){
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("hello shivam sharma");
	response.end();
}).listen(8888);