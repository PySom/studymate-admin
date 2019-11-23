const mongoose = require('mongoose')
const mongooseSchemaHelper = require('./mongooseSchemaHelper')

const courseSchema = mongoose.Schema({
    'name': {
        type: String,
        required: true
    }
})

mongooseSchemaHelper(courseSchema, '_id', '_id', '__v')

module.exports = mongoose.model('Course', courseSchema)