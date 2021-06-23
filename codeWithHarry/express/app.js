
/*
express implementation....
*/
var fs = require("fs");
var express = require("express");
var path = require("path");
var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    //var data = fs.readFileSync("index.html");
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/about", (req, res)=>{
    //var data = fs.readFileSync("index.html");
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.get("/contact", (req, res)=>{
    //var data = fs.readFileSync("index.html");
    res.sendFile(path.join(__dirname+'/contact.html'));
});

/*
fetching data from the url and sending that data back to UI,
example: contact/21 it will fetch 21 from the url and send it to UI with the help of res.send()
in node js if we are passing any parameter into url then at the controller(API) side the will be like:
"/contact/:id" or suppose we sended DOB in the url then url handler will be "/contact/:date/:month/:year"
*/
app.get("/contact/:id", (req, res)=>{
    //var data = fs.readFileSync("index.html");
    //res.sendFile(path.join(__dirname+'/contact.html'));
    res.send(req.params.id);
});
/*
request.params will fetch all the data coming from url...
but if we want a single data coming from the bunch of data...
example: in the below url data which is coming are : date, month and year...
if we want only date from this three then we will do : res.send(req.params.date)
if we want all the data then: res.send(req.params)
*/
app.get("/dob/:date/:month/:year", (req, res)=>{
    //var data = fs.readFileSync("index.html");
    //res.sendFile(path.join(__dirname+'/contact.html'));
    res.send(req.params);
});
app.use('/', router);
app.listen(process.env.port || 3000);





