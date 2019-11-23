const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

noteSchema.set('toJSON', {
    virtuals: true,
    transform: (document, requestedObj) => {
        requestedObj.id = requestedObj._id.toString()
        delete requestedObj._id
        delete requestedObj.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)