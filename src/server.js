const express = require('express')// import express 
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const app = express()// create app for express
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.hostname


//config static file and viewEngine
configViewEngine(app)
//define route
app.use('/', webRouters) ///test tien o dung truoc cac routes



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})