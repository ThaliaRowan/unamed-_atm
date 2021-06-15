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
          allowNull: false
      },
      password: {
            type: DataTypes.STRING,
            allowNull: false
      }

    });
    return User;
  };