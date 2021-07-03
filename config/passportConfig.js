var db = require("../models");
var localStrategy = require("passport-local").Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy({
            usernameField: "email"
        },
        (email, password, done) => {
            db.User.findOne({
                where: {
                  email: email
                }
              }).then(dbUser => {
                if (!dbUser) {
                    return done(null, false, {
                      message: "Incorrect email."
                    });
                  }else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                      message: "Incorrect password."
                    });
                  }
                  return done(null, dbUser);
              });
        
        })
    );
    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        db.User.findOne({_id: id}, (err,user) => {
            cb(err, user)
        })
    })
}