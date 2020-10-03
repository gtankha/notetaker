const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNote, deleteNote, readNote } = require('../../lib/manageNotes');
const fs = require('fs');
const path = require('path');

//========================== GET ROUTE ===========================================//
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

//========================== POST ROUTE ===========================================//
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

//========================== DELETE ROUTE ===========================================//

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const newNotes = readNote();
    const newNotesObj = JSON.parse(newNotes);
    const results = deleteNote(id, newNotesObj.notes);
    res.json(results);
});

module.exports = router;