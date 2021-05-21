let mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: "root",
    password: "",
    database: ""
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection was successful, id: " + connection.threadId)
})