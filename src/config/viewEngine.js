const path = require('path');
const express = require('express')// import express 

//config template engine
const configViewEngine = (app) => {
    app.set('views', './src/views')
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src', 'public')));
    // console.log(__dirname) folder tại nơi đang đứng  
}
module.exports = configViewEngine;