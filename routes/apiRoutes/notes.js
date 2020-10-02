const router = require('express').Router();
const path = require('path');
const { stringify } = require('querystring');
const {notes} = require('../../db/db.json');
const {createNote} = require('../../lib/createNotes');
const fs = require('fs');

router.get('/notes', (req, res) => {
   
    let results = notes;
    if (results){
    res.json(results);
    }
    else{
    res.send(404);
    }
});

router.post('/notes', (req, res) => {

   let note = notes;

   
    // if any data in req.body is incorrect, send 400 error back
    if (req.body.title && req.body.text) {
        const results = createNote(req.body, note);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify({notes: results})
        );
        res.json(results);

    } else {
        res.status(400).send('The note is not properly formatted.');
      
    }
});

module.exports = router;