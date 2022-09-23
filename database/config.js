const mongoose = require('mongoose');

const dbConnection = async() =>{
  try {
     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
     mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@team.rrgol.mongodb.net/mern_calendar`);
    console.log('BD online');
  } catch (error) {
    throw new Error('error a la hora de inciar la BD')
  }
}

module.exports = {
  dbConnection
}
