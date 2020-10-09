// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define("Movie", {
            adult: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            backdrop_path: {
                type: DataTypes.STRING,
                allowNull: true
            },
            belongs_to_collection: {
                type: DataTypes.OBJECT,
                allowNull: true
            },
            budget: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            genres: {
                type: DataTypes.ARRAY,
                allowNull: true
            },
            homepage: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            imdb_id: {
                type: DataTypes.STRING,
                allowNull: true
            },
            original_language: {
                type: DataTypes.STRING,
                allowNull: true
            },
            original_title: {
                type: DataTypes.STRING,
                allowNull: true
            },
            overview: {
                type: DataTypes.STRING,
                allowNull: true
            },
            popularity: {
                type: DataTypes.STRING,
                allowNull: true
            },
            poster_path: {
                type: DataTypes.STRING,
                allowNull: true
            },
            production_companies: {
                type: DataTypes.ARRAY,
                allowNull: true
            },
            release_date: {
                type: DataTypes.STRING,
                allowNull: true
            },
            revenue: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            runtime: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            spoken_languages: {
                type: DataTypes.ARRAY,
                allowNull: true
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true
            },
            tagline: {
                type: DataTypes.STRING,
                allowNull: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true
            },
            video: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            vote_average: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            vote_count: {
                type: DataTypes.INTEGER,
                allowNull: true
            }

//probably add hooks
//run stringify things with arrays and objects
//change values from response
//return new object into DB

        })
        return Movie;
    }