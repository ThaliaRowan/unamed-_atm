
var db = require("../models");

module.exports = function(app){


    app.get("/api/projects", function(req,res) {
        
        db.Project.findAll({}).then(function(dbProject) {
            res.json(dbProject)
        });
    });

    app.post("/api/create", function(req, res) {

        db.Project.create({
            name: req.body.name
        }).then(function(dbProject){
            console.log(dbProject);
            res.json(dbProject)
        });
    });


    app.post("/api/register",(req, res) => {
        
        db.User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch(err => {
            res.status(401).json(err)
        })
    });


    app.post("/api/login", (req,res) => {
        res.json({});
    });
}