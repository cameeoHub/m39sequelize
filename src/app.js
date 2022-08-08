const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, readMovies, updateMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    await sequelize.sync({ alter: true });
    if (yargsObj.create) {
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor })
    } else if (yargsObj.read) {
        await readMovies()
    } else if (yargsObj.update) {
        const filterObj = { title: yargsObj.title };
        const updateObj = { title: yargsObj.newTitle };
        await updateMovie(filterObj, updateObj);
    
    } else if (yargsObj.delete) {

    } else {
        console.log("Incorrect command")
    }
};

app(yargs.argv);