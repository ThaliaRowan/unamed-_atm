const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      fullname: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      password: {
            type: DataTypes.STRING,
            allowNull: false
      }

    });

        User.prototype.validPassword = function(password) {
            return bcrypt.compareSync(password, this.password);
        };

        User.addHook("beforeCreate", user => {
            user.password = bcrypt.hashSync(
                user.password,
                bcrypt.genSaltSync(10),
                null
            );
        });


    return User;
  };