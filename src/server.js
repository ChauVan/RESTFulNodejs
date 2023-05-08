const express = require('express')// import express 
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const app = express()// create app for express
require('dotenv').config() //use file .env
const port = process.env.port || 8888
const hostname = process.env.hostname
// const connection = require('./config/database')


//config static file and viewEngine
configViewEngine(app)
//config request 
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
//define route
app.use('/', webRouters) ///test tien to dung truoc cac routes






app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})