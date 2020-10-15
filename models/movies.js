module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define("Movie", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    })
    return Movie;
}