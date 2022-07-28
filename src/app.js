const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.create) {
        await createMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.read) {

    } else if (yargsObj.update) {
    
    } else if (yargsObj.delete) {

    } else {
        console.log("Incorrect command")
    }
};

app(yargs.argv);