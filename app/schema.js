var mongoose = require('mongoose')
var Schema = mongoose.Schema

var sourceSchema = new Schema({
    name: { type: String },
    url: { type: String }
})

module.exports = {
    Source: mongoose.model('source', sourceSchema)
}