//The application stores key files as
//environment variables
//We used dotenv for this purpose
//I created a .env file and set these values
//eg 
//PORT = 0000
//BASE_URL='api'
//MONGODB_URL = myurl
require('dotenv').config()

const PORT = process.env.PORT || 1337
const BASE_URL = '/api'
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    BASE_URL,
    MONGODB_URI,
    PORT
}