const dataBase = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
const uuid = require('uuid');
//GET route retrieving the data stored in database
dataBase.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});

//POST route for submitting new notes
dataBase.post('/notes', (req, res) => {
    console.log(req.body);
    const id = `${Math.floor(Math.random() * 90 + 10)}`;
    const { title, text, } = req.body;

    if (req.body) {
        const newNote = {
            id,
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };
        console.info(response);
        res.json(response);
    }else {
        res.error('Error in posting note');
    }
});

dataBase.delete('/notes/:id', (req, res) => {
    const noteTitle = req.params.id;
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