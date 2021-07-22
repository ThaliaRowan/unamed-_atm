module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        taskname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Task;
}