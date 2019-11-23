const notesController = require('express').Router()
const noteService = require('../services/noteService')

notesController.get('/', (req, res, next) => {
    noteService.allNotes()
        .then(notes => {
            res.json(notes.map(note => note.toJSON()))
        })
        .catch(err => next(err))
})

module.exports = notesController