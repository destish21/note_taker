const path = require('path');
const express = require("express");
const app = express();
const fs = ('fs');
const db = ('../db/db.json');
const { v4: uuidv4 } = require('uuid');
// const js = ('../public/assets/js/index.js');

const { title } = require('process');
const PORT = process.env.PORT || 8080;
console.log(PORT)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

/**
 * HTML ROUTES
 */
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/notes.html"));
    });
    app.get("*", (req, res) =>
    {res.sendFile(path.join(__dirname + "/public/index.html"));
})

/**
 * ApI ROUTEs
 */

app.get("/api/notes", (req, res) =>{
res.send(__dirname +'db');
});

app.get('/api/notes/:id', (req, res) => {
    const savedNotes = JSON.parse(fs.readFileSync("db", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
})

app.post("/api/notes", (req, res)=>{
    var newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
        
    };
    db.push(newNote);
     savedNotes = JSON.parse(fs.readFileSync('db', 'utf8'));
    res.send(newNote);
});

app.delete("/api/notes/:id", (req,res) => {
    const reqNoteID = req.params.id
    db.forEach(note => {
        if(reqNoteID === note.id) {
            var noteIndex = db.indexOf(note);
            db.splice(noteIndex,1);
        }
    });
    res.send(db);
});
// fs.writeFileSync('db', json('savedNotes'));
// res.json(savedNotes);

// server listening on the port 
app.listen(PORT, ()=>{
    console.log(`Server Listening on http://localhost:${PORT}`)
});
