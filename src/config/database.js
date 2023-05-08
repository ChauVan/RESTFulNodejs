const mysql = require('mysql2/promise');// get the client
require('dotenv').config() //use file .env
// test connection 
// create the connection to database
const connection = mysql.createPool({
    host: process.env.db_host,
    port: process.env.db_port,//default: 3306
    user: process.env.db_user,//default: empty
    password: process.env.db_password,
    database: process.env.db_name
});
//end connection database

module.exports = connection;