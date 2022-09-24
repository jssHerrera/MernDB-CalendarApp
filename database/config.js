const mongoose = require('mongoose');

const dbConnection = async() =>{
  try {
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/');` if your database has auth enabled
    // process.env.DB_CNN
    "mongodb://merm_user:gH49Lpkpot6Y2D50@localhost:27017/mern_calendar"
    await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    console.log('BD online');
  } catch (error) {
    throw new Error('error a la hora de inciar la BD')
  }
}

module.exports = {
  dbConnection
}


