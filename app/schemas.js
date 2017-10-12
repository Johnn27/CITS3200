var mongoose = require('mongoose')
var Schema = mongoose.Schema

var sourceSchema = new Schema({
    name: { type: String },
    url: { type: String }
})

mongoose.model('Source', sourceSchema, sources)