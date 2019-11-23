const Notes = require('../models/note')

const allNotes = () =>
    Notes.find({})
        .then(res => res)
        .catch(err => err)


module.exports = {
    allNotes
}