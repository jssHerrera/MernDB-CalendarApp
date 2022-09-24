const DB_HOST = process.env.DB_HOST || "localhost"
const DB_USER = process.env.DB_USER || "merm_user"
const DB_PASSWORD = process.env.DB_PASSWORD || "gH49Lpkpot6Y2D50"
const DB_NAME = process.env.DB_NAME || "mern_calendar"
const DB_PORT = process.env.DB_PORT || 27017

module.exports = {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
}
