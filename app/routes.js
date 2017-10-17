// app/routes.js

var serveStatic = require('serve-static')
var path = require('path')
var mongoose = require('mongoose')
var Source = mongoose.model('source')

module.exports = function(app) {

    // any api routes/server routes here ============

    app.get('/api/sources', function(req, res) {
        Source.find(function(err, sources) {

            if (err) {
                return res.send(err)
            }

            res.json(sources)
        })
    })

    app.post('/api/sources', function(req, res) {

        Source.create({
            name: req.body.name,
            url: req.body.url
        }, function(err, source) {
            if (err) {
                return res.status(500).end()
            }

            Source.find(function(err, sources) {
                if (err) {
                    return res.send(err)
                }

                res.json(sources)
            })

        })
    })

    app.delete('/api/sources/:source_id', function(req, res) {
        Source.remove({
            _id: req.params.source_id
        }, function(err, source) {
            if (err) {
                return res.send(err)
            }

            Source.find(function(err, sources) {
                if (err) {
                    return res.send(err)
                }

                res.json(sources)
            })

        })
    })

    // frontend routes ==============================
    app.use(serveStatic(__dirname, {
        'index': ['index.html']
    }))
}