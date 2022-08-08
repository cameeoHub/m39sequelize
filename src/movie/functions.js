const { sequelize } = require("../db/connection");
const Movie = require("./table");

exports.createMovie = async (movieObj) => {
        await sequelize.sync();
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.readMovies = async () => {
        await sequelize.sync();
    try {
        const list = await Movie.findAll({Movie});
        console.log(list);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try{
        if (movieObj.title) {
            await Movie.update({title: movieObj.newTitle}, {where:{title: movieObj.title}});
        console.log('The title has been updated')
        } else if (movieObj.actor) {
            await Movie.update({actor: movieObj.newActor}, {where:{actor: movieObj.actor}});
            console.log('The actor has been updated')
        } else {
            console.log('Please specify what you would like to update')
        }
    }
    catch(error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try{
        await Movie.destroy({where:{title: movieObj.title}});
        console.log('This entry has been successfully deleted.')
    }
    catch(error) {
        console.log(error);
    }
};
