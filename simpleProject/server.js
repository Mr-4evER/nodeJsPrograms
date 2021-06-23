var http = require(`http`);
var url = require(`url`);

function startServer(route, handle){
	function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("Request receiving for "+pathname);
	route(handle, pathname);


	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("creating our simple projects server...");
	response.end();
	}
	http.createServer(onRequest).listen(8888);
}

exports.startServer = startServer;