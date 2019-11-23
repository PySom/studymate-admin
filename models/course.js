const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    'name': {
        type: String,
        required: true
    }
})

courseSchema.set('toJSON', {
    virtuals: true,
    transform: (document, requestedObj) => {
        requestedObj.id = requestedObj._id.toString()
        delete requestedObj._id
        delete requestedObj.__v
    }
})


module.exports = mongoose.model('Course', courseSchema)