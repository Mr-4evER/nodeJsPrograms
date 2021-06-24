var express = require("express");
var app = express();
app.use(express.json);
var port = process.env.PORT || 8888;

const pool = require("./db");

app.get("/api", (req, res) => {
    res.send("checking......");
});


app.get("/api/allData", async (req, res) => {
    
        const data = await pool.query("SELECT * FROM demo", (error, result) => {
            if(error){
                throw error
            }
            res.json(data.rows);
        });
});

app.post("/api/data/:username", async (req, res) => {
    try {
        //var id = req.body.id;
        var username = req.params.username;
        //var password = req.body.password;

        const newData = await pool.query("INSERT INTO demo (id, username, password) VALUES($1) RETURNING *",[username]);
        res.status(200).json(newData);
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(port);