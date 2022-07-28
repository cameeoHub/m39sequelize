const { sequelize } = require("../db/connection");
const Movie = require("./table");

exports.createMovie = async (movieObj) => {
        await sequelize.sync();
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie)
    } catch (error) {
        console.log(error)
    }
};