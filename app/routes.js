// app/routes.js

var path = require('path')

// any model stuff here

module.exports = function(app) {

    // any api routes/server routes here ============

    app.put('/createSource', function(req, res) {

    })

    app.get('/getSources', function(req, res) {

    })

    // frontend routes ==============================
    app.get('*', function(req, res) {
        res.sendFile(path.resolve('assets/index.html'))
    })
}