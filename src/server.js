const express = require('express')// import express 
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const app = express()// create app for express
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.hostname
const mysql = require('mysql2');// get the client


//config static file and viewEngine
configViewEngine(app)
//define route
app.use('/', webRouters) ///test tien o dung truoc cac routes

// test connection 
// create the connection to database
const connection = mysql.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
});
//end connection database

// simple query
connection.query(
    'SELECT * FROM Users ',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})