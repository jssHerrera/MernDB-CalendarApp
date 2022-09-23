// importar express
const express = require('express')
const { dbConnection } = require('./database/config')
const cors = require('cors')
require('dotenv').config()

// crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// cors
app.use(cors())

// use the following code to serve images, CSS files, and JavaScript files in a directory name public
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json());

//rutas API
app.use('/api/auth', require('./routes/auth'))

//rutas Events
app.use('/api/events', require('./routes/events'))


// escuchar las peticion
app.listen(process.env.PORT, () =>{
  console.log(`servidor corrriedo ${process.env.PORT}`);
})
