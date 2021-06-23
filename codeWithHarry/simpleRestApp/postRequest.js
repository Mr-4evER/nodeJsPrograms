var express = require("express");
var app = express();
var Joi = require("joi");
var port = process.env.PORT || 3000;
app.use(express.json());


const courses = [
    {id: 1, name: "java"},
    {id: 2, name: "python"},
    {id: 3, name: "spring"},
    {id: 4, name: "spring boot"}
];


app.post("/courses", (req, res)=>{

    //adding validator with the help of joi module...
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(res.body, schema);

    if(result.error){
        res.status(400).send(result.error);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.listen(port);