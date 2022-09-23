const mongoose = require('mongoose');

const dbConnection = async() =>{
  try {
     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
    await mongoose.connect(process.env.DB_CNN);
    console.log('BD online');
  } catch (error) {
    throw new Error('error a la hora de inciar la BD')
  }
}

module.exports = {
  dbConnection
}
