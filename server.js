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

app.post("/api/register", (req,res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;

    connection.query("INSERT INTO users (fullname, email, password) VALUES (?,?,?)", [fullname, email, password],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send('New User Inserted');
            }
        }
    )
});


app.post("/api/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    connection.query("SELECT * FROM users WHERE email = ? AND password = ? ", [email, password], 
            (err, result) => {
                if(err) {
                    res.send({err: err})
                } 
                
                if(result.length > 0){
                    res.send({result: result})
                } else {
                    
                    res.send({message: "Wrong email/password"});
                }
            }
    )
})

app.post("/api/create", (req, res) => { 
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



app.get("/api", (req, res) => {
    connection.query("SELECT * FROM project", (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("app is listening on PORT " + PORT);
})