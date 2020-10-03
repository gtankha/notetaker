
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

function readNote() {

console.log (" I am in read note"); 

try {
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8')
  console.log("data   "+ data);
  return (data);
} catch (err) {
  console.error(err)
}
};

module.exports = {
    createNote,
    deleteNote,
    readNote
};