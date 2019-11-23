//We defined the application routes in an app.js file
//We create an instance our server by passing the app 
//to the createServer method of the http module
const app = require("./app")
const http = require("http")
//The utils folder contains the config file and the custom middlewares
//The config file has the initializations for constants such as 
//PORT, BASE_URL and MONGODB_URL
//The cutom middlewares are contained in middleware.js
//It describes the middleware for unknown routes and errors
const config = require("./utils/config")

const server = http.createServer(app)

server.listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}`)
})

