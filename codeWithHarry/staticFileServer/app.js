//in the below code we are opening a html file with the help of file server
//on hitting a particular url...
//allpied if else condition on the url's pathname and opened a particular file....



var http = require("http");
var fs = require("fs");

var port = 3000;

var server = http.createServer((req, res)=>{
    
    res.setHeader("Content-type", "text/html");

    if(req.url == "/"){
        res.statusCode = 200;
        var homepage = fs.readFileSync("index.html");
        res.end(homepage);
    }else if(req.url == "/about"){
        res.statusCode = 200;
        var about = fs.readFileSync("about.html");
        res.end(about);
    }else if(req.url == "/contact"){
        res.statusCode = 200;
        var contact = fs.readFileSync("contact.html");
        res.end(contact);
    }else {
        res.statusCode = 404;
        res.end("<h1>Error</h1>");
    }
    
});
server.listen(port);