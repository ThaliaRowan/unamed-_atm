var express = require('express');
var cors = require("cors");
var passport = require("passport");
var passportLocal = require("passport-local").Strategy;
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(express.static("public"));

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));

app.use(session({
  secret: "mysecret",
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("mysecret"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);



var db = require("./models");


require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
  