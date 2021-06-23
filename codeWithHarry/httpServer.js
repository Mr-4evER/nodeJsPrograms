var http = require("http");

var port = process.env.port || 3000;

var server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("<h1>shivam sharma</h1>");
});
server.listen(port);