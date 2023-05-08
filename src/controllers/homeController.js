const connection = require('../config/database');
// const express = require('express')// import express 
const { getALLUusers } = require('../services/CRUDService')

const getHomePage = async (req, res) => {

    // const [results, fields] = await connection.query('SELECT * FROM Users ');
    let results = await getALLUusers();
    console.log("result", results)
    res.render('home.ejs', { listUsers: results })

}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    //     INSERT INTO Users (email,name,city)
    // VALUES('CHAUVT@gmail.com', 'hoidanit', 'hanoi'); 
    // console.log(req.body)
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;

    let { email, name, city } = req.body;
    console.log(email, name, city);
    // res.send(email, name, city);



    const [results, fields] = await connection.query(
        ` INSERT INTO 
        Users (email, name, city)
        VALUES(?, ?, ?) `,
        [email, name, city]);


    // `SELECT * FROM Users`,
    // function (err, results, fields) {
    //     // user = results;
    //     console.log("err", err); // results contains rows returned by server
    //     // console.log(err); // fields contains extra meta data about results, if available


    //     // console.log('user', user);
    res.send('Create User Success');
    // }

}


module.exports = { getHomePage, postCreateUser, getCreateUser };