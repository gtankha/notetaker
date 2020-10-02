
const shortid = require('shortid');

function createNote(query, notesArray) {
    console.log("notesarray   "+ notesArray);
    let results = {
        "title" :  query.title,
        "text" : query.text,
        "id" : shortid.generate()
    }
    notesArray.push(results);
    return notesArray;
};

module.exports = {
    createNote
  };