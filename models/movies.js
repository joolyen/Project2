module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define("Movie", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        overview: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poster_path: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
    return Movie;
}