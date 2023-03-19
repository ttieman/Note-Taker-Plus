const notesPop = require('express').Router(); // router
const { readFromFile } = require('../helpers/fsUtils'); // import utils




notesPop.get('/api/notes', (req, res) => {   // gets notes data
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))  
    );
});





module.exports = notesPop;