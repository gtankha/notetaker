const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNote, deleteNote, readNote } = require('../../lib/manageNotes');
const fs = require('fs');
const path = require('path');


router.get('/notes', (req, res) => {

    const newNotes = readNote();
    if (newNotes) {
    const newNotesObj = JSON.parse(newNotes);
    res.json(newNotesObj.notes);
    }
    else {
        res.status(400).send('The note is not properly formatted.');
    }
});

router.post('/notes', (req, res) => {
    // if any data in req.body is incorrect, send 400 error back
    const newNotes = readNote();
    const newNotesObj = JSON.parse(newNotes);
    if (req.body.title && req.body.text) {
        const results = createNote(req.body, newNotesObj.notes);
        res.json(results);
    } else {
        res.status(400).send('The note is not properly formatted.');
    }
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const newNotes = readNote();
    const newNotesObj = JSON.parse(newNotes);
    console.log("res  before " + newNotes);
    const results = deleteNote(id, newNotesObj.notes);
    console.log("res  after " + results);
    res.json(results);
});

module.exports = router;