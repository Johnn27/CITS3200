var mongoose = require('mongoose')

var dbURI = 'mongodb://groupL:cits3200@ds115085.mlab.com:15085/3200groupl'
mongoose.connect(dbURI)

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI)
})

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected')
})

var gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg)
        callback()
    })
}

var model = require('./schema.js')