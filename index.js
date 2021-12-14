const express = require('express');
const logger = require('./logged/logger')
const app =express();



const port = 8000;

//app middelware logger.js
app.use(logger)

//static files
app.use(express.static(__dirname+ '/public'))


app.listen(port,(err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${port}`)
})