var express = require('express');

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

var mysql = require("mysql");
var cors = require("cors");

app.use(cors());

let connection = mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: "rzQ)2D?/",
    database: "projectmDB",
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("connection was successful, id: " + connection.threadId)
})


app.post("/create", (req, res) => { 
    const name = req.body.name;

    connection.query("INSERT INTO project (name) VALUES (?)", [name],
    (err, result ) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Succesfully Inserted");
        }
    }
    
    )
});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("app is listening on PORT " + PORT);
})