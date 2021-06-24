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


app.get("/", (req, res)=>{
    res.send("this is our main handler for accepting / request....");
});

app.get("/api/courses", (req, res)=>{
    res.send(courses);
});

app.get("/api/courses/:id", (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("the given id is not found.......");
    res.status(200).send(course);
});

// app.post("/api//courses/add", (req, res)=>{

    //     //adding validator with the help of joi module...
    //     const schema = {
    //         name: Joi.string().min(3).required()
    //     };
    //     const result = Joi.validate(res.body, schema);
    
    //     if(result.error){
    //         res.status(400).send(result.error);
    //         return;
    //     }
    //     const course = {
    //         id: courses.length + 1,
    //         name: req.body.name
    //     };
    //     courses.push(course);
    //     res.send(course);
    // });
    
    
    //handling put request.....
    //updating the courses....

    app.put("/api/courses/update/:id", (req, res) => {
        /*steps:
            look the course with the id comming from url...
            if course won't find, replay 404 with a messane...
    
            now if course available validate the course...
            if request is invalid while validation, return 400 with message...
    
            if everything above is fine, then update the course....
            return the updated course to the client...
        */
        
        // const course = courses.find(c => c.id === parseInt(req.params.id));
        // if(!course) res.status(404).send("the given id is not found.......");

        // const schema = {
        //     name: Joi.string().min(3).required()
        // };
        // const result = Joi.validate(req.body, schema);
        // if(result.error) return res.status(400).send(result.error.details[0].message);
        

        course.name = req.body.name;
        res.send(course);
    });

    app.delete("/api/courses/delete/:id", (req, res) => {
             /*
            steps:
            look the course with the id comming from url...
            if course won't find, replay 404 with a messane...
    
            now if course available validate the course...
            if request is invalid while validation, return 400 with message...
    
            if everything above is fine, then update the course....
            return the updated course to the client...
            */
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if(!course) res.status(404).send("the given id is not found.......");

        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);


    });

    app.listen(port);