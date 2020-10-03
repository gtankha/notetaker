
const shortid = require('shortid'); // npm module to create a new id
const fs = require('fs');
const path = require('path');


// ===================================== CREATE A NOTE =================================== //
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

//========================================= DELETE A NOTE =======================================//
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

//=========================================== READ A NOTE ============================================//
function readNote() {

try {
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8')
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