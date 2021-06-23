var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

const courses = [
    {id: 1, name: "java"},
    {id: 2, name: "python"},
    {id: 3, name: "spring"},
    {id: 4, name: "spring boot"}
];


app.get("/", (req, res)=>{
    res.send("this is our main handler for accepting / request....");
});

app.get("/courses", (req, res)=>{
    res.send(courses);
});

app.get("/courses/:id", (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the given id is not found.......");
    res.status(200).send(course);
});

app.listen(port);