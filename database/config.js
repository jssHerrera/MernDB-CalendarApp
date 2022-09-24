const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST || "localhost"
const DB_USER = process.env.DB_USER || "merm_user"
const DB_PASSWORD = process.env.DB_PASSWORD || "gH49Lpkpot6Y2D50"
const DB_NAME = process.env.DB_NAME || "mern_calendar"
const DB_PORT = process.env.DB_PORT || 27017

const dbConnection = async() =>{
  try {
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/');` if your database has auth enabled
    // process.env.DB_CNN
    "mongodb://merm_user:gH49Lpkpot6Y2D50@localhost:27017/mern_calendar"
    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log('BD online');
  } catch (error) {
    throw new Error('error a la hora de inciar la BD')
  }
}

module.exports = {
  dbConnection
}


