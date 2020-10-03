
const shortid = require('shortid');
const fs = require('fs');
const path = require('path');

function createNote(query, notesArray) {
  
    let results = {
        "title": query.title,
        "text": query.text,
        "id": shortid.generate()
    }
    notesArray.push(results);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray})
    );
    return notesArray;
};

function deleteNote(id, notesArray) {
    
    let newArray = notesArray.filter(noteObj => {
      return ( noteObj.id != id);
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: newArray})
    );
    return newArray;
}
module.exports = {
    createNote,
    deleteNote
};