// const db = ('../db/db.json');
// const fs = ('fs');

// const { v4: uuidv4 } = require('uuid');

// //----------------------------------------------------
// //creating and exporting api routes for navigation to and from, posting and deliting notes
// module.exports = function (app) {

//     // use api/notes as a route to returns all the saved notes in db as JSON
//     app.get("/api/notes", (req, res) =>res.send(db));

//     //push the title and text inputs into the newNote json providing a unique id from uuidv4 
//     //and use the /api/notes route to post by sending it into the destination i.e. db.json
//     app.post("/api/notes", function (req, res){
//         var newNote = {
//             id: uuidv4(),
//             title: req.body.title,
//             text: req.body.text
//         };
//         db.push(newNote);
//         res.send(newNote);
//     });
    

//     app.delete("/api/notes/:id", function (req,res) {

//         // Get the unique id of the requested note 
//         var reqNoteID = req.params.id
        
//         // loop through the array of notes in the db.json
//         db.forEach(note => {
//             // if the id of the requested note matchs to any of the existing id of note objects in the db.json
//             //then grab the index of that note object and remove it from db by splicing it(noteIndex, 1) from its location
//             if(reqNoteID === note.id) {
//                 var noteIndex = db.indexOf(note);
//                 db.splice(noteIndex,1);
//             }
//         });
//         // Send the new db.json as the response with 1 item removed  
//         res.send(db);
//     })
// };