// server.js

// modules ===============================================
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var favicon = require('serve-favicon')

// configuration =========================================

app.use(favicon(__dirname + '/assets/images/favicon-32x32.png'))

// database config

var db = require('./app/db.js')
var Source = mongoose.model('source')

// set port
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    //app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(__dirname + '/'))

// routes ===============================================
require('./app/routes')(app)

// start app ============================================
app.listen(port)

exports = module.exports = app