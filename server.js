// server.js

// modules ===============================================
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

// configuration =========================================

// database config

var db = require('./app/db.js')

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