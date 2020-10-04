const express = require('express')
var cors = require('cors');
const app = express()
const routes = require('./api/routes/apis')
const bodyParser = require('body-parser')
const path = require('path');

    
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/apis', routes)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})




module.exports = app