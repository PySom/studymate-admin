const notesController = require('express').Router()
const noteService = require('../services/noteService')

notesController.get('/', (req, res, next) => {
    noteService.allNotes()
        .then(note => {
            res.json(note.map(note => note.toJSON()))
        })
        .catch(err => next(err))
})

module.exports = notesController