const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNote, deleteNote } = require('../../lib/manageNotes');


router.get('/notes', (req, res) => {
    if (notes) {
        console.log ("noteswali:  "+ notes);
        res.json(notes);
    }
    else {
        res.status(400).send('The note is not properly formatted.');
    }
});

router.post('/notes', (req, res) => {
    // if any data in req.body is incorrect, send 400 error back
    if (req.body.title && req.body.text) {
        const results = createNote(req.body, notes);
        res.json(results);
    } else {
        res.status(400).send('The note is not properly formatted.');
    }
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log("res  before " + notes);
    const results = deleteNote(id, notes);
    console.log("res  after " + results);
    res.json(results);
});

module.exports = router;