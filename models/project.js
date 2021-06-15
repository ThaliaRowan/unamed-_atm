module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
    });
    return Project;
  };
  