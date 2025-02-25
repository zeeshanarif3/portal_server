import mongoose from "mongoose";
import 'dotenv/config';
process.env.NODE_ENV = process.env.NODE_ENV || "local"; //local

const config = require("../config/config.js").get(process.env.NODE_ENV);

const { DB } = config;
// console.log(DB, "DB");
var options = {
    user: DB.UserName,
    pass: DB.Password,
};
// console.log(options, "options");


 const MONGOURI = `mongodb://${DB.HOST}:${DB.PORT}/${DB.DATABASE}`;
console.log(MONGOURI, "URI");

const InitiateMongoServer = async () => {
    try {
        console.log(MONGOURI);
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGOURI, options);
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;

