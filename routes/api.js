const dataBase = require('express').Router();  // sets api routers
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
//GET route retrieving the data stored in database
dataBase.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});

//POST route for submitting new notes
dataBase.post('/notes', (req, res) => {
    console.log(req.body); 
    const id = `${Math.floor(Math.random() * 90 + 10)}`; //random id generator 
    const { title, text, } = req.body;

    if (req.body) {
        const newNote = {  //structures the new note posted to db file
            id,
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');  // reads and saves new notes

        const response = {   //success response 
            status: 'success',
            body: newNote,
        };
        console.info(response);  // logs the response 
        res.json(response);
    }else {
        res.error('Error in posting note');
    }
});

dataBase.delete('/notes/:id', (req, res) => {  // handles delete requests and takes the paramater of id 
    const noteTitle = req.params.id;  // selects the notes id 
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))  
    .then((json) => {
        const result = json.filter((note) => note.id !== noteTitle);

        writeToFile('./db/db.json',result);
        console.info(`Item ${noteTitle} has been deleted 🗑️`);
        res.json();
    });
});




module.exports = dataBase; 