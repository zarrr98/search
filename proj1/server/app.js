const express = require('express')
var cors = require('cors');
const app = express()
const routes = require('./api/routes/apis')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');


mongoose.Promise = global.Promise    
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


//added
const publicPath =  path.join(__dirname, '..', 'build')

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


module.exports = app