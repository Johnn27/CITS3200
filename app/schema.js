var mongoose = require('mongoose')
var Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator')

var sourceSchema = new Schema({
    name: { type: String, unique: true, required: true },
    url: { type: String, required: true }
})

sourceSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })

module.exports = {
    Source: mongoose.model('source', sourceSchema)
}